import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

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
    tags: ["ReactJS", "Django", "FastAPI", "PostgreSQL", "NodeJS", "Express"],
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
      "/images/projects/TwistaHome.png",
      "/images/projects/TwistaMessages.png",
      "/images/projects/TwistaPrivatePage.png",
      "/images/projects/TwistaFollowing.png",
      "/images/projects/TwistaExplore.png",
    ],
    description:
      "A combination of Instagram and Twitter Social Media Application.",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/twista",
  },
  {
    name: "FinScope",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/FinScopeHome1.png",
      "/images/projects/FinScopeEarningCalendar.png",
      "/images/projects/FinScopeIntraDay.png",
    ],
    description:
      "FinScope is a simple project that contains information about stocks and gives insights from it",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/FinScope/",
  },
  {
    name: "E-Commerce",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioLight.webp",
      "/images/projects/portfolioDark.webp",
    ],
    description: "E-commerce application built using MERN stack",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/MERN-E-Comm/",
  },
  {
    name: "Food Delivery (Spring Boot) (Backend)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description: "Food Delivery Backend built using Spring Boot",
    sourceCodeHref: "https://github.com/AmanPr33tS1ngh/foodDeliverySB/",
  },
];
