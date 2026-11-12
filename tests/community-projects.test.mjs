import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createContext,runInContext} from "node:vm";
const source=readFileSync(new URL("../lib/community-projects.js",import.meta.url),"utf8");
const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
const js=readFileSync(new URL("../app.js",import.meta.url),"utf8");
const context=createContext({});
runInContext(source,context);
const data=context.ConsoleWebKitCommunity;
test("all 15 accessible GitHub projects are listed without duplicates",()=>{
 assert.equal(data.projects.length,15);
 assert.equal(data.projects.filter(x=>x.fork).length,2);
 assert.equal(new Set(data.projects.map(x=>x.id)).size,15);
 assert.deepEqual(Array.from(data.missing),["Swordpdf/ProsperoEden","blackbearreloaded/ProsperoEden"]);
 assert.ok(data.projects.some(x=>x.id==="Swordpdf/PS5SX2"));
 assert.ok(data.projects.some(x=>x.id==="illusionyy/ps-patch-system"));
 assert.ok(data.projects.some(x=>x.id==="MangoScango/ps5-account-tools"));
});
test("projects distinguish exploits from firmware, homebrew and utilities",()=>{
 const categories=new Set(data.projects.map(x=>x.kind));
 for(const category of ["entry","cfw","loader","homebrew","utility"])
  assert.ok(categories.has(category),category);
 const y2jb=data.projects.find(x=>x.id==="notmaj0r/Y2JB");
 const emulator=data.projects.find(x=>x.id==="Swordpdf/PS5SX2");
 const cfw=data.projects.find(x=>x.id==="Atmosphere-NX/Atmosphere");
 assert.equal(y2jb.kind,"entry");
 assert.equal(emulator.kind,"homebrew");
 assert.equal(cfw.kind,"cfw");
 assert.equal(data.projects.find(x=>x.id==="illusionyy/ps-patch-system").platform,"PS4 / PS5");
});
test("the directory uses native GitHub links only and remains ES5",()=>{
 assert.doesNotMatch(source,/\beval\(|\bfetch\(|XMLHttpRequest|document\.write|new Function\(/);
 assert.doesNotMatch(source,/\b(?:const|let)\s+[A-Za-z_$]|=>|\?\./);
 assert.match(source,/https:\/\/github\.com\//);
 assert.match(source,/textContent/);
 assert.match(source,/noopener noreferrer/);
 assert.match(html,/src="\.\/lib\/community-projects\.js"/);
 assert.match(html,/id="community-projects"/);
 assert.match(js,/ConsoleWebKitCommunity\.render/);
});
