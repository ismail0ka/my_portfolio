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
    chatapp,
    event_ticketing
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
    link?: string
}

const projects: Array<ProjectItem> = [
    {
        name: "Realtime Chat App",
        description: "A realtime chat app built on Django.",
        image: chatapp,
        github: "https://github.com/ismail0ka/Django_realtime_chat",
    },
    {
        name: "DEvent",
        image: event_ticketing,
        description: "A decentralized event ticketing platform where users can buy, sell, and transfer event tickets securely using blockchain technology.",
        github: "https://github.com/ismail0ka/DEvent"
    },
]

export { navbar_items,skills,projects };