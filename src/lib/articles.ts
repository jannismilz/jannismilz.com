const articles: Article[] = [
  {
    date: '11.05.2024',
    description: 'Gain back time by using these simple browser shortcuts.',
    link: 'https://medium.com/@jannismilz/these-browser-keyboard-shortcuts-are-pure-productivity-f665c0f850b7',
    title: 'These Browser Keyboard Shortcuts Are Pure Productivity',
  },
  {
    date: '09.03.2024',
    description:
      'Having an SMTP server and Python 3 installed, is enough to be able to send emails to whoever you want.',
    link: 'https://medium.com/@jannismilz/sending-emails-in-python-3-is-actually-easy-5ad1c5eb3f9d',
    title: 'Sending Emails in Python 3 Is Actually Easy',
  },
  {
    date: '04.03.2024',
    description:
      'Imagine writing your blog posts in Notion, and as soon as you’re ready, you change a single tag, and it gets posted to your account.',
    link: 'https://medium.com/@jannismilz/how-i-automated-medium-posting-using-notion-and-make-com-219d1ea36dfc',
    title: 'Top 1 Automation For Medium Posting Using Notion And Make.com',
  },
  {
    date: '26.02.2024',
    description:
      'This weird experiment of sleeping on the floor for 14 days had an incredible and unexpected outcome.',
    link: 'https://medium.com/better-than-yesterdays-me/sleeping-on-the-floor-for-14-days-has-changed-how-i-sleep-0302038f76ce',
    title: 'Sleeping On The Floor For 14 Days Has Changed How I Sleep',
  },
  {
    date: '21.02.2024',
    description:
      'Today I want to share with you my top 4 key takeaways I took from this book in marketing and value generation.',
    link: 'https://medium.com/million-words-of-wisdom/dotcom-secrets-the-4-secrets-to-a-successful-online-business-1750de928561',
    title: 'DotCom Secrets — The 4 Secrets to a Successful Online Business',
  },
  {
    date: '14.01.2024',
    description:
      'The year 2023 has been shaped by the release of ChatGPT, and even today, more AI projects are released daily.',
    link: 'https://medium.com/@jannismilz/why-chatgpt-and-ai-is-bad-for-new-programmers-efb4d9127494',
    title: 'Why ChatGPT and AI is bad for new programmers',
  },
  {
    date: '14.01.2024',
    description:
      'Portainer is a web-based management tool for all of your containers. You can deploy, configure, troubleshoot and secure containers.',
    link: 'https://medium.com/@jannismilz/manage-your-containers-with-portainer-640d510c6150',
    title: 'Manage your containers with Portainer',
  },
  {
    date: '14.01.2024',
    description:
      'Have you ever wanted an ExpressJS like API structure in your NextJS app? A good structure and easy to extend.',
    link: 'https://medium.com/@jannismilz/expressjs-like-api-in-nextjs-def1a1caf1fe',
    title: 'ExpressJS like API in NextJS',
  },
  {
    date: '14.01.2024',
    description:
      'A devcontainer is a feature that lets you run docker containers locally for development. This brings a lot of advantages!',
    link: 'https://medium.com/@jannismilz/create-a-devcontainer-9191a2d5ff7b',
    title: 'Create a Devcontainer',
  },
]

export interface Article {
  title: string
  description: string
  date: string
  link: string
}

export function getAllArticles() {
  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
