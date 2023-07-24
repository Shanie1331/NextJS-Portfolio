import { AiOutlineAntDesign, AiOutlineApi, AiOutlineApartment, AiFillGolden, AiTwotoneSetting } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: AiOutlineApartment,
    title: "Leadership And Management",
    about: "Sprint Ceremonies, Documentation, People Management",
  },
  {
    Icon: MdDeveloperMode,
    title: "Cross Platform Mobile Apps",
    about: "React Native, TypeScript, GraphQL, Firebase, Jest, RTL",
  },
  {
    Icon: AiOutlineApi,
    title: "FullStack Development ",
    about: "FE heavy, Node, MongoDB, MYSQL, GraphQL, Jest",
  },
  {
    Icon: AiFillGolden,
    title: "Architecture  & Design Patterns",
    about: "Micro Front-end, Design System, HLD, LLD, Design Patterns",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Testing, Monitoring & Scaling",
    about: "AB, Mock, API and Snapshot Testing, Mixpanel, Sentry, BugSnag",
  },
  {
    Icon: AiTwotoneSetting,
    title: "Maintenance & Security",
    about: "Optimizations, Profiling, Web Vitals, Performance measures, Web Security",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Node",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB & MYSQL",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Architecture & Design patterns",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Leadership and Management",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Test Driven Development",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Micro FrontEnd Arch.",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase & Real time databse",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "AB Testing",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Android Studio",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "xCode",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Circle CI",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "JIRA",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Fastlane",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Mixpanel",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Rudderstack",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Zendesk",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Lens",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "Orange Health App",
    description:
      "Re-Architect Whole App · Design System Library Implementation · App Profiling  · Bundle Size reduction by half · Feature toggling · Store Management and Migration · CI/CD Pipeline Setup · Publishing iOS & Android Apps ·Test Driven Development",
    image_path: "/images/oh.png",
    deployed_url: "https://play.google.com/store/apps/details?id=in.orangehealth.patient&hl=en_IN&gl=US",
    github_url: "",
    category: ["react native", "react"],
    key_techs: ["React Native", "React", "Redux-toolkit", "React Testing Lib", "Jest", "Python"],
  },
  {
    name: "Orange Health Web",
    image_path: "/images/oh.png",
    deployed_url: "https://www.orangehealth.in/",
    github_url: "",
    category: ["react", "next"],
    description:
      "Microfrontends Architecture · Design System Library Implementation · Feature toggling · SEO Enhancements · Web Vitals improvement",
    key_techs: ["React", "Next", "TypeScript", "Redux-toolkit", "React Testing Lib", "Jest"],
  },
  { 
    name: "Orange Health for Doctors",
    description:
      "Application maintenance and support",
    image_path: "/images/oh.png",
    deployed_url: "https://play.google.com/store/apps/details?id=in.orangehealth.patient&hl=en_IN&gl=US",
    github_url: "",
    category: ["react native"],
    key_techs: ["React Native"],
  },
  {
    name: "Yara Connect",
    image_path: "/images/oh.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.yara.connect.prod&hl=en&gl=US",
    github_url: "",
    category: ["react native", "node", "mongo", "react"],
    description:
      "A reward-based loyalty program for Yara subdealers. Scan and earn points, Convert points to reward & Get rewards or redeem for cash",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
      "Saga"
    ],
  },

  {
    name: "Yara Bodega",
    image_path: "/images/oh.png",
    deployed_url: "https://yarabodega.com/",
    github_url: "",
    category: ["react native", "node", "react"],
    description:
      "A platform for retailers and farmers to connect",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap", "Saga"],
  },

  {
    name: "UEFA App",
    image_path: "/images/oh.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.uefa.ucl",
    github_url: "",
    category: ["react native", "react"],
    description:
      "Get unrivalled coverage of Europe's ultimate club football competition. The official UEFA Champions League app brings you the latest soccer news, scores, draws, live coverage, next-day video highlights and our free Fantasy Football game.",
    key_techs: ["React", "Django", "Django REST API"],
  },
  {
    name: "UEFA Web",
    image_path: "/images/oh.png",
    deployed_url: "https://gaming.uefa.com/en/uefachampionsleague",
    github_url: "",
    category: ["react"],
    description:
      "Get unrivalled coverage of Europe's ultimate club football competition. The official UEFA Champions League web brings you the latest soccer news, scores, draws, live coverage, next-day video highlights and our free Fantasy Football game.",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "UEL",
    image_path: "/images/oh.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.uefa.uel",
    github_url: "",
    category: ["react native", "react"],
    description:
      "Get unrivalled coverage of the UEFA Europa League and UEFA Europa Conference League with the competitions' official app. We'll bring you the latest football news, live coverage, match highlights and much more.",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    name: "FIFA",
    image_path: "/images/oh.png",
    deployed_url: "!#",
    github_url: "",
    category: ["react"],
    description:
      "Football Fantasy for the Women's World cup on the main website",
    key_techs: ["React", "Redux", "Axios", "Bootstrap", "Thunk"],
  },
  {
    name: "Ametek",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "https://www.ametek.com/",
    category: ["react"],
    description:
      'Leading global provider of differentiated electronic instruments and electromechanical devices',
    key_techs: [
      "React",
      "Redux",
      "Sitecore",
      "Jquery",
      "Bootstrap",
      "Javascript",
      "c#"
    ],
  },
  {
    name: "Maritime",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react native", "react"],
    description:
      "New app for the global marine community",
    key_techs: ["React Native", "React", "Redux", "Axios", "Node", "Bootstrap"],
  },
  {
    name: "Dinamalar Fantasy",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description:
      "Online Cricket Fantasy for Tamil cricket enthusiasts",
    key_techs: ["React", "Redux", "API", "Sass", "Bootstrap"],
  },
  {
    name: "Yahoo Fantasy",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description:
      "Online Cricket Fantasy for Indian cricket enthusiasts",
    key_techs: ["React", "Redux", "API", "Sass", "Bootstrap"],
  },
];
