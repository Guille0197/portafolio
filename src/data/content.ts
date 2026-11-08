export type Language = "en" | "es";
export const content = {
  en: {
    nav: ["Work", "Experience", "About", "Expertise", "Contact"],
    greeting: "5+ YEARS IN SOFTWARE ENGINEERING · PANAMA",
    headline: ["Full Stack Software Engineer", "Building real-world products."],
    intro: "I'm Guillermo Navarro, a software engineer in Panama with 5+ years of experience building digital products, APIs, and cloud-powered applications. I also create SaaS products and explore practical AI integrations.",
    location: "Panama 🇵🇦 · Open to international opportunities",
    explore: "Explore my work", connect: "Let's connect", status: "Open to opportunities",
    stats: [["5+", "Years of experience"], ["AWS", "Cloud engineering"], ["SaaS", "Product builder"]],
    section: ["Selected work", "Professional experience", "Beyond the code", "Technology & interests", "Let's build something meaningful."],
    sectionDescriptions: ["Products and projects that bring together engineering and business value.", "Building reliable applications in banking, insurance, and web development.", "I care about building things people actually use.", "Tools I work with, and the areas I'm actively studying.", "Interested in working together or discussing an opportunity? Reach out."],
    projects: [
      {title:"Panaloyal",kind:"FEATURED · SAAS PRODUCT",desc:"A customer loyalty platform helping businesses connect with customers through digital loyalty cards, rewards, and automated campaigns.",img:"projects/panaloyal-shots.webp",url:"https://panaloyal.com/",tags:["Next.js","SaaS","Customer engagement"],cta:"Visit product"},
      {title:"This portfolio",kind:"PERSONAL · OPEN SOURCE",desc:"A bilingual, accessible portfolio built with Astro. Optimized for performance and designed to tell a clearer engineering story.",img:"",url:"https://github.com/Guille0197/portafolio",tags:["Astro","TypeScript","i18n"],cta:"View source"},
      {title:"WrappedMe",kind:"FEATURED · IOS · ON-DEVICE AI",desc:"An iPhone app that transforms your camera roll into shareable stories, photo recaps and personal insights. Photo analysis runs on-device using Apple's Vision and Apple Intelligence frameworks.",img:"projects/wrappedme.svg",url:"https://apps.apple.com/us/app/camera-roll-stories-wrappedme/id6790265801",website:"https://wrapped-me-web.vercel.app/",tags:["iOS","Apple Intelligence","Vision","On-device AI"],cta:"View on App Store"}
    ],
    jobs:[
      {role:"Full Stack Developer",company:"Banco General",dates:"Sep 2022 — Present",desc:"Contribute to mobile banking development, working across Angular, Ionic, Java, Spring Boot, REST APIs, and AWS services in a financial-services environment.",tags:["Angular","Ionic","Java","Spring Boot","AWS"]},
      {role:"Programmer Analyst",company:"ASSA Insurance",dates:"Oct 2020 — Aug 2022",desc:"Developed web and mobile applications for insurance experiences, including C#/.NET APIs and interfaces with React and React Native. Worked with Agile practices and Azure DevOps.",tags:["C# / .NET","React","React Native","Azure DevOps"]},
      {role:"Junior Web Developer",company:"Diprocess",dates:"2019 — 2020",desc:"Built and maintained web interfaces, REST services, SQL Server solutions, and CI/CD workflows for a variety of projects.",tags:["JavaScript","C#","SQL Server","CI/CD"]}
    ],
    about:["I'm a software engineer who enjoys turning complex problems into simple, useful digital products. My work spans enterprise systems, frontend engineering, backend integrations, and AWS cloud services.","Outside my day job I build independent SaaS products, experiment with automation, and explore AI-assisted engineering. I value thoughtful architecture, dependable delivery, and continuous learning."],
    skills:[
      {title:"Frontend",items:["TypeScript","JavaScript","React","Angular","Ionic","HTML & CSS"]},
      {title:"Backend & data",items:["Node.js","Java","Spring Boot","C# / .NET","REST APIs","SQL"]},
      {title:"Cloud & DevOps",items:["AWS","API Gateway","S3","Fargate","CloudFormation","CI/CD","Docker"]},
      {title:"Currently exploring · AI",items:["AI-assisted software factories","Specification-Driven Development (SDD)","ASDD & ODD approaches","Claude Code harness (subagents, skills, commands, hooks & rules)","Agent harnesses","Local LLMs","Model Context Protocol (MCP)","Agent security & guardrails","AI automation","AI integrations"]}
    ],
    aboutLink:"See my GitHub",email:"Email me",footer:"Built with Astro. Designed with purpose.",
    seoTitle:"Guillermo Navarro | Software Engineer, Full Stack & AWS",
    seoDescription:"Software Engineer in Panama with 5+ years of experience in full-stack development, AWS cloud, SaaS products, and applied AI exploration."
  },
  es: {
    nav:["Proyectos","Experiencia","Sobre mí","Tecnologías","Contacto"],
    greeting:"5+ AÑOS EN INGENIERÍA DE SOFTWARE · PANAMÁ",
    headline:["Ingeniero de Software Full Stack","Creando productos reales."],
    intro:"Soy Guillermo Navarro, ingeniero de software en Panamá con más de 5 años de experiencia creando productos digitales, APIs y aplicaciones en la nube. También desarrollo productos SaaS y exploro integraciones prácticas con inteligencia artificial.",
    location:"Panamá 🇵🇦 · Abierto a oportunidades internacionales",
    explore:"Ver proyectos",connect:"Conectemos",status:"Abierto a oportunidades",
    stats:[["5+","Años de experiencia"],["AWS","Experiencia en la nube"],["SaaS","Desarrollo de productos"]],
    section:["Proyectos destacados","Experiencia profesional","Más allá del código","Tecnologías e intereses","Construyamos algo que importe."],
    sectionDescriptions:["Productos que combinan ingeniería y valor real para los negocios.","Desarrollo de aplicaciones confiables en banca, seguros y entornos web.","Me apasiona crear soluciones que las personas realmente utilizan.","Herramientas que utilizo y áreas que estoy estudiando actualmente.","¿Te interesa colaborar o conversar sobre una oportunidad profesional? Escríbeme."],
    projects:[
      {title:"Panaloyal",kind:"DESTACADO · PRODUCTO SAAS",desc:"Plataforma de fidelización que permite a negocios conectar con sus clientes mediante tarjetas digitales, recompensas y campañas automatizadas.",img:"projects/panaloyal-shots.webp",url:"https://panaloyal.com/",tags:["Next.js","SaaS","Fidelización"],cta:"Visitar producto"},
      {title:"Este portafolio",kind:"PERSONAL · CÓDIGO ABIERTO",desc:"Un portafolio bilingüe y accesible creado con Astro, optimizado para rendimiento y para comunicar mejor mi trayectoria profesional.",img:"",url:"https://github.com/Guille0197/portafolio",tags:["Astro","TypeScript","i18n"],cta:"Ver código"},
      {title:"WrappedMe",kind:"DESTACADO · IOS · IA EN DISPOSITIVO",desc:"Una app para iPhone que transforma tu fototeca en historias, resúmenes y estadísticas personales. El análisis se realiza en el dispositivo con los frameworks Vision y Apple Intelligence de Apple.",img:"projects/wrappedme.svg",url:"https://apps.apple.com/us/app/camera-roll-stories-wrappedme/id6790265801",website:"https://wrapped-me-web.vercel.app/",tags:["iOS","Apple Intelligence","Vision","IA local"],cta:"Ver en App Store"}
    ],
    jobs:[
      {role:"Desarrollador Full Stack",company:"Banco General",dates:"Sep 2022 — Actualidad",desc:"Contribuyo al desarrollo de banca móvil, trabajando con Angular, Ionic, Java, Spring Boot, APIs REST y servicios AWS en un entorno financiero.",tags:["Angular","Ionic","Java","Spring Boot","AWS"]},
      {role:"Analista Programador",company:"ASSA Compañía de Seguros",dates:"Oct 2020 — Ago 2022",desc:"Desarrollé aplicaciones web y móviles para seguros, incluyendo APIs con C#/.NET e interfaces con React y React Native. Trabajé con metodologías ágiles y Azure DevOps.",tags:["C# / .NET","React","React Native","Azure DevOps"]},
      {role:"Desarrollador Web Júnior",company:"Diprocess",dates:"2019 — 2020",desc:"Desarrollé y mantuve interfaces web, servicios REST, soluciones con SQL Server y flujos CI/CD para distintos proyectos.",tags:["JavaScript","C#","SQL Server","CI/CD"]}
    ],
    about:["Soy ingeniero de software y disfruto convertir problemas complejos en productos digitales útiles. Mi experiencia abarca sistemas empresariales, frontend, integraciones backend y servicios AWS.","Fuera del trabajo desarrollo productos SaaS propios, experimento con automatización y exploro la ingeniería asistida por IA. Me interesa la buena arquitectura, la entrega confiable y seguir aprendiendo."],
    skills:[
      {title:"Frontend",items:["TypeScript","JavaScript","React","Angular","Ionic","HTML y CSS"]},
      {title:"Backend y datos",items:["Node.js","Java","Spring Boot","C# / .NET","APIs REST","SQL"]},
      {title:"Cloud y DevOps",items:["AWS","API Gateway","S3","Fargate","CloudFormation","CI/CD","Docker"]},
      {title:"Actualmente aprendiendo · IA",items:["Software factories asistidas por IA","Specification-Driven Development (SDD)","Enfoques ASDD y ODD","Claude Code (subagentes, skills, comandos, hooks y reglas)","Agent harnesses","Modelos LLM locales","Model Context Protocol (MCP)","Seguridad y guardrails de agentes","Automatización con IA","Integraciones con IA"]}
    ],
    aboutLink:"Ver mi GitHub",email:"Enviarme un correo",footer:"Creado con Astro. Diseñado con intención.",
    seoTitle:"Guillermo Navarro | Ingeniero de Software, Full Stack y AWS",
    seoDescription:"Ingeniero de Software en Panamá con más de 5 años de experiencia en desarrollo full stack, AWS, productos SaaS y exploración de IA aplicada."
  }
} as const;
