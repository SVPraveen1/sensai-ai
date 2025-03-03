
# Sensai AI 🤖

  

> An intelligent AI-powered learning platform that revolutionizes personal education through adaptive learning and real-time feedback.


[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)](https://nodejs.org/)
  

## 🎯 Overview

  

Sensai AI is a cutting-edge learning platform that harnesses artificial intelligence to deliver personalized education. By adapting to each user's learning style and providing real-time feedback, Sensai AI creates customized learning paths for optimal educational outcomes.

  

---

  

## 🚀 Features

  

### ✨ Adaptive Learning System

- Personalized learning paths

- Real-time progress tracking

- Dynamic difficulty adjustment

- Learning style recognition

  

### 🔬 AI-Powered Analytics

- Performance prediction

- Learning pattern analysis

- Engagement metrics

- Personalized recommendations

  

### 🛠 Interactive Learning Tools

- Virtual tutoring sessions

- Interactive exercises

- Collaborative learning spaces

- Multi-format content support

  

---

  

## 💻 Tech Stack

  

### **Frontend & Backend (Full-Stack with Next.js)**

- Next.js (App Router)

- React.js

- TypeScript

- Tailwind CSS

- Prisma ORM

- PostgreSQL

  

### **AI/ML:**

- TensorFlow

- Python

- scikit-learn

- Natural Language Processing (NLP)

  

---

  

## 🏁 Getting Started

  

### Prerequisites

  

Ensure you have the following installed:

  

- [Next.js](https://nextjs.org/) (>= 16.0.0)
 - [Node.js](https://nodejs.org/) (>= 16.0.0)
- [PostgreSQL](https://www.postgresql.org/) (>= 13.0)
- [Python](https://www.python.org/) (>= 3.8)
- npm, yarn, or pnpm

  

### Installation

  

```bash

# Clone the repository
git  clone  https://github.com/SVPraveen1/sensai-ai.git

# Navigate to project directory
cd  sensai-ai

# Install dependencies
pnpm  install

# Start the development server
pnpm  dev

```

  

### Configuration

  

Create a `.env` file in the root directory:

  

```env

NODE_ENV=development

PORT=3000

DATABASE_URL=postgresql://user:password@localhost:5432/sensai

JWT_SECRET=your_jwt_secret

AI_API_KEY=your_ai_api_key

```

  

---

  

## 🏛 Project Structure

  

```

sensai-ai/

├── app/ # Next.js application directory (frontend & API routes)

│ ├── api/ # Backend API routes (Next.js server functions)

│ ├── page.js # Main page component

│ └── ... # Other Next.js specific files

├── components/ # React components

├── data/ # Static data files

├── hooks/ # Custom React hooks

├── lib/ # Library utilities

├── prisma/ # Prisma schema and migrations

├── public/ # Public assets

├── styles/ # CSS and styling files

├── .gitignore # Git ignore file

├── README.md # Project README

├── next.config.mjs # Next.js configuration

├── package.json # Node.js dependencies and scripts

├── pnpm-lock.yaml # pnpm lock file

└── tailwind.config.mjs # Tailwind CSS configuration

```

  

---

  

## 📚 API Documentation

  

Our API follows RESTful principles using Next.js API routes. Full documentation is available at `/docs/api.md`.

  

Example endpoints:

  

```http

GET /api/v1/lessons

POST /api/v1/progress

```

  

---

  

## 🛠 Development

  

```bash

# Run tests

pnpm  test

# Build for production

pnpm  build

```

  

---

  

## 🚢 Deployment

  

Check out the detailed deployment guides for different platforms:

  

- [Deploy to Vercel](https://vercel.com/docs/deployments/overview)


  

---

  

## 🤝 Contributing

  

We welcome contributions! To contribute:

  

1. Fork the repository

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  
<!-- ## 🆘 Support

  

- **Documentation:** [Docs](docs/)

- **Issues:** [GitHub Issues](https://github.com/SVPraveen1/sensai-ai/issues)

- **Email:** support@sensai-ai.com

- **Community:** [Join our Discord](https://discord.gg/sensai-ai) -->

  

---