'use strict';
const skillData={'Requirements':'Requirements analysis that connects stakeholder needs to functional specifications, business rules, user stories, and acceptance criteria.','User Stories':'Translate workflows into actionable stories and acceptance criteria that help engineering and QA align on expected behavior.','Stakeholders':'Stakeholder management across business users, product owners, vendors, engineering, and QA. Make priorities, dependencies, and trade-offs clear before delivery.','Process Mapping':'Map current and future workflows, assess system impacts, and identify process improvement opportunities at handoffs between teams and systems.','Agile Delivery':'Support iterative planning, backlog refinement, sprint collaboration, and cross-team delivery using Jira and Confluence.','UAT & Testing':'Connect requirements to test scenarios, review outcomes, investigate defects, and coordinate business validation.','Release Management':'Coordinate release scope, readiness, dependencies, and production follow-through with delivery teams.','Product Analytics':'Use usage and feedback tools such as Pendo, Google Analytics, and Qualtrics to inform improvements.','REST APIs':'Define API integrations through request/response contracts, payloads, data exchange workflows, and failure scenarios. Test and troubleshoot with Insomnia, Bruno, and Postman.','SQL & Data':'Use SQL across Snowflake, Oracle, and MySQL to investigate data relationships, validate business rules, reconcile discrepancies, and support source-to-target data mapping.','Integration Patterns':'Work through synchronous and asynchronous patterns, polling, error handling, and third-party service dependencies.','Monitoring':'Use operational insights and tools such as Datadog and Splunk to support troubleshooting and release follow-up.'};
const scenarioData={api:{title:'Investigate the failure path',steps:['Confirm the pattern: endpoint, status codes, payloads, frequency, and business impact.','Map the request flow to distinguish vendor failures from internal validation and network issues.','Define retry behavior, timeouts, monitoring, user messaging, and acceptance criteria.'],takeaway:'Outcome: clear failure scenarios, ownership, and testable reliability requirements.'},data:{title:'Trace the numbers to their source',steps:['Compare the business definitions, filters, and reporting periods.','Trace source tables, joins, transformations, and refunds or reversals.','Reconcile a representative sample and document one agreed calculation rule.'],takeaway:'Outcome: consistent definitions and repeatable validation.'},release:{title:'Make the trade-off visible',steps:['Identify the dependency, its owner, and impact on testing and deployment.','Evaluate whether the change can be isolated, deferred, or mitigated.','Align stakeholders on an updated scope and readiness decision.'],takeaway:'Outcome: an agreed release scope with visible dependencies and readiness criteria.'}};
const roleData={
fidelity:{title:'Systems Analyst · Fidelity Investments (Contract)',date:'August 2024 — Present · Westlake, TX',summary:'Supporting The Hub, Fidelity’s internal mobile application, across enterprise systems, data, and user experience.',bullets:['Translate stakeholder needs into functional and non-functional requirements, REST API contracts, data flows, and acceptance criteria.','Test APIs with Insomnia and Bruno. Use SQL in Snowflake and Oracle to validate business rules and data movement.','Develop Power BI dashboards for operational KPIs, adoption, and engagement; analyze feedback using Pendo, Google Analytics, and Qualtrics.','Support Agile delivery in Jira and Confluence, troubleshooting with Datadog, and deployments and incident management with ServiceNow.']},
hotelkey:{title:'Technical Business Analyst · HotelKey Inc',date:'March 2018 — August 2024 · Dallas, TX',summary:'Owned the enterprise reporting roadmap and led cross-functional delivery across hospitality reporting, integrations, and implementations.',bullets:['Partnered with Hilton, IHG, and Extended Stay America on reporting requirements; guided developers on SQL logic and data relationships.','Built a JSON and REST API invoice framework supporting 20K+ corporate accounts across 1,400+ hotels.','Delivered enterprise PMS implementations generating $14M in recurring annual revenue; implemented Booking.com and Expedia integrations.','Designed data warehousing and ETL solutions, led fiscal integrations, and implemented AWS SNS, SQS, and Lambda workflows.']},
qa:{title:'QA Lead Engineer · HotelKey Inc',date:'January 2017 — February 2018 · Dallas, TX',summary:'Hospitality platform quality, requirements analysis, and deployment at scale.',bullets:['Spearheaded deployment for over 130 properties within the G6 Hospitality project.','Developed requirements gathering and analysis methods for Extended Stay America.','Supervised testing for GUI-based iOS and backend applications.']},
tcs:{title:'Systems Engineer · Tata Consultancy Services',date:'February 2014 — December 2016 · Pune, Maharashtra',summary:'Enterprise data and application testing for Citi’s Commercial Cards projects.',bullets:['Overhauled ETL testing projects for the Global Data Repository team.','Designed and delivered GUI testing projects for the CCRS and Citi Manager teams.']}
};
const projects=[
  {
    "id": "hub",
    "category": [
      "integration",
      "data"
    ],
    "label": "FIDELITY · ENTERPRISE SYSTEMS",
    "title": "Translating employee workflows into API requirements",
    "description": "Connected business requirements, API contracts, and data validation for The Hub, an internal mobile application.",
    "value": "Clear specifications and validated data across mobile and backend systems.",
    "tags": [
      "Requirements analysis",
      "REST APIs",
      "SQL validation"
    ],
    "flow": [
      "The Hub",
      "REST APIs",
      "Enterprise data"
    ],
    "blocks": [
      [
        "Business problem",
        "An internal mobile experience depended on backend enterprise systems. Business needs had to become clear system behavior, with consistent data across interfaces."
      ],
      [
        "My role",
        "As Systems Analyst, gathered functional and non-functional requirements, defined API contracts and user stories, and worked with stakeholders and engineers on acceptance criteria."
      ],
      [
        "Systems & process",
        "The Hub, REST APIs, Snowflake, and Oracle. Tested APIs with Insomnia and Bruno; used SQL to investigate data inconsistencies. Supported product analytics with Power BI, Pendo, Google Analytics, and Qualtrics."
      ],
      [
        "Value created",
        "Gave engineering and testing teams defined requirements and validated business rules. Supported release readiness, production investigation, and data-informed enhancement decisions."
      ]
    ]
  },
  {
    "id": "reporting",
    "category": [
      "data",
      "delivery"
    ],
    "label": "HOTELKEY · ENTERPRISE REPORTING",
    "title": "Turning customer reporting needs into usable data",
    "description": "Owned reporting requirements and roadmap priorities for enterprise hospitality customers, from data sources to report design.",
    "value": "More accurate reporting and better access to consolidated enterprise data.",
    "tags": [
      "SQL / MySQL",
      "Data mapping",
      "Stakeholder management"
    ],
    "bars": true,
    "blocks": [
      [
        "Business problem",
        "Enterprise customers needed reports that reflected their operational questions, business definitions, and underlying transaction data."
      ],
      [
        "My role",
        "Owned the enterprise reporting roadmap. Partnered with Hilton, IHG, and Extended Stay America on requirements; guided developers on report columns, SQL logic, and data relationships."
      ],
      [
        "Systems & process",
        "Relational databases, SQL/MySQL, enterprise reporting, data warehousing, and ETL. Mapped report requirements to data sources and validated data across APIs, databases, and interfaces."
      ],
      [
        "Value created",
        "Translated customer needs into defined reporting outputs. Consolidated operational data to improve reporting accuracy and accessibility, while aligning developers and QA on delivery priorities."
      ]
    ]
  },
  {
    "id": "invoice",
    "category": [
      "integration",
      "delivery"
    ],
    "label": "HOTELKEY · CONFIGURABLE INVOICING",
    "title": "Supporting invoice variation across hotel operations",
    "description": "Built a configurable invoice framework using JSON and REST APIs for enterprise hospitality operations.",
    "value": "Supported 20K+ corporate accounts across 1,400+ hotels.",
    "tags": [
      "JSON configuration",
      "API integrations",
      "Enterprise systems"
    ],
    "flow": [
      "JSON config",
      "Invoice framework",
      "1,400+ hotels"
    ],
    "blocks": [
      [
        "Business problem",
        "Invoice behavior needed to support corporate accounts across a large hotel footprint, with configuration built into the framework."
      ],
      [
        "My role",
        "Built the dynamic invoice framework as part of technical business analysis and product delivery at HotelKey."
      ],
      [
        "Systems & process",
        "JSON configurations and REST APIs supporting invoice behavior across enterprise hospitality operations."
      ],
      [
        "Value created",
        "Provided configurable invoicing support for 20K+ corporate accounts across 1,400+ hotels."
      ]
    ]
  },
  {
    "id": "ota",
    "category": [
      "integration"
    ],
    "label": "HOTELKEY · DISTRIBUTION INTEGRATIONS",
    "title": "Automating reservations from global booking channels",
    "description": "Implemented Booking.com and Expedia integrations to connect booking channels with hotel operations.",
    "value": "80% increase in automated reservation processing and bookings, as reported in my résumé.",
    "tags": [
      "Booking.com",
      "Expedia",
      "Integration workflows"
    ],
    "flow": [
      "Booking channels",
      "Integration",
      "Hotel operations"
    ],
    "blocks": [
      [
        "Business problem",
        "Hotel operations needed connected booking channels to support automated reservation processing."
      ],
      [
        "My role",
        "Implemented OTA integrations with Booking.com and Expedia as part of HotelKey’s enterprise platform delivery."
      ],
      [
        "Systems & process",
        "Online travel agency integrations connecting external booking channels to hospitality application workflows."
      ],
      [
        "Value created",
        "The résumé reports an 80% increase in automated reservation processing and bookings following the integrations."
      ]
    ]
  },
  {
    "id": "fiscal",
    "category": [
      "integration"
    ],
    "label": "HOTELKEY · FISCAL REPORTING",
    "title": "Connecting operational workflows to fiscal providers",
    "description": "Led REST API integrations with global B2B SaaS providers to automate fiscal reporting.",
    "value": "Automated reporting workflows that supported regulatory compliance.",
    "tags": [
      "REST APIs",
      "Data exchange",
      "Fiscal reporting"
    ],
    "flow": [
      "Operations",
      "REST integration",
      "Fiscal provider"
    ],
    "blocks": [
      [
        "Business problem",
        "Enterprise hospitality platforms needed to exchange operational data with global fiscal providers to support reporting and compliance requirements."
      ],
      [
        "My role",
        "Led B2B SaaS integrations and translated requirements into end-to-end integration workflows."
      ],
      [
        "Systems & process",
        "REST APIs, request/response logging, and data exchange processes. Validated data movement and business rules across APIs, databases, and application interfaces."
      ],
      [
        "Value created",
        "Automated fiscal reporting and supported regulatory compliance across hospitality platforms, with defined integration behavior and traceable data exchange."
      ]
    ]
  },
  {
    "id": "pms",
    "category": [
      "delivery"
    ],
    "label": "HOTELKEY · ENTERPRISE DELIVERY",
    "title": "Carrying enterprise hotel implementations through release",
    "description": "Led delivery from requirements and solution design through testing, deployment, and post-production support.",
    "value": "$14M in recurring annual revenue from delivered enterprise PMS implementations.",
    "tags": [
      "Cross-functional delivery",
      "Release management",
      "Customer onboarding"
    ],
    "flow": [
      "Requirements",
      "Implementation",
      "Production"
    ],
    "blocks": [
      [
        "Business problem",
        "Enterprise hospitality customers needed property management system implementations supported through onboarding, deployment, and ongoing operations."
      ],
      [
        "My role",
        "Led end-to-end SDLC activities and coordinated cross-functional work from requirements gathering and solution design through production support."
      ],
      [
        "Systems & process",
        "Enterprise PMS implementations, customer onboarding, testing, deployment, and post-release support. Managed delivery priorities and dependencies across developers and QA."
      ],
      [
        "Value created",
        "Delivered enterprise PMS implementations generating $14M in recurring annual revenue while supporting large-scale customer onboarding and solution deployment."
      ]
    ]
  }
];
const $=id=>document.getElementById(id);
const icon=(name,extra='')=>`<svg class="ui-icon ${extra}" aria-hidden="true" focusable="false"><use href="#icon-${name}"/></svg>`;
function setPressed(b,active){b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));}
const roleVisuals={fidelity:{icon:'building',themes:['Enterprise systems','Requirements & APIs','SQL validation']},hotelkey:{icon:'flow',themes:['Reporting roadmap','Integrations','Cross-functional delivery']},qa:{icon:'delivery',themes:['Quality assurance','Requirements','Deployment']},tcs:{icon:'data',themes:['Financial services','ETL testing','Application testing']}};
function renderRole(key){
 const r=roleData[key],visual=roleVisuals[key];
 const more=r.bullets.length>2?`<details class="role-more"><summary>More about this role</summary><ul>${r.bullets.slice(2).map(t=>`<li>${t}</li>`).join('')}</ul></details>`:'';
 $('roleDetail').innerHTML=`<div class="role-detail-heading"><span class="role-emblem">${icon(visual.icon)}</span><div><p class="role-period">${r.date}</p><h3>${r.title}</h3></div></div><div class="role-themes">${visual.themes.map(t=>`<span>${t}</span>`).join('')}</div><p>${r.summary}</p><ul>${r.bullets.slice(0,2).map(t=>`<li>${t}</li>`).join('')}</ul>${more}`;
 document.querySelectorAll('.role-tab').forEach(b=>setPressed(b,b.dataset.role===key));
}
document.querySelectorAll('.role-tab').forEach(b=>b.addEventListener('click',()=>renderRole(b.dataset.role)));renderRole('fidelity');
let revealObserver=null;
function watchReveal(root=document){
 if(!revealObserver||document.body.classList.contains('motion-paused'))return;
 const targets=root.querySelectorAll('.section-heading,.fit-heading,.strength-card,.impact-grid,.project-card,.decision-lab,.timeline-panel,.skill-cluster,.proof-card,.credential,.contact-inner');
 targets.forEach((el,i)=>{if(el.dataset.revealObserved)return;el.dataset.revealObserved='true';el.classList.add('reveal-target');el.style.setProperty('--reveal-delay',`${i%3*55}ms`);if(el.getBoundingClientRect().top>window.innerHeight*.96)el.classList.add('is-waiting');revealObserver.observe(el);});
}
const toolData={
 jira:['Jira','Organize epics, user stories, acceptance criteria, backlog refinement, and Agile delivery priorities.'],
 confluence:['Confluence','Maintain shared requirements and technical documentation so stakeholders, engineers, and QA work from the same context.'],
 sql:['SQL','Investigate relational data, validate business rules, reconcile reporting differences, and trace source-to-target mappings.'],
 powerbi:['Power BI','Build dashboards and reports for operational KPIs, feature adoption, and stakeholder decision-making.'],
 snowflake:['Snowflake','Query enterprise datasets and validate data consistency across APIs and application interfaces.'],
 oracle:['Oracle','Investigate data relationships and business rules with analytical SQL and multi-table joins.'],
 api:['REST APIs','Define contracts, payloads, error scenarios, and integration workflows connecting enterprise systems.'],
 swagger:['Swagger','Read API documentation and schemas to clarify request/response behavior and integration requirements.'],
 postman:['Postman','Inspect requests and responses to support API testing and integration analysis.'],
 bruno:['Bruno','Test API behavior and validate data exchange with engineering teams.'],
 insomnia:['Insomnia','Troubleshoot API requests, validate contracts, and investigate integration issues.'],
 servicenow:['ServiceNow','Support production deployments, incident management, change requests, and post-release validation.'],
 datadog:['Datadog','Investigate application logs and system health to support production troubleshooting and root cause analysis.'],
 splunk:['Splunk','Trace application and integration logs to investigate production issues.'],
 aws:['AWS','Support event-driven integrations and application workflows with SNS, SQS, and Lambda.'],
 github:['GitHub','Support technical collaboration, with GitHub Copilot used for analysis and documentation and recommendations validated before implementation.']
};
const visualNode=(name,label,sub='')=>`<div class="diagram-node">${icon(name)}<strong>${label}</strong>${sub?`<small>${sub}</small>`:''}</div>`;
const diagramArrow=`<span class="diagram-arrow">${icon('arrow')}</span>`;
function projectGraphic(p){
 const themes={hub:['01','Requirement mapping','api'],reporting:['02','Enterprise reporting','chart'],invoice:['03','Configurable systems','code'],ota:['04','API integration','flow'],fiscal:['05','Data exchange','data'],pms:['06','Release readiness','delivery']};
 const [number,theme,glyph]=themes[p.id];
 let content='';
 if(p.id==='hub')content=`<div class="artifact-sheet"><span>BUSINESS NEED</span><b>${icon('check')} Business rules</b><b>${icon('check')} User stories</b><b>${icon('check')} Acceptance</b></div>${diagramArrow}${visualNode('api','API contract','Request ↔ response')}${diagramArrow}<span class="diagram-end">${icon('data')}<small>Validate</small></span>`;
 if(p.id==='reporting')content=`<div class="source-stack"><span>${icon('data')} Charges</span><span>${icon('data')} Payments</span><span>${icon('data')} Refunds</span></div>${diagramArrow}${visualNode('sql','SQL','Map & reconcile')}${diagramArrow}<div class="mini-dashboard"><span>REPORT OUTPUT</span><div class="mini-chart"><i></i><i></i><i></i><i></i></div><b>Business insight</b></div>`;
 if(p.id==='invoice')content=`<div class="code-sheet"><span>${icon('code')} config.json</span><code>{<br>&nbsp; account: …,<br>&nbsp; template: …,<br>&nbsp; rules: …<br>}</code></div>${diagramArrow}<div class="invoice-sheet">${icon('requirements')}<b>Invoice</b><i></i><i></i><i></i><span>${icon('check')} Configured</span></div>`;
 if(p.id==='ota')content=`<div class="source-stack channel-stack"><span>Booking.com</span><span>Expedia</span></div>${diagramArrow}${visualNode('building','Hotel platform','Reservation flow')}${diagramArrow}<div class="reservation-list"><span>${icon('check')} Receive</span><span>${icon('check')} Process</span><span>${icon('check')} Confirm</span></div>`;
 if(p.id==='fiscal')content=`${visualNode('building','Operations','Source data')}${diagramArrow}${visualNode('api','REST APIs','Exchange & log')}${diagramArrow}${visualNode('data','Fiscal provider','Reporting')}`;
 if(p.id==='pms')content=`<div class="release-route">${[['requirements','Define'],['code','Build'],['delivery','Validate'],['git','Release']].map(([n,t],i)=>`<div><span class="release-dot">${icon(n)}</span><b>${t}</b><small>0${i+1}</small></div>`).join('')}</div>`;
 return `<div class="project-graphic graphic-${p.id}" aria-hidden="true"><div class="graphic-top"><span>${icon(glyph)} ${theme}</span><small>CASE / ${number}</small></div><div class="diagram-stage">${content}</div><div class="graphic-foot"><span class="graphic-dots"><i></i><i></i><i></i></span>Conceptual workflow<span>${p.id==='fiscal'?'Request → log → verify':'Business → systems → value'}</span></div></div>`;
}
let projectOpener;const dialog=$('projectDialog');
function openProject(id,opener){const p=projects.find(x=>x.id===id);projectOpener=opener;$('dialogContent').innerHTML=`<p class="case-label">${p.label}</p><h2 id="caseTitle">${p.title}</h2>${p.blocks.map(([h,t])=>`<div class="case-block"><h4>${h}</h4><p>${t}</p></div>`).join('')}<p class="case-source">Scope and figures reflect my professional résumé. Diagrams show conceptual workflows.</p>`;dialog.showModal();}
function renderProjects(filter='all'){
 const visible=projects.filter(p=>filter==='all'||p.category.includes(filter));
 $('projectGrid').innerHTML=visible.map(p=>`<article class="project-card">${projectGraphic(p)}<div class="project-body"><div class="project-meta">${p.label}</div><h3>${p.title}</h3><p>${p.description}</p><div class="project-value"><span>VALUE CREATED</span><p>${p.value}</p></div><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><button class="project-open" data-project="${p.id}" aria-label="Explore case study: ${p.title}">Explore case study ${icon('arrow')}</button></div></article>`).join('');
 watchReveal($('projectGrid'));
 $('projectCount').textContent=`Showing ${visible.length} of ${projects.length} projects`;
 document.querySelectorAll('.project-open').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project,b)));
 document.querySelectorAll('[data-filter]').forEach(b=>setPressed(b,b.dataset.filter===filter));
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>renderProjects(b.dataset.filter)));renderProjects();
$('closeDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>projectOpener?.focus());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('[data-skill], [data-tool]').forEach(b=>{
 b.setAttribute('aria-pressed','false');
 b.addEventListener('click',()=>{
  document.querySelectorAll('[data-skill], [data-tool]').forEach(x=>setPressed(x,x===b));
  const title=b.dataset.tool?toolData[b.dataset.tool][0]:b.textContent.trim();
  const description=b.dataset.tool?toolData[b.dataset.tool][1]:skillData[b.dataset.skill];
  $('skillDetail').innerHTML=`<span class="skill-detail-icon">${icon(b.dataset.tool||'spark')}</span><div><strong>${title}</strong><p>${description}</p></div>`;
 });
});
function renderScenario(key){const s=scenarioData[key];$('scenarioDetail').innerHTML=`<h4>${s.title}</h4><ol>${s.steps.map(t=>`<li>${t}</li>`).join('')}</ol><div class="scenario-takeaway">${s.takeaway}</div>`;document.querySelectorAll('.decision-option').forEach(b=>setPressed(b,b.dataset.scenario===key));}
document.querySelectorAll('.decision-option').forEach(b=>b.addEventListener('click',()=>renderScenario(b.dataset.scenario)));
const themeButton=$('themeToggle');function applyTheme(dark){document.body.classList.toggle('dark',dark);themeButton.textContent=dark?'☀':'☾';themeButton.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');themeButton.setAttribute('aria-pressed',String(dark));document.querySelector('meta[name="theme-color"]').content=dark?'#211e1a':'#fbf7ef';}
let theme;try{theme=localStorage.getItem('portfolio-theme');}catch{}applyTheme(theme==='dark');themeButton.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');applyTheme(dark);try{localStorage.setItem('portfolio-theme',dark?'dark':'light');}catch{}});
const menuButton=$('menuToggle'),nav=$('mainNav');function setMenu(open){nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuButton.textContent=open?'×':'☰';}menuButton.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);menuButton.focus();}});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))setMenu(false);});$('year').textContent=new Date().getFullYear();
$('copyIntro').addEventListener('click',async()=>{const text='Abhinav Hingnekar — open to Technical Business Analyst, Business Systems Analyst, Systems Analyst, Product Analyst, and Integration Analyst opportunities. 12+ years across financial services and B2B SaaS, with requirements analysis, API integrations, SQL, stakeholder management, and cross-functional delivery. Dallas, TX. Contact: abhinav.hingnekar@gmail.com | https://www.linkedin.com/in/abhinav-hingnekar/';try{await navigator.clipboard.writeText(text);$('copyStatus').textContent='Introduction copied to clipboard.';}catch{$('copyStatus').textContent=text;const range=document.createRange();range.selectNodeContents($('copyStatus'));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);}});

