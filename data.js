const data = {
    "about": "Full-Stack Developer with experience in Node.js, TypeScript, React, and PostgreSQL, building scalable cloud-native applications and clean backend architectures. Built PlaytestUrGame, a game analytics platform with selective screen recording that reduced storage usage by 90%+, real-time feedback aggregation, and AWS serverless workflows. Previously a Junior AI Engineer at Neilsoft with hands-on experience in computer vision, deep learning, and PyTorch. Strong in REST APIs, JWT authentication,Prisma ORM, WebSockets, Docker, and system design fundamentals",
  "education": [
    {
      "title": "B.Tech / B.E. Computer Science",
      "institute": "Marathwada Mitra Mandal's Institute of Technology, Pune",
      "duration": "2019-2023 | Full Time | CGPA: 8.8/10",
      "description": "2019-2023 | Full Time | CGPA: 8.8/10"
    },
    {
      "title": "Class XII",
      "institute": "Maharashtra Board",
      "duration": "2019 | Percentage: 74.77%",
      "description": "2019 | Percentage: 74.77%"
    },
    {
      "title": "Class X",
      "institute": "Maharashtra Board",
      "duration": "2017 | Percentage: 86.60%",
      "description": "2017 | Percentage: 86.60%"
    }
  ],
  "projects": [
  {
    "title": "PlaytestUrGame — Backend-focused Video Analytics MVP (Active development)",
    "duration": "09/25 – Present",
    "description": [
      "Created and deployed backend APIs with Node.js / Express.js to facilitate multi-game testing sessions and player feedback gathering.",
      "Working on a selective video recording system that intelligently records gameplay only when enough feedback data has been collected — preventing redundant recordings and minimizing storage overhead.",
      "Prioritized efficient architecture over over-engineering for scalable analytics without redundant computation.",
      "Employed Supabase / MinIO for secure, structured data and video storage, and Docker to ensure local environment consistency and testing.",
      "Prepared for deployment through serverless platforms (Vercel, Netlify) to realize cost-efficient scalability.",
      "Existing AI-based bug detection robust solutions require Gigabytes of storage to identify problems, but this solution gets the work done in MBs (~99% storage saved), saving computational costs."
    ],
    "links":{
      "text":"Demo & explaination",
      "url":"https://www.youtube.com/embed/RWnosZw35s0"
    }
  },
  {
    "title": "Verify WebGL Build – npm package",
    "duration": "10/25 – 10/25",
    "description": [
      "Developed a package to validate Unity WebGL builds, which handles both compressed and uncompressed builds.",
      "Tested locally with Jest, that covers missing or malformed files/folders to ensure reliability.",
      "Published it as open-source npm-package, which encourages community contributions and future extensions to other game engines.",
      "Will use this as dependency for PlaytestUrGame project."
    ],
    "links":[
      {
        "text":"View on npm",
        "url":"https://www.npmjs.com/package/@adityamore.gamedev/is-webgl-build"
      }
    ]
  },
],
  skills: {
    languages: [
      "C#", "JavaScript", "HTML", "CSS", "Python"
    ],
    frameworks: [
      "React.js", "React Hooks", "Express.js", "Node.js","Jest"
    ],
    tools: [
      "Git", "Docker", "Supabase", "npm", "minio","Unity"
    ],
    database:[
      "PostgreSQL"
    ],
    concepts: [
      "System Design", "Database Design", "DBMS", "Algorithms", "Data Structures",
      "User Authentication", "DNS Management", "Creative Problem Solving",
      "Cost Efficiency", "Planning", "REST APIs"
    ]
  }

};
