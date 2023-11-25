import { StaticImageData } from 'next/image';
import {
    html,
    css,
    figma,
    git,
    docker,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    typescript,
    c,
    cpp,
    java,
    rust,
    airBnb
} from './assets';

//Navbar Items
interface NavbarItem{
    label: string;
    page: string;
  }

const navbar_items: Array<NavbarItem> = [
  {
    label: 'Home',
    page: 'home'
  },
  {
    label: 'About',
    page: 'about'
  },
  {
    label: 'Projects',
    page: 'projects'
  },
  {
    label: 'Writeups',
    page: 'writeups'
  },
]
  //Skills
interface SkillItem{
    name: String,
    icon: StaticImageData
}

const skills: Array<SkillItem> = [
    {
        name: "HTML 5",
        icon: html
    },
    {
        name: "CSS 3",
        icon: css
    },
    {
        name: "Tailwindcss",
        icon: tailwind
    },
    {
        name: "Figma",
        icon: figma
    },
    {
        name: "Git",
        icon: git
    },
    {
        name: "Docker",
        icon: docker
    },
    {
        name: "Javascript",
        icon: javascript
    },
    {
        name: "Typescript",
        icon: typescript
    },
    {
        name: "React",
        icon: reactjs
    },
    {
        name: "Node",
        icon: nodejs
    },
    {
        name: "MongoDB",
        icon: mongodb
    },
    {
        name: "C",
        icon: c
    },
    {
        name: "C++",
        icon: cpp
    },
    {
        name: "Java",
        icon: java
    },
    {
        name: "Rust",
        icon: rust
    }
]

interface ProjectItem{
    name: string,
    description: string,
    image: StaticImageData,
    github: string,
    link: string
}

const projects: Array<ProjectItem> = [
    {
        name: "MemPeak",
        description: "A memory profiler written in Rust",
        image: airBnb,
        github: "github_link",
        link: "web app link"
    },
]

export { navbar_items,skills,projects };