renderScenario('api');

// Reveal once, then stop observing. Content remains visible without JS or IntersectionObserver.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let userPaused=false;
try{userPaused=localStorage.getItem('portfolio-motion')==='paused';}catch{}
function updateMotion(){
 const paused=userPaused||reducedMotion.matches;
 document.body.classList.toggle('motion-paused',paused);
 const control=$('motionToggle');control.hidden=false;control.disabled=reducedMotion.matches;
 control.setAttribute('aria-pressed',String(paused));
 control.innerHTML=reducedMotion.matches?'Reduced motion':userPaused?'Resume motion <span aria-hidden="true">▷</span>':'Pause motion <span aria-hidden="true">Ⅱ</span>';
 if(paused){
  revealObserver?.disconnect();revealObserver=null;
  document.querySelectorAll('.is-waiting').forEach(el=>el.classList.remove('is-waiting'));
 }else if('IntersectionObserver' in window){
  revealObserver?.disconnect();
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.remove('is-waiting');revealObserver.unobserve(entry.target);}
  }),{threshold:.08,rootMargin:'0px 0px 16px 0px'});
  document.querySelectorAll('[data-reveal-observed]').forEach(el=>delete el.dataset.revealObserved);
  watchReveal();
 }
}
$('motionToggle').addEventListener('click',()=>{userPaused=!userPaused;try{localStorage.setItem('portfolio-motion',userPaused?'paused':'running');}catch{}updateMotion();});
reducedMotion.addEventListener('change',updateMotion);
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('page-hidden',document.hidden));
document.addEventListener('focusin',e=>e.target.closest('.is-waiting')?.classList.remove('is-waiting'));
updateMotion();
