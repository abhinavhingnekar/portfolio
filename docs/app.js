import {skillData, scenarioData, roleData, projects, toolData, projectSummaries} from './content.js';

const $ = id => document.getElementById(id);
const icon = name => `<svg class="icon" aria-hidden="true" focusable="false"><use href="#icon-${name}"/></svg>`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const sections = ['about','experience','education','skills','projects','certifications','contact'];
const names = {about:'About',experience:'Experience',education:'Education',skills:'Skills',projects:'Projects',certifications:'Certifications',contact:'Contact'};
const dialog = $('hubDialog');
const scroller = $('panelScroller');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let currentRoute = '';
let transition = 0;
let homeOpener = null;
let closeRequested = false;
let closeFallback;
const scrollPositions = new Map();
let storyScrollTop=0;
let programmaticGoal=null;
let navigationInProgress=false;
let scrollFrame=0;
let scrollIdleTimer;
let scrollGuardTimer;

// The seven sections form one reading surface. Cases are a focused detail view.
function parseRoute(value) {
  const raw=value.replace(/^#/,'');
  const [section,id,...extra]=raw.split('/');
  if(extra.length)return '';
  if(section==='projects'&&id&&projects.some(project=>project.id===id))return `projects/${id}`;
  if(id)return '';
  return sections.includes(section)?section:'';
}
function locationRoute(){try{return parseRoute(decodeURIComponent(location.hash));}catch{return '';}}
const baseURL=()=>`${location.pathname}${location.search}`;
const wait=duration=>new Promise(resolve=>setTimeout(resolve,reducedMotion.matches?0:duration));
const isCase=route=>route.includes('/');
function saveReadingPosition(){
  if(!dialog.open||!currentRoute||closeRequested)return;
  const position=scroller.scrollTop;
  scrollPositions.set(currentRoute,position);
  if(!isCase(currentRoute))storyScrollTop=position;
  history.replaceState({...history.state,scrollTop:position,viewMode:isCase(currentRoute)?'case':'story'},'',location.href);
}
function updateSectionChrome(section,caseView=false){
  $('panelTitle').textContent=caseView?'Project / Case study':names[section];
  $('panelCounter').textContent=`${String(sections.indexOf(section)+1).padStart(2,'0')} / 07`;
  $('readerHint').textContent=caseView?'CASE STUDY · RETURN TO PROJECTS':'SCROLL TO EXPLORE · ABOUT → CONTACT';
  document.querySelectorAll('[data-route]').forEach(link=>{
    if(link.dataset.route===section)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
  const tab=document.querySelector('.panel-navigation [aria-current]');
  if(tab){const bar=tab.parentElement;bar.scrollLeft+=tab.getBoundingClientRect().left-bar.getBoundingClientRect().left-(bar.clientWidth-tab.offsetWidth)/2;}
}
function syncStoryScroll(){
  if(!dialog.open||!currentRoute||isCase(currentRoute)||navigationInProgress||programmaticGoal!==null||closeRequested)return;
  const top=scroller.getBoundingClientRect().top;
  const threshold=top+Math.min(120,scroller.clientHeight*.18);
  let active=sections[0];
  for(const section of sections){if($(section).getBoundingClientRect().top<=threshold)active=section;else break;}
  if(scroller.scrollHeight-scroller.clientHeight-scroller.scrollTop<3)active='contact';
  storyScrollTop=scroller.scrollTop;
  if(active!==currentRoute){
    currentRoute=active;
    updateSectionChrome(active);
    // Passive reading replaces this entry instead of filling browser history.
    history.replaceState({...history.state,scrollTop:scroller.scrollTop,viewMode:'story'},'',`${baseURL()}#${active}`);
  }
}
function finishProgrammaticScroll(){
  clearTimeout(scrollGuardTimer);
  programmaticGoal=null;navigationInProgress=false;
  syncStoryScroll();saveReadingPosition();
}
function setScrollPosition(value,smooth=false){
  clearTimeout(scrollGuardTimer);
  programmaticGoal=Math.max(0,Math.min(value,scroller.scrollHeight-scroller.clientHeight));
  scroller.scrollTo({top:programmaticGoal,behavior:smooth&&!reducedMotion.matches?'smooth':'instant'});
  if(!smooth||reducedMotion.matches||Math.abs(scroller.scrollTop-programmaticGoal)<2){
    requestAnimationFrame(finishProgrammaticScroll);
  }else scrollGuardTimer=setTimeout(finishProgrammaticScroll,1400);
}
function navigate(route){
  if(closeRequested)return;
  const target=parseRoute(route);if(!target)return;
  if(target===currentRoute&&isCase(target))return;
  saveReadingPosition();
  if(!dialog.open)homeOpener=document.activeElement;
  if(target!==currentRoute)history.pushState({careerHub:true,depth:(history.state?.careerHub?history.state.depth:0)+1},'',`${baseURL()}#${target}`);
  applyRoute(target);
}
function finishClose(){
  clearTimeout(closeFallback);closeRequested=false;
  history.replaceState({careerHub:true,depth:0},'',baseURL());applyRoute('');
}
function closeHub(){
  if((!dialog.open&&!currentRoute)||closeRequested)return;
  saveReadingPosition();
  const depth=history.state?.careerHub?history.state.depth:0;
  if(depth>0&&history.length>1){
    closeRequested=true;history.go(-Math.min(depth,history.length-1));
    closeFallback=setTimeout(()=>{if(closeRequested)finishClose();},400);
  }else finishClose();
}
async function applyRoute(route,{restore=false}={}){
  const ticket=++transition;
  const previousRoute=currentRoute;
  const wasOpen=dialog.open;
  const wasCase=isCase(previousRoute);
  const caseView=isCase(route);
  if(previousRoute){scrollPositions.set(previousRoute,scroller.scrollTop);if(!wasCase)storyScrollTop=scroller.scrollTop;}
  navigationInProgress=true;clearTimeout(scrollGuardTimer);programmaticGoal=null;
  currentRoute=route;
  if(!route){
    dialog.classList.add('is-closing');document.body.classList.remove('panel-open');
    await wait(180);if(ticket!==transition)return;
    if(dialog.open)dialog.close();dialog.classList.remove('is-closing');
    document.querySelectorAll('[data-panel]').forEach(view=>{view.hidden=true;});
    document.querySelectorAll('.home-navigation [data-route]').forEach(link=>link.removeAttribute('aria-current'));
    navigationInProgress=false;
    (homeOpener?.isConnected&&homeOpener!==document.body?homeOpener:$('homeTitle')).focus({preventScroll:true});
    return;
  }
  if(wasOpen&&(wasCase||caseView)){scroller.classList.add('is-switching');await wait(110);}
  if(ticket!==transition)return;
  dialog.classList.remove('is-closing');
  const section=route.split('/')[0];
  if(caseView)renderCaseStudy(route.split('/')[1]);
  document.querySelectorAll('[data-panel]').forEach(view=>{
    view.hidden=caseView?view.dataset.panel!=='case-study':view.dataset.panel==='case-study';
  });
  dialog.classList.toggle('story-mode',!caseView);
  if(!dialog.open)dialog.showModal();
  document.body.classList.add('panel-open');updateSectionChrome(section,caseView);
  scroller.classList.remove('is-switching');
  const view=caseView?$('caseStudy'):$(section);
  if(!wasOpen||wasCase||caseView){view.classList.remove('is-entering');void view.offsetWidth;view.classList.add('is-entering');}
  let destination;
  if(restore&&Number.isFinite(history.state?.scrollTop))destination=history.state.scrollTop;
  else if(caseView)destination=0;
  else destination=view.offsetTop;
  const heading=view.querySelector('h2');
  if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}
  setScrollPosition(destination,!restore&&wasOpen&&!wasCase&&!caseView);
}
scroller.addEventListener('scroll',()=>{
  if(!scrollFrame)scrollFrame=requestAnimationFrame(()=>{scrollFrame=0;syncStoryScroll();});
  clearTimeout(scrollIdleTimer);
  scrollIdleTimer=setTimeout(()=>{if(!navigationInProgress&&programmaticGoal===null)saveReadingPosition();},160);
},{passive:true});
scroller.addEventListener('scrollend',()=>{
  if(programmaticGoal!==null){if(Math.abs(scroller.scrollTop-programmaticGoal)<3)finishProgrammaticScroll();}
  else {syncStoryScroll();saveReadingPosition();}
});
function interruptScroll(){if(programmaticGoal!==null){clearTimeout(scrollGuardTimer);programmaticGoal=null;navigationInProgress=false;syncStoryScroll();}}
scroller.addEventListener('wheel',interruptScroll,{passive:true});
scroller.addEventListener('touchstart',interruptScroll,{passive:true});
scroller.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].includes(event.key))interruptScroll();});

