import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import WhatIBuild from '../components/build/WhatIBuild'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Education from '../components/education/Education'
import Achievements from '../components/achievements/Achievements'
import Resume from '../components/resume/Resume'
import Contact from '../components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIBuild />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Resume />
      <Contact />
    </>
  )
}
