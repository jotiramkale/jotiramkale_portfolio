// Central icon registry. Import every icon once here, then reference it
// elsewhere by string key via <Icon name="python" />. Keeps icon imports
// in a single, easy-to-audit place instead of scattered across components.

import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaCode,
  FaLaptopCode,
  FaCloud,
  FaNetworkWired,
  FaSearch,
  FaKeyboard,
  FaBolt,
  FaLink,
  FaCubes,
  FaMicrochip,
  FaLayerGroup,
  FaGraduationCap,
  FaCertificate,
  FaSchool,
  FaRoute,
  FaRocket,
  FaCodeBranch,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
  FaExternalLinkAlt,
  FaArrowUp,
  FaArrowRight,
  FaChevronDown,
  FaCheckCircle,
  FaPaperPlane,
  FaBars,
  FaTimes,
  FaRobot,
  FaFilePdf,
  FaChartLine,
  FaEye,
  FaCalendarAlt,
} from 'react-icons/fa'

import { SiCplusplus, SiTailwindcss, SiFastapi, SiMysql, SiPostgresql } from 'react-icons/si'

export const iconMap = {
  // Languages
  python: FaPython,
  java: FaJava,
  cpp: SiCplusplus,
  javascript: FaJs,

  // Frontend
  react: FaReact,
  html: FaHtml5,
  css: FaCss3Alt,
  tailwind: SiTailwindcss,

  // Backend
  fastapi: SiFastapi,
  node: FaNodeJs,

  // Database
  mysql: SiMysql,
  postgresql: SiPostgresql,

  // AI / ML
  ml: FaMicrochip,
  prompt: FaKeyboard,
  groq: FaBolt,
  langchain: FaLink,
  chroma: FaCubes,
  rag: FaSearch,
  agents: FaNetworkWired,

  // Tools
  git: FaGitAlt,
  github: FaGithub,
  vscode: FaLaptopCode,
  docker: FaDocker,
  linux: FaLinux,

  // Interests / concepts
  brainAi: FaRobot,
  layers: FaLayerGroup,
  network: FaNetworkWired,
  code: FaCode,
  cloud: FaCloud,
  chip: FaMicrochip,
  search: FaSearch,

  // Education
  diploma: FaSchool,
  degree: FaGraduationCap,
  journey: FaRoute,
  certificate: FaCertificate,

  // Achievements
  rocket: FaRocket,
  codeBranch: FaCodeBranch,

  // Projects
  laptopCode: FaLaptopCode,
  filePdf: FaFilePdf,
  chartLine: FaChartLine,
  robot: FaRobot,

  // UI / Contact / Misc
  envelope: FaEnvelope,
  linkedin: FaLinkedin,
  mapPin: FaMapMarkerAlt,
  download: FaDownload,
  externalLink: FaExternalLinkAlt,
  arrowUp: FaArrowUp,
  arrowRight: FaArrowRight,
  chevronDown: FaChevronDown,
  checkCircle: FaCheckCircle,
  paperPlane: FaPaperPlane,
  bars: FaBars,
  close: FaTimes,
  eye: FaEye,
  calendar: FaCalendarAlt,
}
