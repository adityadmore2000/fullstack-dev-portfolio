const data = {
  "about": "Full-Stack Developer with experience in Node.js, TypeScript, React, and PostgreSQL, building scalable cloud-native applications and clean backend architectures. Built PlaytestUrGame, a game analytics platform with selective screen recording that reduced storage usage by 90%+, real-time feedback aggregation, and AWS serverless workflows. Previously a Junior AI Engineer at Neilsoft with hands-on experience in computer vision, deep learning, and PyTorch. Strong in REST APIs, JWT authentication,Prisma ORM, WebSockets, Docker, and system design fundamentals",
  "education": [
    {
      "title": "B.Tech / B.E. Computer Science",
      "institute": "Marathwada Mitra Mandal's Institute of Technology, Pune",
      "duration": "2019-2023 | Full Time | CGPA: 8.8/10",
      "description": "2019-2023 | Full Time | CGPA: 8.8/10"
    },
  ],
  "projects": [
    {
      "title": "PlaytestUrGame: video-analytics for games - MVP (Active development)",
      "description": [
        "Built an MVP for a playtesting and analytics platform designed for indie game developers. The system captures real-time player feedback and generates actionable gameplay insights while maintaining low performance and storage overhead.",
        "Designed an intelligent aggregation system that highlights genuine gameplay issues across users—avoiding bias from repeated data or low-confidence signals",
        "Implemented selective screen recording to capture only critical gameplay moments from one player at a time, ensuring efficient use of resources.",
        "Used AWS lambda functions which frontend can communicate with via http requests, and S3 buckets for storing videos & game."
      ],
      "links": [
        {
          "text": "Demo walkthrough",
          "url": "https://youtube.com/embed/CPJBWW9jc-k"
        },
        {
          "text": "Link to demo",
          "url": "https://playtest-ur-game.vercel.app/",
        },
        {
          "text": "Thorough explaination",
          "url": "https://www.youtube.com/embed/RWnosZw35s0"
        },
      ]
    },
    {
      "title": "Collaborative Task Manager",
      "description": [
        "Engineered a secure, real-time collaborative task platform from the ground up, implementing JWT-based authentication with HttpOnly cookies and a strict service-repository architecture on the backend (Express + Prisma).",
        "Designed a responsive, user-centric dashboard with personalized views (assigned, created, overdue tasks), real-time updates via Socket.IO rooms, and instant in-app notifications for task assignments—eliminating the need for manual refreshes.",
        "Ensured data integrity by modeling relational task-user associations in PostgreSQL (via Prisma), including priority, due date, and assignment logic, while enforcing validation at both API and service layers.",
        "Built a polished UI with Tailwind CSS and React, featuring dynamic forms, loading states, and seamless auth flows—delivering a cohesive experience across desktop and mobile.",
        "Architected the system for extensibility: cleanly separated routes, services, and repositories; structured API contracts; and prepared the foundation for advanced features like filtering, audit logging, and optimistic UI updates."
      ],
    },
    {
      "title":"llm for git",
      "description":[
        "Developed an LLM-agent for Git that automates repository initialization, adds changed files to commits, commits code, and pushes changes.",
        "Enabled users to execute Git commands using human-like language, eliminating the need to look up commands or search online.",
        "Leveraged Langchain to facilitate natural language interaction with Git tools, abstracting command complexities.",
        "Technologies used: Langchain, Node.js, Ollama."
      ]
    },
    {
      "title":"Local AI Interviewer",
      "description":[
        "Built an offline, local-first AI voice assistant prototype for mock interviewing—running entirely on-device with no cloud or paid services.",
        "The system integrates Ollama for LLM inference, Whisper.cpp for speech-to-text, and Coqui-TTS for natural-sounding speech synthesis.",
        "Orchestrated the full stack using Docker to manage dependencies and ensure reproducibility across environments.",
        "Currently refining conversational flow and naturalness through prompt engineering and system tuning, with exploratory integration of RAG for resume parsing and contextual awareness."
      ]
    }
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
