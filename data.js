const data = {
    "about": "Self-taught Fullstack Developer specializing in Node.js and Express.js, passionate about building reliable, maintainable, and scalable systems. Experienced in end-to-end platform development, including containerized local development and cloud deployment (AWS Lambda, S3, CloudFront) with IaC principles. Built projects like PlaytestUrGame, a data-driven playtesting tool for indie developers. Thrives on solving real-world problems, optimizing workflows, and continuously improving systems.",
  "education": [
    {
      "title": "B.Tech / B.E. Computer Science",
      "institute": "Marathwada Mitra Mandal's Institute of Technology, Pune",
      "duration": "2019-2023 | Full Time | CGPA: 8.8/10",
      "description": "2019-2023 | Full Time | CGPA: 8.8/10"
    },  
  ],
  "experience": [
    {
      "title": "Graduate Engineer Trainee",
      "company": "Neilsoft Ltd.",
      "duration": "10/07/2023 – 15/07/2023 (1 year)",
      "description": ["During this period, I have developed significant expertise in the field of image processing, particularly through the utilization of the YOLOX library.",
      "Additionally, I have explored advanced technologies in point cloud segmentation, experimenting with cutting-edge tools such as Pointcept and Repsurf.",
      "This experience has honed my technical skills and deepened my understanding of state-of-the-art image analysis and 3D point cloud segmentation libraries."
      ]
    },
  ],
  "projects": [
  {
    "title": "PlaytestUrGame: video-analytics for games - MVP (Active development)",
    "duration": "09/25 – Present",
    "description": [
      "Built an MVP for a playtesting and analytics platform designed for indie game developers. The system captures real-time player feedback and generates actionable gameplay insights while maintaining low performance and storage overhead.",
      "Designed an intelligent aggregation system that highlights genuine gameplay issues across users—avoiding bias from repeated data or low-confidence signals",
      "Implemented selective screen recording to capture only critical gameplay moments from one player at a time, ensuring efficient use of resources.",
      "Used AWS lambda functions which frontend can communicate with via http requests, and S3 buckets for storing videos & game."
    ],
    "links":[
      {
        "text": "Demo walkthrough",
        "url":"https://youtube.com/embed/CPJBWW9jc-k"
      },
      {
        "text": "Link to demo",
        "url":"https://playtest-ur-game.vercel.app/",
      },
      {
        "text":"Thorough explaination",
        "url":"https://www.youtube.com/embed/RWnosZw35s0"
      },
  ]
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
    "C#", "JavaScript", "HTML", "CSS", "Python", "SQL", "YAML"
  ],
  frameworks: [
    "React.js", "React Hooks", "Express.js", "Node.js", "Jest", "Serverless Framework"
  ],
  tools: [
    "Git", "Git Bash", "GitHub", "Docker", "Supabase", "npm", "MinIO",
    "AWS CLI", "LocalStack", "Unity"
  ],
  cloud: [
    "AWS Lambda", "Amazon S3", "AWS CloudFormation", "Amazon CloudWatch",
    "AWS IAM", "Amazon CloudFront", "Serverless Computing", "Cloud Native Applications", "Cloud Storage", "Cloud Applications", "Infrastructure as Code (IaC)"
  ],
  database: [
    "PostgreSQL"
  ],
  concepts: [
    "System Design", "Database Design", "DBMS", "Algorithms", "Data Structures",
    "User Authentication", "Authorization", "DNS Management", "Middleware", "JWT",
    "Client-Server Application Development", "Single Page Applications", "Web App Development",
    "REST APIs", "Web Services", "HTTP", "HTTPS", "API Testing", "Debugging",
    "Root Cause Analysis", "Root Cause Problem Solving", "Proof of Concept",
    "Creative Problem Solving", "Analytical Skills", "Cost Efficiency", "Planning", "Modular Programming"
  ]
}


};
