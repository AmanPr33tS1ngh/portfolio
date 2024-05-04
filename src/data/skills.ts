import { SiExpress, SiSocketdotio, SiNextdotjs, SiFlask } from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import MySQL from "@/public/icons/mysql.svg";
import djangoSvg from "@/public/icons/django.svg";
import golang from "@/public/icons/golang.svg";
import java from "@/public/icons/java.svg";
import springboot from "@/public/icons/springboot.svg";
import fastapi from "@/public/icons/fastapi.svg";
import websocket from "@/public/icons/websocket.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Go",
        icon: golang,
      },
      {
        name: "Java",
        icon: java,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Django",
        icon: djangoSvg,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
      {
        name: "FastAPI",
        icon: fastapi,
      },
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Websocket",
        icon: websocket,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Spring Boot",
        icon: springboot,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgresql",
        icon: PostgressSvg,
      },
      {
        name: "MySQL",
        icon: MySQL,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
