/* ES5 exact-version routing. Source declarations are not hardware test results. */
(function(root){
 'use strict';
 var base='https://akela-x.github.io/ps4freeforall/';
 var source='https://github.com/Akela-x/ps4freeforall/tree/0cd01608f5f8fb0095cd59ded2e94666eaa275f7';
 var routes={};
 function add(versions,name,path){for(var i=0;i<versions.length;i++)routes[versions[i]]={name:name,path:path};}
 add(['6.70','6.71','7.00','7.01','7.02','7.50','7.51','7.55','8.00','8.01','8.03','8.50','8.52','9.00','9.03','9.04','9.50','9.51','9.60'],'PSFree','ran/psfree/index.html');
 add(['6.72'],'6.72 host','ran/672/index.html');
 add(['10.00','10.50','13.00'],'G2AllPro','ran/g2allpro/index.html');
 add(['11.00','11.50','11.52'],'Slopkit','ran/slopkit/index.html');
 add(['11.02'],'CSSFontFace','ran/cssfontface/index.html');
 add(['12.00','12.02','12.50','12.52'],'RawGame4','ran/rawgame4/index.html');
 add(['13.02','13.04','13.50','13.52'],'13.x host','ran/1352/jb.html?log=1');
 add(['14.00'],'14.00 host','ran/mps/exploit.html?afterglow=run&mode=goldhen&trusted=1');
 function normalize(version){
  var value=String(version||'').replace(/^\s+|\s+$/g,'');
  return /^\d{1,2}\.\d{2}$/.test(value)?value:'';
 }
 function resolve(model,firmware){
  var version=normalize(firmware),route;
  if(model!=='PS4')return {status:'unavailable',firmware:version};
  if(!version)return {status:'missing',firmware:''};
  route=Object.prototype.hasOwnProperty.call(routes,version)?routes[version]:null;
  if(!route)return {status:'unsupported',firmware:version};
  return {status:'available',firmware:version,name:route.name,url:base+route.path,source:source};
 }
 function canLaunch(detected,model,firmware){
  var route=resolve(model,firmware);
  return !!detected&&detected.model==='PS4'&&normalize(detected.firmware)===route.firmware&&route.status==='available';
 }
 root.ConsoleWebKitLauncher={resolve:resolve,canLaunch:canLaunch,normalize:normalize,source:source,versions:Object.keys(routes).sort(function(a,b){return Number(a)-Number(b);})};
}(typeof window!=='undefined'?window:this));
