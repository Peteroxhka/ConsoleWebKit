/* Verified upstream references, 2026-11-13. Metadata only.
   No third-party scripts, releases, payloads or binaries are loaded.
   Classic ES5 for PS4/PS5 browser compatibility. */
(function(root){
 "use strict";
 var items=[
  {id:"itsPLK/ps5-y2jb-autoloader",fork:true,platform:"PS5",type:"Research / loader",typeRu:"Исследования / загрузчик",license:"GPL-3.0",release:"v1.1.0-ba879c8",info:"Payload loader for previously exploited PS5 consoles. Not a PS4 browser exploit.",infoRu:"Загрузчик для PS5, на которой уже получен доступ. Не является эксплойтом браузера PS4."},
  {id:"niakw/ProsperoEden-Encore",platform:"PS5",type:"Homebrew / emulator",typeRu:"Homebrew / эмулятор",license:"GPL-3.0",info:"Experimental Switch emulator targeting PS5 homebrew environments.",infoRu:"Экспериментальный эмулятор Nintendo Switch для среды homebrew на PS5."},
  {id:"zecoxao/BD-JB-Relapse",platform:"PS5",type:"Security research",typeRu:"Исследования безопасности",release:"2.0.0",info:"PS5 BD-J kernel exploit research. The author describes support up to PS5 13.42; requires a disc-based environment, not a browser URL.",infoRu:"Исследования kernel-эксплойта PS5 через BD-J. Автор указывает версии до PS5 13.42. Это не веб-страница для запуска."},
  {id:"mihawk-99/PS5_MihawkOS",platform:"PS5",type:"Experimental homebrew",typeRu:"Экспериментальное homebrew",license:"GPL-3.0",release:"v4.0.0-alpha-4",info:"Experimental Windows-like homebrew environment for PS5, not a universal jailbreak.",infoRu:"Экспериментальная среда homebrew для PS5, похожая на Windows. Не универсальный джейлбрейк."},
  {id:"notmaj0r/Y2JB",fork:true,platform:"PS5",type:"Security research",typeRu:"Исследования безопасности",license:"MIT",release:"Relapse",info:"PS5 YouTube userland entry research with a Relapse release. Firmware ranges and setup are specific to that app; not a generic website exploit.",infoRu:"Точка входа через YouTube на PS5 и релиз Relapse. Поддержка зависит от приложения и прошивки; это не обычный веб-эксплойт."},
  {id:"Gezine/CivSwitch",platform:"Nintendo Switch",type:"Security research",typeRu:"Исследования безопасности",license:"MIT",info:"Nintendo Switch userland entry-point research using Civilization VII. Not a universal, browser-launched jailbreak.",infoRu:"Исследование точки входа в пользовательское окружение Switch через Civilization VII. Не универсальный браузерный джейлбрейк."},
  {id:"THZoria/NX_Firmware",platform:"Nintendo Switch",type:"Firmware reference",typeRu:"Материалы о прошивках",info:"Nintendo Switch firmware reference collection, not a PS4/PS5 exploit.",infoRu:"Коллекция прошивок Nintendo Switch, а не эксплойт PS4 или PS5."},
  {id:"sthetix/Warmboot-Extractor",platform:"Nintendo Switch",type:"Firmware utility",typeRu:"Утилита прошивки",info:"Switch warmboot firmware extraction utility; not a web browser exploit.",infoRu:"Утилита извлечения компонентов прошивки Switch; не эксплойт веб-браузера."},
  {id:"suchmememanyskill/EmmcHaccGen",platform:"Nintendo Switch",type:"Firmware utility",typeRu:"Утилита прошивки",license:"License not confirmed",info:"Nintendo Switch eMMC preparation utility. Review its documentation before assuming compatibility.",infoRu:"Утилита подготовки eMMC для Nintendo Switch. Совместимость требует отдельной проверки."},
  {id:"Ultra-NX/UltraNX",platform:"Nintendo Switch",type:"Community toolkit",typeRu:"Набор инструментов",info:"Customized Nintendo Switch firmware bundle; this is not a standalone browser jailbreak.",infoRu:"Сборка кастомной прошивки Nintendo Switch. Не самостоятельный браузерный джейлбрейк."},
  {id:"Swordpdf/PS5SX2",platform:"PS5",type:"Homebrew / emulator",typeRu:"Homebrew / эмулятор",license:"GPL-3.0",info:"Port of the PCSX2 PlayStation 2 emulator for PS5 homebrew environments. Not a jailbreak entry point.",infoRu:"Порт эмулятора PlayStation 2 (PCSX2) для PS5 с homebrew. Не является точкой входа для джейлбрейка."},
  {id:"illusionyy/ps-patch-system",platform:"PS4 / PS5",type:"App patch framework",typeRu:"Патчи приложений",license:"Apache-2.0",info:"Framework for patching PS4 and PS5 applications. Not evidence of jailbreak compatibility with PS4 14.00.",infoRu:"Система патчей приложений PS4 и PS5. Не подтверждает возможность джейлбрейка на PS4 14.00."},
  {id:"mpereiraesaa/prospero-win",platform:"PS5",type:"Homebrew / compatibility",typeRu:"Homebrew / совместимость",license:"LGPL-2.1",info:"Experimental Windows application compatibility runtime for a homebrew-enabled PS5.",infoRu:"Экспериментальная среда запуска Windows-приложений на PS5 с доступным homebrew."},
  {id:"MangoScango/ps5-account-tools",platform:"PS5",type:"Account management",typeRu:"Управление профилями",license:"GPL-3.0",info:"Local PS5 profile administration utility. This is not a standalone jailbreak or PS4 tool.",infoRu:"Утилита управления локальными профилями PS5. Не является самостоятельным джейлбрейком или инструментом PS4."},
  {id:"Atmosphere-NX/Atmosphere",platform:"Nintendo Switch",type:"Custom firmware",typeRu:"Кастомная прошивка",license:"GPL-2.0",info:"Work-in-progress customized firmware for Nintendo Switch. Not a PS4/PS5 project.",infoRu:"Разрабатываемая кастомная прошивка Nintendo Switch. Не относится к PS4 или PS5."}
 ];
 var missing=["Swordpdf/ProsperoEden","blackbearreloaded/ProsperoEden"];
 // A source being reachable does not prove compatibility or safety.
 var classification={
  "itsPLK/ps5-y2jb-autoloader":"loader",
  "niakw/ProsperoEden-Encore":"homebrew",
  "zecoxao/BD-JB-Relapse":"entry",
  "mihawk-99/PS5_MihawkOS":"homebrew",
  "notmaj0r/Y2JB":"entry",
  "Gezine/CivSwitch":"entry",
  "THZoria/NX_Firmware":"utility",
  "sthetix/Warmboot-Extractor":"utility",
  "suchmememanyskill/EmmcHaccGen":"utility",
  "Ultra-NX/UltraNX":"cfw",
  "Atmosphere-NX/Atmosphere":"cfw",
  "Swordpdf/PS5SX2":"homebrew",
  "illusionyy/ps-patch-system":"utility",
  "mpereiraesaa/prospero-win":"homebrew",
  "MangoScango/ps5-account-tools":"utility"
 };
 for(var n=0;n<items.length;n++)items[n].kind=classification[items[n].id]||"utility";
 var filters=["auto","all","PS4","PS5","Nintendo Switch","PS3","PS Vita","Wii U","Xbox"];
 var kinds=["all","entry","cfw","loader","homebrew","utility"];
 var selectedFilter="auto",selectedKind="all",currentModel="";
 function getLanguage(){return document.documentElement.lang==="ru"?"ru":"en";}
 function text(english,russian){return getLanguage()==="ru"?russian:english;}
 function element(tag,className,value){
  var node=document.createElement(tag);
  if(className)node.className=className;
  if(value!==undefined)node.textContent=value;
  return node;
 }
 function linkTo(repo,release){
  var base="https://github.com/"+repo;
  if(release)return base+"/releases/tag/"+encodeURIComponent(release);
  return base;
 }
 function currentFilter(){
  if(selectedFilter==="auto")return filters.indexOf(currentModel)!==-1?currentModel:"all";
  return selectedFilter;
 }
 function createCard(item){
  var card=element("article","community-card");
  var top=element("div","community-card-top");
  var platform=element("span","community-platform",item.platform==="Nintendo Switch"?"SWITCH":item.platform);
  var type=element("span","community-type",getLanguage()==="ru"?item.typeRu:item.type);
  var kindNames={
  entry:text("Exploit research","Исследования эксплойтов"),
  loader:text("Payload loader","Загрузчик"),
  cfw:text("Custom firmware","Кастомная прошивка"),
  homebrew:text("Homebrew app","Приложение homebrew"),
  utility:text("Utility","Утилита")
 };
 var category=element("span","community-kind kind-"+item.kind,kindNames[item.kind]||kindNames.utility);
 top.appendChild(platform);
  if(item.fork)top.appendChild(element("span","community-kind community-fork","Fork"));
  top.appendChild(category);top.appendChild(type);
  card.appendChild(top);
  card.appendChild(element("h3","community-name",item.id.split("/")[1]));
  card.appendChild(element("p","community-by",item.id));
  card.appendChild(element("p","community-description",getLanguage()==="ru"?item.infoRu:item.info));
  var bottom=element("div","community-card-bottom"),source=element("a","community-link",text("Source repository ↗","Репозиторий ↗"));
  source.href=linkTo(item.id);
  source.target="_blank";source.rel="noopener noreferrer";
  bottom.appendChild(source);
  if(item.release){
   var releaseLink=element("a","community-release",text("Tagged release ↗","Релиз ↗"));
   releaseLink.href=linkTo(item.id,item.release);
   releaseLink.target="_blank";releaseLink.rel="noopener noreferrer";
   bottom.appendChild(releaseLink);
  }
  card.appendChild(bottom);
  return card;
 }
 function render(model){
  currentModel=model||"";
  var list=document.getElementById("community-projects");
  if(!list)return;
  var active=currentFilter();
  var total=0,i,item;
  while(list.firstChild)list.removeChild(list.firstChild);
  for(i=0;i<items.length;i++){
   item=items[i];
   if(active!=="all"&&item.platform.indexOf(active)===-1)continue;
   if(selectedKind!=="all"&&item.kind!==selectedKind)continue;
   list.appendChild(createCard(item));total++;
  }
  if(!total){
   var empty=element("div","community-empty",text(
    "None of the verified submissions target this console. The listed projects are not automatically compatible with PS4 14.00.",
    "Среди проверенных ссылок нет проектов для этой консоли. Эти проекты не подтверждают совместимость с PS4 14.00."
   ));
   list.appendChild(empty);
  }
  var kindButtons=document.querySelectorAll("[data-community-kind]"),k,kButton;
  for(k=0;k<kindButtons.length;k++){
   kButton=kindButtons[k];
   kButton.setAttribute("aria-pressed",kButton.getAttribute("data-community-kind")===selectedKind?"true":"false");
  }
  var count=document.getElementById("community-count");
  if(count)count.textContent=text(total+" listed sources","Источников в подборке: "+total);
  var buttons=document.querySelectorAll("[data-community-filter]");
  for(i=0;i<buttons.length;i++){
   var btn=buttons[i],pressed=btn.getAttribute("data-community-filter")===selectedFilter;
   btn.setAttribute("aria-pressed",pressed?"true":"false");
  }
  var notice=document.getElementById("community-note");
  if(notice)notice.textContent=text(
   "15 GitHub repositories checked on 13 Nov 2026, including 2 forks (not auto-imported into Repo Radar). Two additional URLs returned 404 (Swordpdf/ProsperoEden and blackbearreloaded/ProsperoEden). Labels distinguish exploit research from homebrew and tools. No third-party code runs on this page. Compatibility is not verified.",
   "15 репозиториев проверены через GitHub 13 ноября 2026 года, включая 2 форка (не импортируются в Repo Radar). Ещё две ссылки вернули 404 (Swordpdf/ProsperoEden и blackbearreloaded/ProsperoEden). Исследования уязвимостей, homebrew и утилиты разделены. Чужой код на этой странице не запускается; совместимость не проверена."
  );
 }
 function init(){
  var buttons=document.querySelectorAll("[data-community-filter]"),i;
  for(i=0;i<buttons.length;i++){
   buttons[i].onclick=function(){
    var filter=this.getAttribute("data-community-filter");
    if(filters.indexOf(filter)===-1)return;
    selectedFilter=filter;render(currentModel);
   };
  }
  buttons=document.querySelectorAll("[data-community-kind]");
  for(i=0;i<buttons.length;i++){
   buttons[i].onclick=function(){
    var kind=this.getAttribute("data-community-kind");
    if(kinds.indexOf(kind)===-1)return;
    selectedKind=kind;render(currentModel);
   };
  }
 }
 root.ConsoleWebKitCommunity={projects:items,missing:missing,render:render};
 if(typeof document!=="undefined")init();
}(typeof window!=="undefined"?window:this));
