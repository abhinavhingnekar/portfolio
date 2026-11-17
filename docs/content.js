// Professional content retained from the existing portfolio. No résumé PDF is published.
export const skillData = {
  "Requirements": "Requirements analysis that connects stakeholder needs to functional specifications, business rules, user stories, and acceptance criteria.",
  "User Stories": "Translate workflows into actionable stories and acceptance criteria that help engineering and QA align on expected behavior.",
  "Stakeholders": "Stakeholder management across business users, product owners, vendors, engineering, and QA. Make priorities, dependencies, and trade-offs clear before delivery.",
  "Process Mapping": "Map current and future workflows, assess system impacts, and identify process improvement opportunities at handoffs between teams and systems.",
  "Agile Delivery": "Support iterative planning, backlog refinement, sprint collaboration, and cross-team delivery using Jira and Confluence.",
  "UAT & Testing": "Connect requirements to test scenarios, review outcomes, investigate defects, and coordinate business validation.",
  "Release Management": "Coordinate release scope, readiness, dependencies, and production follow-through with delivery teams.",
  "Product Analytics": "Use usage and feedback tools such as Pendo, Google Analytics, and Qualtrics to inform improvements.",
  "REST APIs": "Define API integrations through request/response contracts, payloads, data exchange workflows, and failure scenarios. Test and troubleshoot with Insomnia, Bruno, and Postman.",
  "SQL & Data": "Use SQL across Snowflake, Oracle, and MySQL to investigate data relationships, validate business rules, reconcile discrepancies, and support source-to-target data mapping.",
  "Integration Patterns": "Work through synchronous and asynchronous patterns, polling, error handling, and third-party service dependencies.",
  "Monitoring": "Use operational insights and tools such as Datadog and Splunk to support troubleshooting and release follow-up."
};

export const scenarioData = {
  "api": {
    "title": "Investigate the failure path",
    "steps": [
      "Confirm the pattern: endpoint, status codes, payloads, frequency, and business impact.",
      "Map the request flow to distinguish vendor failures from internal validation and network issues.",
      "Define retry behavior, timeouts, monitoring, user messaging, and acceptance criteria."
    ],
    "takeaway": "Outcome: clear failure scenarios, ownership, and testable reliability requirements."
  },
  "data": {
    "title": "Trace the numbers to their source",
    "steps": [
      "Compare the business definitions, filters, and reporting periods.",
      "Trace source tables, joins, transformations, and refunds or reversals.",
      "Reconcile a representative sample and document one agreed calculation rule."
    ],
    "takeaway": "Outcome: consistent definitions and repeatable validation."
  },
  "release": {
    "title": "Make the trade-off visible",
    "steps": [
      "Identify the dependency, its owner, and impact on testing and deployment.",
      "Evaluate whether the change can be isolated, deferred, or mitigated.",
      "Align stakeholders on an updated scope and readiness decision."
    ],
    "takeaway": "Outcome: an agreed release scope with visible dependencies and readiness criteria."
  }
};

export const roleData = {
  "fidelity": {
    "title": "Systems Analyst · Fidelity Investments (Contract)",
    "date": "August 2024 — Present · Westlake, TX",
    "summary": "Supporting The Hub, Fidelity’s internal mobile application, across enterprise systems, data, and user experience.",
    "bullets": [
      "Translate stakeholder needs into functional and non-functional requirements, REST API contracts, data flows, and acceptance criteria.",
      "Test APIs with Insomnia and Bruno. Use SQL in Snowflake and Oracle to validate business rules and data movement.",
      "Develop Power BI dashboards for operational KPIs, adoption, and engagement; analyze feedback using Pendo, Google Analytics, and Qualtrics.",
      "Support Agile delivery in Jira and Confluence, troubleshooting with Datadog, and deployments and incident management with ServiceNow."
    ]
  },
  "hotelkey": {
    "title": "Technical Business Analyst · HotelKey Inc",
    "date": "March 2018 — August 2024 · Dallas, TX",
    "summary": "Owned the enterprise reporting roadmap and led cross-functional delivery across hospitality reporting, integrations, and implementations.",
    "bullets": [
      "Partnered with Hilton, IHG, and Extended Stay America on reporting requirements; guided developers on SQL logic and data relationships.",
      "Built a JSON and REST API invoice framework supporting 20K+ corporate accounts across 1,400+ hotels.",
      "Delivered enterprise PMS implementations generating $14M in recurring annual revenue; implemented Booking.com and Expedia integrations.",
      "Designed data warehousing and ETL solutions, led fiscal integrations, and implemented AWS SNS, SQS, and Lambda workflows."
    ]
  },
  "qa": {
    "title": "QA Lead Engineer · HotelKey Inc",
    "date": "January 2017 — February 2018 · Dallas, TX",
    "summary": "Hospitality platform quality, requirements analysis, and deployment at scale.",
    "bullets": [
      "Spearheaded deployment for over 130 properties within the G6 Hospitality project.",
      "Developed requirements gathering and analysis methods for Extended Stay America.",
      "Supervised testing for GUI-based iOS and backend applications."
    ]
  },
  "tcs": {
    "title": "Systems Engineer · Tata Consultancy Services",
    "date": "February 2014 — December 2016 · Pune, Maharashtra",
    "summary": "Enterprise data and application testing for Citi’s Commercial Cards projects.",
    "bullets": [
      "Overhauled ETL testing projects for the Global Data Repository team.",
      "Designed and delivered GUI testing projects for the CCRS and Citi Manager teams."
    ]
  }
};