document.addEventListener('click', event => {
  const home = event.target.closest('[data-home]');
  if (home) { event.preventDefault(); closeHub(); return; }
  const link = event.target.closest('[data-route]');
  if (link && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
    event.preventDefault(); navigate(link.dataset.route);
  }
});
$('closePanel').addEventListener('click',closeHub);
// Explicit boundary wrapping complements the native modal's focus containment.
dialog.addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const controls=[...dialog.querySelectorAll('a[href],button:not([disabled]),summary,[tabindex="0"]')].filter(element=>element.getClientRects().length>0&&getComputedStyle(element).visibility!=='hidden');
  if(!controls.length){event.preventDefault();$('closePanel').focus();return;}
  const first=controls[0],last=controls[controls.length-1],active=document.activeElement;
  if(event.shiftKey&&(active===first||!dialog.contains(active))){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&(active===last||!dialog.contains(active))){event.preventDefault();first.focus();}
});

dialog.addEventListener('cancel', event => { event.preventDefault(); closeHub(); });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.querySelector('.panel-shell').getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeHub();
});
window.addEventListener('popstate',() => {if(closeRequested)finishClose();else applyRoute(locationRoute(),{restore:true});});
window.addEventListener('hashchange',() => { const route = locationRoute(); if (route !== currentRoute) applyRoute(route); });
$('backToProjects').addEventListener('click',() => {
  saveReadingPosition();
  if (history.state?.careerHub && history.state.depth > 1) history.back();
  else navigate('projects');
});

