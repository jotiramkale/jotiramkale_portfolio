// Central place for editable personal/profile content.
// Update this file to change the name, title, and core copy across the site.

export const profile = {
  name: 'Jotiram Kale',
  initials: 'JK',
  // Shown directly under the name in the Hero section.
  title: 'Generative AI & Agentic AI Developer',
  location: 'Maharashtra, India',
  // Hero supporting line — keep this accurate to what you've actually built.
  tagline: 'I build practical AI-powered applications using LLMs, RAG, multi-agent systems, and Python. ',
  availability: 'Open to opportunities',
  about: {
    paragraphs: [
      "I'm a Computer Science Engineering student with a growing focus on Artificial Intelligence — specifically Generative AI, LLM applications, and Retrieval-Augmented Generation. I like understanding how these systems are put together, then building my own versions to see where they break.",
      'Most of my hands-on work so far has been in applying LLMs to real tasks: building a document question-answering assistant with LangChain and RAG, and exploring multi-agent workflows where several AI agents coordinate on a task rather than a single model working alone.',
      "Alongside AI, I work across the full stack — Python and FastAPI on the backend, React and Tailwind CSS on the frontend — because I want to be able to take an idea from a model in a notebook to an application someone can actually use.",
    ],
    education: {
      degree: 'B.Tech in Computer Science & Engineering',
      status: 'Currently pursuing (expected 2027)',
      focus: 'Generative AI & Agentic AI',
    },
    goal:
      'To grow into an engineer who can design and ship reliable AI-powered products — from retrieval and agent pipelines to the production interface around them — on a team solving real problems with applied AI.',
  },
  interests: [
    { name: 'Artificial Intelligence', icon: 'brainAi' },
    { name: 'Generative AI', icon: 'chip' },
    { name: 'LLM Applications', icon: 'prompt' },
    { name: 'RAG Systems', icon: 'search' },
    { name: 'Multi-Agent Systems', icon: 'network' },
    { name: 'Full Stack Development', icon: 'layers' },
    { name: 'Software Engineering', icon: 'code' },
  ],
}

// Update these with your real profile URLs. LinkedIn and email below are
// Contact and social profile links.
export const socialLinks = {
  github: 'https://github.com/jotiramkale',
  linkedin: 'https://linkedin.com/in/jotiram-kale',
  email: 'kalejotiram55@gmail.com',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
