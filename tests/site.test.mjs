import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createContext,runInContext} from "node:vm";
const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
const app=readFileSync(new URL("../app.js",import.meta.url),"utf8");
const css=readFileSync(new URL("../styles.css",import.meta.url),"utf8");
const ua=readFileSync(new URL("../lib/console-detect.js",import.meta.url),"utf8");
test("standalone ConsoleWebKit has no dependency on the old Repo Radar web app",()=>{
 assert.match(html,/<title>ConsoleWebKit/);
 assert.match(html,/src="\.\/app\.js"/);
 assert.match(html,/src="\.\/lib\/console-detect\.js"/);
 assert.match(html,/href="\.\/styles\.css"/);
 assert.doesNotMatch(html,/src="\.\/console-hub\.js"/);
 assert.doesNotMatch(html,/supabase-js|supabase\.co/);
});
test("all IDs accessed in the UI are present and unique",()=>{
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length);
 for(const match of app.matchAll(/\$\("([^"]+)"\)/g))
  assert.ok(ids.includes(match[1]),"missing #"+match[1]);
});
test("browser page is a read-only diagnostics tool without auto-execution",()=>{
 assert.match(html,/No jailbreak or exploit code is run/);
 assert.match(app,/navigator\.userAgent/);
 assert.match(app,/hintCapabilities\(/);
 assert.doesNotMatch(app,/eval\(|new Function\(|WebAssembly\.instantiate|fetch\(|XMLHttpRequest|document\.write/);
 assert.match(app,/https:\/\/peteroxhka\.github\.io\/repo-radar\/\?console=/);
});
test("console pages render on legacy ES5 browsers",()=>{
 assert.doesNotMatch(app,/\b(?:const|let)\s+[A-Za-z_$]/);
 assert.doesNotMatch(app,/=>|\?\.|\bimport\s/);
 assert.doesNotMatch(ua,/=>|\?\.|\bimport\s/);
});
test("language switch and manual fallback exist without interfering with autodetection",()=>{
 assert.match(html,/id="locale-toggle"/);
 assert.match(app,/setLang\(language==="ru"\?"en":"ru"\)/);
 assert.match(app,/readDetection\(\)/);
 assert.match(html,/id="manual-panel"[^>]*hidden/);
 assert.match(app,/manualModel/);
 assert.match(css,/prefers-reduced-motion/);
});
test("device detection parses models, but never invents firmware",()=>{
 const ctx=createContext({});
 runInContext(ua,ctx);
 const scan=ctx.RepoRadarConsoleDetect.detect;
 const ps4=scan("Mozilla/5.0 (PlayStation; PlayStation 4/9.00) AppleWebKit/605.1");
 const unknown=scan("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
 assert.equal(ps4.model,"PS4");
 assert.equal(ps4.firmware,"9.00");
 assert.equal(unknown.model,"");
 assert.equal(unknown.firmware,"");
});