const roleMeta = {
  fidelity:{company:'Fidelity Investments',title:'Systems Analyst',period:'AUG 2024 — PRESENT',icon:'building',code:'FI',tools:['REST APIs','Snowflake','Oracle','Power BI','Jira','ServiceNow'],impact:'Defined application requirements and validated data movement across enterprise systems.'},
  hotelkey:{company:'HotelKey',title:'Technical Business Analyst',period:'MAR 2018 — AUG 2024',icon:'flow',code:'HK',tools:['SQL / MySQL','REST APIs','ETL','AWS SNS / SQS / Lambda','Splunk'],impact:'Reporting roadmap ownership, enterprise implementations, and integrations supporting hotel operations.'},
  qa:{company:'HotelKey',title:'QA Lead Engineer',period:'JAN 2017 — FEB 2018',icon:'delivery',code:'HK',tools:['iOS testing','Backend testing','Requirements analysis'],impact:'Spearheaded deployment for more than 130 G6 Hospitality properties.'},
  tcs:{company:'Tata Consultancy Services',title:'Systems Engineer',period:'FEB 2014 — DEC 2016',icon:'data',code:'TCS',tools:['ETL testing','GUI testing','Commercial Cards'],impact:'Data and application testing across Citi’s Commercial Cards projects.'}
};
$('careerTimeline').innerHTML = Object.entries(roleMeta).map(([key,meta], index) => {
  const role=roleData[key];
  const responsibilityList=role.bulletGroups
    ? role.bulletGroups.map(group=>`<section class="responsibility-group"><h4>${group.title}</h4><ul>${group.indices.map(index=>`<li>${role.bullets[index]}</li>`).join('')}</ul></section>`).join('')
    : `<ul>${role.bullets.map(bullet=>`<li>${bullet}</li>`).join('')}</ul>`;
  const responsibilityLabel='Responsibilities & achievements';
  return `<article class="timeline-item"><span class="timeline-node" aria-hidden="true">${icon(meta.icon)}</span><div class="timeline-date">${meta.period}</div><div class="career-card stagger-card" style="--card-index:${index}"><div class="company-line"><span class="company-code" aria-hidden="true">${meta.code}</span><span>${meta.company}</span>${key==='fidelity'?'<span class="contract-label">CONTRACT</span>':''}</div><h3>${meta.title}</h3><p>${role.summary}</p><div class="career-impact">${icon('delivery')}<span>${meta.impact}</span></div><div class="tag-list">${meta.tools.map(tool=>`<span>${tool}</span>`).join('')}</div><details class="career-details"><summary>${responsibilityLabel}</summary><p class="context-note">${role.date}</p>${responsibilityList}</details></div></article>`;
}).join('');

