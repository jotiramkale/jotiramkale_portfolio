// size controls how much space a category takes in the bento grid on
// desktop (lg | md | sm). See Skills.jsx for how sizes map to grid spans.

export const skillCategories = [
  {
    id: 'ai-llm',
    title: 'AI / LLM',
    description: 'Where most of my project time goes — generative AI, retrieval, and agent workflows.',
    size: 'lg',
    accent: 'signal',
    skills: [
      { name: 'Generative AI', icon: 'ml' },
      { name: 'Prompt Engineering', icon: 'prompt' },
      { name: 'Groq', icon: 'groq' },
      { name: 'RAG', icon: 'rag' },
      { name: 'LangChain', icon: 'langchain' },
      { name: 'ChromaDB', icon: 'chroma' },
      { name: 'Multi-Agent Systems', icon: 'agents' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    description: 'Core languages from coursework and project work.',
    size: 'md',
    accent: 'ion',
    skills: [
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C++', icon: 'cpp' },
      { name: 'JavaScript', icon: 'javascript' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Daily workflow — version control, environments, and shipping.',
    size: 'md',
    accent: 'ember',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'vscode' },
    ],
  },
]
