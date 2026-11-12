/* ConsoleWebKit: read-only detection, capability checks, and catalog navigation.
   ES5 syntax is intentional for legacy console WebKit browsers. */
(function () {
 "use strict";
 var $=function (id) { return document.getElementById(id); };
 var detector=window.RepoRadarConsoleDetect;
 var urls={
  general:"https://peteroxhka.github.io/repo-radar/?category=console_webkit",
  byConsole:"https://peteroxhka.github.io/repo-radar/?console="
 };
 var labels={
  en:{
   source:"Source code",eyebrow:"CONSOLE BROWSER LAB / V1",
   heroA:"Meet your console.",heroB:"Know its browser.",
   heroDesc:"A lightweight browser laboratory for PlayStation, Nintendo and Xbox. Automatic console hints, firmware information and useful diagnostics — without installing anything.",
   scanAgain:"Scan this browser",catalog:"Console project catalog",
   safe:"Read-only diagnostics. No jailbreak or exploit code is run.",
   section01:"01 — IDENTIFICATION",detectedTitle:"Your console at a glance",
   detectedLead:"We only read publicly exposed browser information. Results are approximate.",
   modelLabel:"Device hint",firmwareLabel:"Firmware hint",engineLabel:"Browser engine hint",
   detectionNotice:"A browser's user-agent can be incomplete or spoofed. Firmware is a hint, not a verified system version. For accurate information, check your console settings.",
   section02:"02 — COMPATIBILITY",capabilitiesTitle:"Browser capability checks",
   capabilitiesLead:"Simple feature checks help understand what a browser exposes. No security probing is performed.",
   featureCanvas:"2D graphic drawing",featureWebgl:"3D graphics availability",
   featureStorage:"Browser settings storage",featureTouch:"Touch event detection",
   featureModules:"Modern script syntax support",featureWasm:"WASM availability",
   section03:"03 — PROJECT DISCOVERY",exploreTitle:"Explore related open-source projects",
   exploreLead:"Browse the Repo Radar catalog for projects mentioning your console.",
   found:"IDENTIFIED PLATFORM",deviceUnknown:"We could not identify your device from the browser alone. You can browse all console projects, or choose a console manually.",
   allProjects:"Browse all console projects",manualLabel:"Not your console? Choose manually",
   manualHelp:"Choose a platform only if the automatic hint was incorrect. Manual selection is not proof of compatibility.",
   manualFirmware:"Firmware version (optional)",resetManual:"Use automatic detection",
   footerDesc:"Independent browser diagnostics — part of the Repo Radar ecosystem.",
   unknown:"Not identified",unknownFirmware:"Not available",unverified:"User-agent hint only",
   notOfficial:"Not a verified system firmware value",browserHint:"Reported by browser",
   engineWebKit:"WebKit indicated",engineOther:"Not identified",
   good:"Available",bad:"Unavailable",notSure:"Unknown",
   detected:"Automatically detected",manual:"Manually selected",
   deviceIntro:"The console identity is inferred from your browser's public user-agent. Verify firmware in device settings.",
   noDeviceIntro:"Your browser did not report a recognized console. General catalog browsing remains available.",
   firmwareText:"Firmware hint",noFirmware:"No firmware version reported",
   selectedProjects:"Browse projects for this console",
   manualInvalid:"Enter a version such as 9.00 or 14.02; otherwise leave the field blank."
  },
  ru:{
   source:"Исходный код",eyebrow:"ЛАБОРАТОРИЯ БРАУЗЕРОВ КОНСОЛЕЙ / V1",
   heroA:"Узнай свою консоль.",heroB:"Изучи её браузер.",
   heroDesc:"Лёгкая диагностика браузеров PlayStation, Nintendo и Xbox: определение устройства, подсказки о прошивке и проверка возможностей без установки программ.",
   scanAgain:"Проверить браузер",catalog:"Каталог консольных проектов",
   safe:"Только диагностика: джейлбрейк и эксплойты не запускаются.",
   section01:"01 — ОПРЕДЕЛЕНИЕ",detectedTitle:"Информация об устройстве",
   detectedLead:"Используются только открытые сведения браузера. Результат приблизительный.",
   modelLabel:"Предполагаемая консоль",firmwareLabel:"Версия прошивки",engineLabel:"Движок браузера",
   detectionNotice:"User-Agent браузера может быть неполным или подменённым. Прошивка определяется приблизительно. Точную версию проверяй в настройках консоли.",
   section02:"02 — СОВМЕСТИМОСТЬ",capabilitiesTitle:"Возможности браузера",
   capabilitiesLead:"Обычные тесты показывают доступность функций браузера. Проверка уязвимостей не проводится.",
   featureCanvas:"Отрисовка двумерной графики",featureWebgl:"Доступность 3D-графики",
   featureStorage:"Локальное хранилище браузера",featureTouch:"Поддержка касаний",
   featureModules:"Современные скрипты",featureWasm:"Поддержка WASM",
   section03:"03 — ПОИСК ПРОЕКТОВ",exploreTitle:"Проекты с открытым исходным кодом",
   exploreLead:"Открой каталог Repo Radar и найди проекты, в которых упоминается твоя консоль.",
   found:"ОБНАРУЖЕННАЯ ПЛАТФОРМА",deviceUnknown:"Не удалось определить консоль по данным браузера. Можно открыть общий каталог или выбрать устройство вручную.",
   allProjects:"Все консольные проекты",manualLabel:"Не та консоль? Выбрать вручную",
   manualHelp:"Выбирай устройство, только если автоматическая подсказка ошибочна. Ручной выбор не подтверждает совместимость.",
   manualFirmware:"Версия прошивки (необязательно)",resetManual:"Вернуться к автоопределению",
   footerDesc:"Независимая диагностика браузеров — часть экосистемы Repo Radar.",
   unknown:"Не распознана",unknownFirmware:"Нет данных",unverified:"Только по User-Agent",
   notOfficial:"Это не подтверждённая версия системы",browserHint:"Из данных браузера",
   engineWebKit:"Указан WebKit",engineOther:"Не определён",
   good:"Доступно",bad:"Недоступно",notSure:"Неизвестно",
   detected:"Автоопределение",manual:"Выбрано вручную",
   deviceIntro:"Модель определяется по открытому User-Agent браузера. Уточни прошивку в настройках консоли.",
   noDeviceIntro:"Браузер не сообщил распознаваемую модель консоли. Можно посмотреть общий каталог.",
   firmwareText:"Предполагаемая прошивка",noFirmware:"Версия не сообщается",
   selectedProjects:"Проекты этой консоли",
   manualInvalid:"Укажи версию вроде 9.00 или 14.02 либо оставь поле пустым."
  }
 };
 var language="en",stored=null;
 try{stored=window.localStorage.getItem("consolewebkit-language")||window.localStorage.getItem("radar-locale");}catch(ignore){}
 if(stored==="ru"||stored==="en")language=stored;
 var detected={model:"",label:"",firmware:"",reportedBy:"unknown",userAgent:""},manualModel="",manualFirmware="";
 function getText(name){return labels[language][name]||name;}
 function text(id,value){var element=$(id);if(element)element.textContent=value;}
 function setLang(value){
  language=value==="ru"?"ru":"en";
  document.documentElement.lang=language;
  try{window.localStorage.setItem("consolewebkit-language",language);}catch(ignore){}
  var translated=document.querySelectorAll("[data-i18n]"),i,element,key;
  for(i=0;i<translated.length;i++){
   element=translated[i];key=element.getAttribute("data-i18n");
   element.textContent=getText(key);
  }
  text("locale-toggle",language==="ru"?"EN":"RU");
  $("locale-toggle").setAttribute("aria-label",language==="ru"?"Switch to English":"Переключить на русский");
  drawAll();
 }
 function labelFor(model){
  var names={"PS3":"PlayStation 3","PS4":"PlayStation 4","PS5":"PlayStation 5","PS Vita":"PlayStation Vita","Wii U":"Nintendo Wii U","Nintendo Switch":"Nintendo Switch","Xbox":"Xbox"};
  return names[model]||getText("unknown");
 }
 function safeFirmware(raw){
  return detector&&detector.firmwareCheck?detector.firmwareCheck(raw):/^\d{1,2}\.\d{1,2}$/.test(String(raw))?raw:"";
 }
 function readDetection(){
  try{
   detected=detector&&detector.detect?detector.detect(navigator.userAgent||""):{model:"",label:"",firmware:"",reportedBy:"unknown",userAgent:navigator.userAgent||""};
  }catch(error){detected={model:"",label:"",firmware:"",reportedBy:"unknown",userAgent:""};}
 }
 function hintCapabilities(){
  var capabilities={canvas:false,webgl:false,storage:false,touch:false,modules:false,wasm:false},canvas;
  try{canvas=document.createElement("canvas");capabilities.canvas=!!(canvas.getContext&&canvas.getContext("2d"));}catch(ignore){}
  try{capabilities.webgl=!!(canvas&&canvas.getContext&&(canvas.getContext("webgl")||canvas.getContext("experimental-webgl")));}catch(ignore){}
  try{
   var test="cw-diagnostic-check";
   window.localStorage.setItem(test,"1");
   capabilities.storage=window.localStorage.getItem(test)==="1";
   window.localStorage.removeItem(test);
  }catch(ignore){}
  try{capabilities.touch=("ontouchstart" in window)||(navigator.maxTouchPoints>0);}catch(ignore){}
  try{capabilities.modules=("noModule" in document.createElement("script"));}catch(ignore){}
  try{capabilities.wasm=typeof window.WebAssembly==="object";}catch(ignore){}
  return capabilities;
 }
 var capabilities={};
 function drawCapabilities(){
  var keys=["canvas","webgl","storage","touch","modules","wasm"],i,key,pill,available;
  for(i=0;i<keys.length;i++){
   key=keys[i];pill=$("feature-"+key);
   if(!pill)continue;
   available=!!capabilities[key];
   pill.className="pill "+(available?"good":"bad");
   pill.textContent=getText(available?"good":"bad");
  }
 }
 function drawSelection(){
  var active=manualModel||detected.model,firmware=manualModel?manualFirmware:detected.firmware;
  text("selected-name",active?labelFor(active):getText("unknown"));
  text("selected-info",active?getText("deviceIntro"):getText("noDeviceIntro"));
  text("selected-firmware",active?getText("firmwareText")+": "+(firmware||getText("noFirmware")):"");
  var target=$("open-catalog"),caption=target.querySelector("[data-i18n]");
  target.href=active?urls.byConsole+encodeURIComponent(active):urls.general;
  if(caption)caption.textContent=getText(active?"selectedProjects":"allProjects");
  var consoleButtons=document.querySelectorAll("[data-console]"),i,button;
  for(i=0;i<consoleButtons.length;i++){
   button=consoleButtons[i];
   var pressed=button.getAttribute("data-console")===active;
   button.setAttribute("aria-pressed",pressed?"true":"false");
  }
  $("manual-error").textContent="";
 }
 function drawDetection(){
  text("device-result",detected.model?labelFor(detected.model):getText("unknown"));
  text("firmware-result",detected.firmware||getText("unknownFirmware"));
  text("engine-result",/AppleWebKit\//i.test(detected.userAgent)?getText("engineWebKit"):getText("engineOther"));
  text("device-confidence",detected.model?getText("unverified"):getText("noDeviceIntro"));
  text("firmware-detail",getText("notOfficial"));
  text("engine-detail",detected.userAgent?getText("browserHint"):"");
 }
 function drawAll(){drawDetection();drawCapabilities();drawSelection();}
 function scan(){
  readDetection();
  capabilities=hintCapabilities();
  drawAll();
 }
 $("locale-toggle").onclick=function(){setLang(language==="ru"?"en":"ru");};
 $("refresh-scan").onclick=function(){manualModel="";manualFirmware="";$("manual-firmware").value="";scan();};
 $("show-manual").onclick=function(){
  var panel=$("manual-panel"),open=panel.hidden;
  panel.hidden=!open;
  this.setAttribute("aria-expanded",open?"true":"false");
  if(open){$("manual-firmware").focus();}
 };
 var choices=document.querySelectorAll("[data-console]"),i;
 for(i=0;i<choices.length;i++){
  choices[i].onclick=function(){
   manualModel=this.getAttribute("data-console");
   var input=$("manual-firmware"),value=input.value.replace(/^\s+|\s+$/g,"");
   manualFirmware=safeFirmware(value);
   if(value&&!manualFirmware)text("manual-error",getText("manualInvalid"));
   else text("manual-error","");
   drawSelection();
  };
 }
 $("manual-firmware").oninput=function(){
  var value=this.value.replace(/^\s+|\s+$/g,"");
  manualFirmware=safeFirmware(value);
  drawSelection();
  text("manual-error",value&&!manualFirmware?getText("manualInvalid"):"");
 };
 $("reset-manual").onclick=function(){
  manualModel="";manualFirmware="";$("manual-firmware").value="";
  $("manual-panel").hidden=true;$("show-manual").setAttribute("aria-expanded","false");
  drawAll();
 };
 text("year",String(new Date().getFullYear()));
 scan();
 setLang(language);
}());
