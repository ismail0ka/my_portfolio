import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import Image from 'next/image'
import ProjectsSection from '@/components/ProjectsSection'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-4xl'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </main>
  )
}
