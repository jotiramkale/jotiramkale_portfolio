// Replace the placeholder githubUrl/liveUrl values below with real links
// once each repository/deployment is ready. Leaving them as '' keeps the
// buttons visible but disabled, rather than pointing to a fake URL.

export const projects = [
  {
    id: 'laptop-price-predictor',
    title: 'Laptop Price Predictor',
    description:
      'A machine learning application that estimates laptop prices from specifications like processor, RAM, storage, and GPU, served through an interactive Streamlit interface.',
    problem:
      'Judging whether a laptop\u2019s price is fair from its spec sheet alone is hard \u2014 small differences in RAM, storage, or GPU shift the price in ways that aren\u2019t obvious without comparing many listings by hand.',
    solution:
      'A regression model trained on 1,300+ laptop listings that takes in hardware specifications and returns a predicted price, wrapped in a simple Streamlit interface for interactive use.',
    keyFeatures: [
      'Data cleaning and feature engineering across processor, RAM, storage, GPU, display, and OS',
      'Multiple regression models compared, with Random Forest Regressor giving the best fit',
      'Approximately 90% R\u00b2 score on the evaluation set',
      'Model serialized with Pickle for fast, repeatable predictions',
      'Interactive Streamlit UI for real-time price estimates',
    ],
    architecture: [
      'Raw laptop dataset (1,300+ records)',
      'Data cleaning & feature engineering',
      'Model training (Random Forest)',
      'Evaluation (R\u00b2 \u2248 0.90)',
      'Serialized model (Pickle)',
      'Streamlit interface',
      'Predicted price',
    ],
    tech: ['Python', 'Machine Learning', 'Streamlit'],
    status: 'Completed',
    icon: 'chartLine',
    accent: 'signal',
    featured: false,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'ai-pdf-assistant',
    title: 'AI PDF Assistant',
    description:
      'A Retrieval-Augmented Generation system that lets you upload a PDF and ask questions about it in plain language, with answers grounded in the document\u2019s own content.',
    problem:
      'Reading through a long PDF to find one answer is slow, and plain keyword search misses anything phrased differently from the document\u2019s wording.',
    solution:
      'A RAG pipeline that chunks and embeds a PDF\u2019s contents, retrieves the passages most relevant to a question, and asks an LLM to answer using only that retrieved context.',
    keyFeatures: [
      'PDF upload with automatic text extraction and chunking',
      'Embeddings stored and queried through ChromaDB',
      'Context-grounded answers generated via Groq',
      'Prompt engineering to keep answers tied to the source document',
      'Conversational Streamlit interface for follow-up questions',
    ],
    architecture: [
      'PDF upload',
      'Text extraction',
      'Chunking',
      'Embeddings',
      'ChromaDB (vector store)',
      'Retriever',
      'Prompt + retrieved context',
      'Groq LLM',
      'Answer',
    ],
    tech: ['Python', 'Groq', 'RAG', 'LangChain', 'ChromaDB', 'Streamlit'],
    status: 'In Progress',
    icon: 'filePdf',
    accent: 'ember',
    featured: false,
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'ai-dsa-code-reviewer',
    title: 'AI DSA Code Reviewer',
    description:
      'An AI-powered assistant that reviews data structures and algorithms solutions, flags edge cases and complexity issues, and suggests targeted improvements.',
    problem:
      'Getting fast, specific feedback on a DSA solution \u2014 not just right-or-wrong, but on complexity, edge cases, and style \u2014 usually means waiting on a mentor or peer review.',
    solution:
      'An assistant that takes a submitted solution, sends it to an LLM for structured review, and surfaces the feedback through a React interface backed by a FastAPI service.',
    keyFeatures: [
      'Code submission through a React frontend',
      'FastAPI backend orchestrating the review request',
      'LLM-generated feedback via Groq on correctness, complexity, and edge cases',
      'Structured review output rather than a single pass/fail verdict',
    ],
    architecture: [
      'Code submission (React)',
      'FastAPI backend',
      'Groq LLM review',
      'Structured feedback',
      'Displayed in UI',
    ],
    tech: ['Python', 'Groq', 'FastAPI', 'React'],
    status: 'In Progress',
    icon: 'code',
    accent: 'signal',
    featured: false,
    githubUrl: '',
    liveUrl: '',
  },
]

export const statusStyles = {
  Completed: 'text-signal-400 bg-signal-500/10 border-signal-500/30',
  'In Progress': 'text-ember-400 bg-ember-500/10 border-ember-500/30',
  'Final Year Project': 'text-ion-400 bg-ion-500/10 border-ion-500/30',
}
