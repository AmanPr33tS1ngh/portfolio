import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Twista",
    href: "/projects",
    tags: ["ReactJS", "TailwindCSS", "Django", "Websockets", "PostgreSQL"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "FinScope",
    href: "/projects",
    tags: [
      "ReactJS",
      "TailwindCSS",
      "Flask",
      "Financial Modelling Prep APIs",
      "ApexCharts",
      "Pandas",
      "Numpy",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "E-Commerce",
    href: "/projects",
    tags: ["ReactJS", "Express", "NodeJS", "MongoDB"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Twista",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/",
    liveWebsiteHref: "https://jsontree.vercel.app",
  },
  {
    name: "FinScope",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "Keep track of projects and tasks in different categories. Drag and drop card from tables. Assign user and priority to task and many more features. This app is made using Reactjs, Typescript, Tailwindcss and React-beautiful-dnd library.",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/",
    liveWebsiteHref: "https://kannban-board.vercel.app",
  },
  {
    name: "E-Commerce",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Many short and fun games using Reactjs, Typescript and Tailwindcss with collaboration with other developers",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/",
    liveWebsiteHref: "https://manygames.vercel.app",
  },
  {
    name: "Food Delivery (Spring Boot)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description: "My personal portfolio website made using Springboot",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
