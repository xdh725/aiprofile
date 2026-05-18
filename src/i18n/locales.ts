export const locales = {
  zh: {
    nav: {
      about: "关于",
      projects: "作品集",
      blog: "博客",
      contact: "联系",
    },
    hero: {
      greeting: "你好，我是",
      name: "谢东华",
      nickname: "毛毛虫",
      roles: [
        "全栈开发工程师",
        "AI 探索者",
        "开源爱好者",
        "技术极客",
      ],
      tagline: "进入 AI 快车道，在 AI 游乐场中拥抱 AI",
      cta: "探索我的世界",
    },
    about: {
      title: "关于我",
      description:
        "一名热衷于探索技术边界的全栈开发工程师。从传统 Web 开发到 AI 应用，始终保持着对新技术的好奇心和探索欲。相信技术的力量可以改变世界，正在 AI 的浪潮中不断学习和成长。",
      stats: [
        { label: "年开发经验", value: "8+" },
        { label: "开源项目", value: "10+" },
        { label: "AI 项目", value: "5+" },
        { label: "技术栈", value: "20+" },
      ],
    },
    projects: {
      title: "作品集",
      subtitle: "探索我的项目和创作",
      aiPlayground: {
        title: "AI Playground",
        description:
          "一个集合了多种 AI 工具和实验的项目仓库，包含 AI 对话、图像生成、代码助手等多种 AI 应用的探索与实践。",
        tags: ["AI", "Python", "TypeScript", "LLM", "Open Source"],
        link: "查看项目",
      },
      moreComing: "更多项目即将上线...",
    },
    blog: {
      title: "博客",
      subtitle: "思考与分享",
      comingSoon: "博客功能正在搭建中，敬请期待...",
      recentPosts: "最新文章",
    },
    contact: {
      title: "联系我",
      subtitle: "欢迎交流与合作",
      email: "邮箱",
      github: "GitHub",
      sendEmail: "发送邮件",
      visitGithub: "访问 GitHub",
    },
    footer: {
      built: "用 Next.js 构建",
      rights: "保留所有权利",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Donghua Xie",
      nickname: "Caterpillar",
      roles: [
        "Full-Stack Developer",
        "AI Explorer",
        "Open Source Enthusiast",
        "Tech Geek",
      ],
      tagline:
        "Entering the AI fast lane, embracing AI in the AI Playground",
      cta: "Explore My World",
    },
    about: {
      title: "About Me",
      description:
        "A full-stack developer passionate about exploring the boundaries of technology. From traditional web development to AI applications, I maintain a curiosity and desire to explore new technologies. I believe in the power of technology to change the world, and I'm constantly learning and growing in the AI wave.",
      stats: [
        { label: "Years Experience", value: "8+" },
        { label: "Open Source Projects", value: "10+" },
        { label: "AI Projects", value: "5+" },
        { label: "Tech Stack", value: "20+" },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Explore my creations",
      aiPlayground: {
        title: "AI Playground",
        description:
          "A collection of AI tools and experiments, featuring AI chat, image generation, code assistants, and various AI application explorations.",
        tags: ["AI", "Python", "TypeScript", "LLM", "Open Source"],
        link: "View Project",
      },
      moreComing: "More projects coming soon...",
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts & Insights",
      comingSoon: "Blog is under construction, stay tuned...",
      recentPosts: "Recent Posts",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and collaborate",
      email: "Email",
      github: "GitHub",
      sendEmail: "Send Email",
      visitGithub: "Visit GitHub",
    },
    footer: {
      built: "Built with Next.js",
      rights: "All rights reserved",
    },
  },
};

export type Locale = keyof typeof locales;
export type Translations = typeof locales["zh"];