const skillCategories = [
  {id:'analysis',title:'Business & Systems Analysis',icon:'requirements',description:skillData.Requirements,tools:['Requirements analysis','User stories','Acceptance criteria','Process mapping']},
  {id:'product',title:'Product Management',icon:'chart',description:'Owned the enterprise reporting roadmap at HotelKey. Translate customer needs and product analytics into prioritized enhancements.',tools:['Roadmap ownership','Product analytics','Power BI','Pendo']},
  {id:'integration',title:'API & System Integrations',icon:'api',description:skillData['REST APIs'],tools:['REST APIs','Swagger','Insomnia','Bruno','Postman']},
  {id:'data',title:'Data Analysis & SQL',icon:'data',description:skillData['SQL & Data'],tools:['SQL / MySQL','Snowflake','Oracle','Data mapping','ETL']},
  {id:'delivery',title:'Agile & Delivery Management',icon:'flow',description:skillData['Agile Delivery']+' '+skillData['Release Management'],tools:['Jira','Confluence','Backlog refinement','Release readiness']},
  {id:'quality',title:'Testing & Quality Assurance',icon:'delivery',description:skillData['UAT & Testing'],tools:['UAT support','API testing','iOS / backend testing','ISTQB']},
  {id:'monitoring',title:'Monitoring & Enterprise Tools',icon:'code',description:skillData.Monitoring,tools:['Datadog','Splunk','ServiceNow','AWS']},
  {id:'stakeholders',title:'Stakeholder Management',icon:'users',description:skillData.Stakeholders,tools:['Discovery','Vendor coordination','Cross-functional collaboration']}
];
$('skillTree').innerHTML=skillCategories.map((skill,index)=>`<button class="skill-branch stagger-card" data-skill="${skill.id}" aria-pressed="false" style="--card-index:${index%4}"><span class="branch-icon">${icon(skill.icon)}</span><span class="branch-main"><strong>${skill.title}</strong><span class="branch-tools">${skill.tools.slice(0,3).join(' · ')}</span></span><span class="branch-plus" aria-hidden="true">+</span></button>`).join('');
$('toolShelf').innerHTML=Object.entries(toolData).map(([key,[name]])=>`<button class="tool-chip" data-tool="${key}" aria-pressed="false">${icon(key)}<span>${name}</span></button>`).join('');
function showSkill(title, description, glyph, tags=[]) {
  $('skillDetail').innerHTML=`<span class="detail-glyph">${icon(glyph)}</span><div><strong>${escapeHTML(title)}</strong><p>${escapeHTML(description)}</p>${tags.length?`<div class="tag-list">${tags.map(tag=>`<span>${escapeHTML(tag)}</span>`).join('')}</div>`:''}</div>`;
}
document.querySelectorAll('[data-skill],[data-tool]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-skill],[data-tool]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  if(button.dataset.skill){const skill=skillCategories.find(item=>item.id===button.dataset.skill);showSkill(skill.title,skill.description,skill.icon,skill.tools);}
  else {const [title,description]=toolData[button.dataset.tool];showSkill(title,description,button.dataset.tool);}
}));

