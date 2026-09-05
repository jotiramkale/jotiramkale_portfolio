// Maps a human-readable technology label (as written in data/projects.js)
// to a key in iconMap.js. Falls back to a generic code icon when a
// technology doesn't have a dedicated logo.

const nameToIconKey = {
  python: 'python',
  java: 'java',
  'c++': 'cpp',
  javascript: 'javascript',
  react: 'react',
  html: 'html',
  css: 'css',
  'tailwind css': 'tailwind',
  fastapi: 'fastapi',
  'node.js': 'node',
  mysql: 'mysql',
  postgresql: 'postgresql',
  'machine learning': 'ml',
  'prompt engineering': 'prompt',
  'groq api': 'groq',
  groq: 'groq',
  langchain: 'langchain',
  chromadb: 'chroma',
  rag: 'rag',
  'multi-agent systems': 'agents',
  'multi-agent ai': 'agents',
  'generative ai': 'ml',
  git: 'git',
  github: 'github',
  'vs code': 'vscode',
  docker: 'docker',
  linux: 'linux',
  streamlit: 'chartLine',
}

export function techIconKey(label) {
  return nameToIconKey[label.trim().toLowerCase()] ?? 'code'
}
