import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context=vm.createContext({});
const code=readFileSync(new URL('../lib/ps4-launcher.js',import.meta.url),'utf8');
vm.runInContext(code,context);
const api=context.ConsoleWebKitLauncher;
test('exact firmware mapping including every routing boundary',()=>{
 const expected={'6.70':'PSFree','6.71':'PSFree','6.72':'6.72 host','7.00':'PSFree','9.60':'PSFree','10.00':'G2AllPro','10.50':'G2AllPro','11.00':'Slopkit','11.02':'CSSFontFace','11.50':'Slopkit','11.52':'Slopkit','12.00':'RawGame4','12.02':'RawGame4','12.50':'RawGame4','12.52':'RawGame4','13.00':'G2AllPro','13.02':'13.x host','13.04':'13.x host','13.50':'13.x host','13.52':'13.x host','14.00':'14.00 host'};
 for(const [version,name] of Object.entries(expected))assert.equal(api.resolve('PS4',version).name,name,version);
});
test('no nearest-version fallback for unsupported firmware or malformed values',()=>{
 for(const fw of ['6.00','6.50','6.69','6.73','9.61','10.01','10.70','11.01','11.51','12.51','13.01','13.51','14.01','14.02','15.00','9.0','9.00.1','9.00junk','<script>','__proto__','constructor'])assert.notEqual(api.resolve('PS4',fw).status,'available',fw);
});
test('all non-PS4 platforms stay unavailable even with a supported PS4 firmware',()=>{
 for(const model of ['PS3','PS5','PS Vita','Wii U','Nintendo Switch','Xbox','']){assert.equal(api.resolve(model,'9.00').status,'unavailable');assert.equal(api.canLaunch({model,firmware:'9.00'},model,'9.00'),false);}
});
test('manual input cannot launch on a PC or on a different PS4 version',()=>{
 assert.equal(api.canLaunch({model:'',firmware:''},'PS4','9.00'),false);
 assert.equal(api.canLaunch({model:'PS4',firmware:'14.02'},'PS4','9.00'),false);
 assert.equal(api.canLaunch({model:'PS4',firmware:''},'PS4','9.00'),false);
 assert.equal(api.canLaunch({model:'PS4',firmware:'9.00'},'PS4','9.00'),true);
});
test('every available route uses only the selected external host',()=>{
 for(const fw of api.versions){const url=new URL(api.resolve('PS4',fw).url);assert.equal(url.origin,'https://akela-x.github.io');assert.ok(url.pathname.startsWith('/ps4freeforall/ran/'));}
 assert.doesNotMatch(code,/=>|\?\.|\b(?:const|let)\s+/);
});