// New case-study context only expands information already supplied in the portfolio/brief.
const projectContext={
 hub:{objective:'Translate business workflows into clear mobile and backend system behavior.',challenge:'Vendor API contracts, integration dependencies, and cross-system data consistency.',solution:'Defined requirements, acceptance criteria, API contracts, and validation workflows.',technology:['REST APIs','Insomnia','Bruno','SQL','Snowflake','Oracle','Power BI']},
 reporting:{objective:'Make operational data useful for customer reporting and business decisions.',challenge:'Source relationships, business definitions, and reconciliation across datasets.',solution:'Mapped customer requirements to reporting outputs, SQL logic, and consolidated data solutions.',technology:['SQL','MySQL','ETL','Data warehousing','Enterprise reporting']},
 invoice:{objective:'Support configurable invoice behavior across enterprise hotel operations.',challenge:'Account and template configuration at a large hotel footprint.',solution:'Built a dynamic invoice framework using JSON configurations and REST APIs.',technology:['JSON','REST APIs','Invoice configuration']},
 ota:{objective:'Connect global booking channels to automated hotel reservation workflows.',challenge:'Data exchange between external booking channels and hotel operations.',solution:'Implemented OTA integrations with Booking.com and Expedia.',technology:['Booking.com','Expedia','REST integrations','Hospitality platforms']},
 fiscal:{objective:'Support Germany-specific fiscal reporting workflows through the FiskalTrust integration.',challenge:'JSON transformation, asynchronous polling, timeouts, and receipt-related workflow behavior.',solution:'Translated fiscal requirements into integration workflows and supported provider data exchange.',technology:['FiskalTrust','REST APIs','JSON','Asynchronous polling','Request / response logging']},
 pms:{objective:'Take enterprise PMS customers from requirements through successful implementation.',challenge:'Cross-team dependencies, customer onboarding, testing, and production readiness.',solution:'Led end-to-end SDLC activities through deployment and post-production support.',technology:['Enterprise PMS','Requirements analysis','QA','Release management','Customer onboarding']}
};
const caseLabels={hub:['Enterprise mobile / vendor APIs','api'],reporting:['Financial & operational reporting','chart'],invoice:['Configurable invoicing','requirements'],ota:['Booking integrations','flow'],fiscal:['FiskalTrust / German fiscal reporting','data'],pms:['Enterprise implementation','delivery']};
function diagram(project) {
  const flow=project.id==='reporting'?['Source data','SQL / ETL','Business insight']:project.id==='fiscal'?['Hotel platform','FiskalTrust','Fiscal reporting']:project.flow||['Define','Validate','Deliver'];
  return `<div class="project-diagram" aria-hidden="true">${flow.map((label,index)=>`${index?'<span class="diagram-connector"></span>':''}<span class="diagram-step">${icon(index===0?'building':index===1?'api':'delivery')}<small>${escapeHTML(label)}</small></span>`).join('')}</div>`;
}
function renderProjects(filter='all') {
  const visible=projects.filter(project=>filter==='all'||project.category.includes(filter));
  $('projectGrid').innerHTML=visible.map((project,index)=>{
    const summary=projectSummaries[project.id];const [label,glyph]=caseLabels[project.id];
    return `<article class="project-card stagger-card" style="--card-index:${index%3}"><div class="project-art"><span class="project-type">${icon(glyph)} ${label}</span>${diagram(project)}</div><div class="project-body"><span class="eyebrow">${project.label}</span><h3>${project.id==='fiscal'?'FiskalTrust. German fiscal reporting.':summary.title}</h3><p>${summary.problem}</p><div class="project-result">${icon('delivery')}<span>${summary.value}</span></div><a class="case-link" href="#projects/${project.id}" data-route="projects/${project.id}">Explore case study ${icon('arrow')}</a></div></article>`;
  }).join('');
  $('projectCount').textContent=`${visible.length} ${visible.length===1?'project':'projects'}`;
  document.querySelectorAll('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===filter)));
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>renderProjects(button.dataset.filter)));
function renderCaseStudy(id) {
  const project=projects.find(item=>item.id===id);const context=projectContext[id];
  const problem=project.blocks.find(([label])=>label==='Business problem')?.[1]||project.description;
  const role=project.blocks.find(([label])=>label==='My role')?.[1]||project.description;
  const approach=project.blocks.find(([label])=>label==='Systems & process')?.[1]||project.description;
  const outcome=project.blocks.find(([label])=>label==='Value created')?.[1]||project.value;
  const blocks=[['Business problem',problem],['Project objective',context.objective],['My role',role],['Technical approach',approach],['Challenges & considerations',context.challenge],['Solution',context.solution]];
  $('caseContent').innerHTML=`<div class="panel-heading case-heading"><p class="eyebrow">${project.label}</p><h2>${id==='fiscal'?'FiskalTrust & German fiscal reporting':project.title}</h2><p>${project.description}</p></div>${diagram(project)}<div class="case-result"><span class="eyebrow">BUSINESS OUTCOME</span><p>${outcome}</p></div><div class="case-blocks">${blocks.map(([title,text],index)=>`<article><span class="case-number">0${index+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><div class="case-technologies"><p class="eyebrow">TECHNOLOGIES & PRACTICES</p><div class="tag-list">${context.technology.map(tool=>`<span>${tool}</span>`).join('')}</div></div><details class="original-summary"><summary>Original project summary</summary>${project.blocks.map(([title,text])=>`<h3>${title}</h3><p>${text}</p>`).join('')}</details><p class="context-note">Professional scope and figures are retained from the supplied résumé. Technical considerations are high-level summaries; no proprietary details are included.</p>`;
}
renderProjects();
function renderScenario(key) {
  const scenario=scenarioData[key];
  $('scenarioDetail').innerHTML=`<h3>${scenario.title}</h3><ol>${scenario.steps.map(step=>`<li>${step}</li>`).join('')}</ol><p>${scenario.takeaway}</p>`;
  document.querySelectorAll('[data-scenario]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scenario===key)));
}
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>renderScenario(button.dataset.scenario)));
renderScenario('api');
$('copyIntro').addEventListener('click',async()=>{
  const text='Abhinav Hingnekar — Systems Analyst and Technical Business Analyst in Dallas, Texas. 12+ years across financial services and B2B SaaS. Requirements analysis, API integrations, SQL, product analytics, stakeholder management, and cross-functional delivery. abhinav.hingnekar@gmail.com | https://www.linkedin.com/in/abhinav-hingnekar/';
  try {await navigator.clipboard.writeText(text);$('copyStatus').textContent='Introduction copied to clipboard.';}
  catch {$('copyStatus').textContent=text;const range=document.createRange();range.selectNodeContents($('copyStatus'));const selection=getSelection();selection.removeAllRanges();selection.addRange(range);}
});
let paused=false;try{paused=localStorage.getItem('portfolio-motion')==='paused';}catch{}
function updateMotion() {
  const stopped=paused||reducedMotion.matches;
  document.body.classList.toggle('motion-paused',stopped);
  const control=$('motionToggle');control.hidden=false;control.disabled=reducedMotion.matches;
  control.setAttribute('aria-pressed',String(stopped));
  control.textContent=reducedMotion.matches?'Reduced motion':paused?'Resume motion':'Pause motion';
}
$('motionToggle').addEventListener('click',()=>{paused=!paused;try{localStorage.setItem('portfolio-motion',paused?'paused':'running');}catch{}updateMotion();});
reducedMotion.addEventListener('change',updateMotion);
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('page-hidden',document.hidden));
updateMotion();
document.body.classList.add('app-ready');
const initial=locationRoute();
history.replaceState({careerHub:true,depth:0},'',baseURL());
if(initial)navigate(initial);