export const projects = [
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

export const toolData = {
  "jira": [
    "Jira",
    "Organize epics, user stories, acceptance criteria, backlog refinement, and Agile delivery priorities."
  ],
  "confluence": [
    "Confluence",
    "Maintain shared requirements and technical documentation so stakeholders, engineers, and QA work from the same context."
  ],
  "sql": [
    "SQL",
    "Investigate relational data, validate business rules, reconcile reporting differences, and trace source-to-target mappings."
  ],
  "powerbi": [
    "Power BI",
    "Build dashboards and reports for operational KPIs, feature adoption, and stakeholder decision-making."
  ],
  "snowflake": [
    "Snowflake",
    "Query enterprise datasets and validate data consistency across APIs and application interfaces."
  ],
  "oracle": [
    "Oracle",
    "Investigate data relationships and business rules with analytical SQL and multi-table joins."
  ],
  "api": [
    "REST APIs",
    "Define contracts, payloads, error scenarios, and integration workflows connecting enterprise systems."
  ],
  "swagger": [
    "Swagger",
    "Read API documentation and schemas to clarify request/response behavior and integration requirements."
  ],
  "postman": [
    "Postman",
    "Inspect requests and responses to support API testing and integration analysis."
  ],
  "bruno": [
    "Bruno",
    "Test API behavior and validate data exchange with engineering teams."
  ],
  "insomnia": [
    "Insomnia",
    "Troubleshoot API requests, validate contracts, and investigate integration issues."
  ],
  "servicenow": [
    "ServiceNow",
    "Support production deployments, incident management, change requests, and post-release validation."
  ],
  "datadog": [
    "Datadog",
    "Investigate application logs and system health to support production troubleshooting and root cause analysis."
  ],
  "splunk": [
    "Splunk",
    "Trace application and integration logs to investigate production issues."
  ],
  "aws": [
    "AWS",
    "Support event-driven integrations and application workflows with SNS, SQS, and Lambda."
  ],
  "github": [
    "GitHub",
    "Support technical collaboration, with GitHub Copilot used for analysis and documentation and recommendations validated before implementation."
  ]
};

export const projectSummaries = {
  "hub": {
    "type": "FIDELITY / API INTEGRATION",
    "title": "The Hub. Connected workflows.",
    "problem": "Mobile workflows needed consistent backend data.",
    "role": "Requirements, API contracts & SQL validation.",
    "systems": [
      "REST APIs",
      "Snowflake",
      "Oracle"
    ],
    "value": "Defined behavior. Validated business rules."
  },
  "reporting": {
    "type": "HOTELKEY / ENTERPRISE REPORTING",
    "title": "Reporting that answers the business.",
    "problem": "Customer questions spanned operational datasets.",
    "role": "Reporting roadmap, data mapping & team delivery.",
    "systems": [
      "SQL / MySQL",
      "ETL",
      "Data warehousing"
    ],
    "value": "More accurate, accessible reporting."
  },
  "invoice": {
    "type": "HOTELKEY / INVOICE FRAMEWORK",
    "title": "One framework. Hotel-scale invoicing.",
    "problem": "Invoice needs varied across corporate accounts.",
    "role": "Built a JSON + REST invoice framework.",
    "systems": [
      "JSON",
      "REST APIs"
    ],
    "value": "20K+ corporate accounts. 1,400+ hotels."
  },
  "ota": {
    "type": "HOTELKEY / BOOKING INTEGRATIONS",
    "title": "Reservations, connected.",
    "problem": "Bookings needed to flow into hotel operations.",
    "role": "Implemented Booking.com & Expedia integrations.",
    "systems": [
      "Booking.com",
      "Expedia",
      "OTA integrations"
    ],
    "value": "80% increase in automated processing & bookings."
  },
  "fiscal": {
    "type": "HOTELKEY / FISCAL INTEGRATIONS",
    "title": "Fiscal reporting, automated.",
    "problem": "Operations needed data exchange with fiscal providers.",
    "role": "Led provider integrations & data validation.",
    "systems": [
      "REST APIs",
      "Data exchange",
      "Request logging"
    ],
    "value": "Automated workflows supporting compliance."
  },
  "pms": {
    "type": "HOTELKEY / ENTERPRISE DELIVERY",
    "title": "Enterprise systems. Ready for release.",
    "problem": "Large customers needed coordinated rollout & onboarding.",
    "role": "Led requirements through release & support.",
    "systems": [
      "PMS",
      "SDLC",
      "QA"
    ],
    "value": "$14M recurring annual revenue from implementations."
  }
};

