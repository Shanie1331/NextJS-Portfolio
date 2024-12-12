import {
  AiOutlineAntDesign,
  AiOutlineApi,
  AiOutlineApartment,
  AiFillGolden,
  AiTwotoneSetting,
} from "react-icons/ai";
import { MdArchitecture, MdDeveloperMode, MdLeaderboard } from "react-icons/md";
import {
  FaDatabase,
  FaFigma,
  FaMicrochip,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCircleci,
  SiFastlane,
  SiFirebase,
  SiJirasoftware,
  SiLens,
  SiNextdotjs,
  SiRedux,
  SiTestinglibrary,
  SiZendesk,
} from "react-icons/si";
import {
  TbAlphabetGreek,
  TbBrandJavascript,
  TbBrandMixpanel,
  TbBrandReactNative,
} from "react-icons/tb";
import { IProject, Service, Skill } from "./types";

import { BsAndroid, BsApple, BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: AiOutlineApartment,
    title: "Leadership And Management",
    about: "Sprint Ceremonies, Technical Documentation, People Management",
  },
  {
    Icon: MdDeveloperMode,
    title: "Cross Platform Mobile Apps",
    about:
      "React Native, TypeScript, Javascript, GraphQL, Firebase, Jest Unit testing",
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
    about:
      "Optimizations, Profiling, Web Vitals, Performance measures, Web Security",
  },
];

export const languages: Skill[] = [
  {
    Icon: TbBrandReactNative,
    name: "React Native",
    level: "90",
  },
  {
    Icon: FaReact,
    name: "React",
    level: "90",
  },
  {
    Icon: FaNodeJs,
    name: "Node",
    level: "60",
  },
  {
    Icon: SiNextdotjs,
    name: "Next",
    level: "70",
  },
  {
    Icon: TbBrandJavascript,
    name: "Javascript",
    level: "80",
  },
  {
    Icon: FaDatabase,
    name: "MongoDB & MYSQL",
    level: "65",
  },
  {
    Icon: SiRedux,
    name: "Redux",
    level: "90",
  },
  {
    Icon: MdArchitecture,
    name: "Architecture & Design patterns",
    level: "75",
  },
  {
    Icon: MdLeaderboard,
    name: "Leadership and Management",
    level: "85",
  },
  {
    Icon: SiTestinglibrary,
    name: "Test Driven Development",
    level: "85",
  },
  {
    Icon: FaMicrochip,
    name: "Micro FrontEnd Arch.",
    level: "75",
  },
  {
    Icon: SiFirebase,
    name: "Firebase & Realtime databse",
    level: "75",
  },
  {
    Icon: TbAlphabetGreek,
    name: "AB Testing",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsAndroid,
    name: "Android Studio",
    level: "85",
  },
  {
    Icon: BsApple,
    name: "xCode",
    level: "85",
  },
  {
    Icon: FaFigma,
    name: "Figma",
    level: "75",
  },
  {
    Icon: SiCircleci,
    name: "Circle CI",
    level: "75",
  },
  {
    Icon: SiJirasoftware,
    name: "JIRA",
    level: "90",
  },
  {
    Icon: SiFastlane,
    name: "Fastlane",
    level: "80",
  },
  {
    Icon: TbBrandMixpanel,
    name: "Mixpanel",
    level: "60",
  },
  {
    Icon: SiZendesk,
    name: "Zendesk",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Rudderstack",
    level: "45",
  },
  {
    Icon: SiLens,
    name: "Lens",
    level: "40",
  },
];

export const projects: IProject[] = [
  {
    name: "COE [HVAC, IOT] (Freelance)",
    description:
      "The COE (HVAC) app features a contemporary look and feel that allows homeowners to control their Infinity system remotely. The app features an enhanced homeowner experience, improved functionality and increased connectivity performance between the mobile device and their Infinity home comfort system. In addition, homeowners will be able to learn more about the air quality around their home, including a snapshot of various pollutants levels and the Air Quality Index in the atmosphere near them.",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["expo", "react native", "react"],
    key_techs: [
      "Expo",
      "React Native",
      "React",
      "Rtk-query",
      "React Testing Lib",
      "Jest",
      "Nx",
      "React Native Web",
      "Bluetooth",
      "Wifi",
    ],
  },
  {
    name: "Trader (Freelance)",
    description:
      "We developed a trading application for Over-the-Counter (OTC) derivatives contracts and forex spot markets. Built as a cross-platform app using React Native Expo for seamless functionality on iOS and Android. Used React and Tailwind for dynamic and responsive user interfaces. Used TypeScript to ensure type safety and maintainable code. Used RxJS to handle complex asynchronous data streams, enabling real-time trading data updates. Used Node.js and Express to build a scalable and efficient backend. Used Jest for comprehensive unit and integration testing. Used Appium for end-to-end testing, ensuring a flawless mobile user experience. Integrated Firebase for analytics to track user behavior and system performance. Integrated ChartIQ to provide professional-grade, interactive financial charts for traders. Integrated Sentry for monitoring and logging, enabling quick detection and resolution of issues. Delivered real-time data streaming for trading updates. Empowered traders with Interactive advanced financial charting capabilities. Designed a scalable system to accommodate future enhancements and evolving market needs with feature toggles. Ensured system reliability and stability through comprehensive testing and monitoring.",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["expo", "react native", "react"],
    key_techs: [
      "Expo",
      "React Native",
      "React",
      "Redux-toolkit",
      "React Testing Lib",
      "Jest",
      "RxJS",
      "Node",
      "Express",
    ],
  },
  {
    name: "Orange Health App",
    description:
      "Re-Architect Whole App · Design System Library Implementation · App Profiling  · Bundle Size reduction by half · Feature toggling · Store Management and Migration · CI/CD Pipeline Setup · Publishing iOS & Android Apps ·Test Driven Development",
    image_path: "/images/oh.png",
    deployed_url:
      "https://play.google.com/store/apps/details?id=in.orangehealth.patient&hl=en_IN&gl=US",
    github_url: "",
    category: ["react native", "react"],
    key_techs: [
      "React Native",
      "React",
      "Redux-toolkit",
      "React Testing Lib",
      "Jest",
      "Python",
    ],
  },
  {
    name: "Orange Health Web",
    image_path: "/images/oh.png",
    deployed_url: "https://www.orangehealth.in/",
    github_url: "",
    category: ["react", "next"],
    description:
      "Microfrontends Architecture · Design System Library Implementation · Feature toggling · SEO Enhancements · Web Vitals improvement",
    key_techs: [
      "React",
      "Next",
      "TypeScript",
      "Redux-toolkit",
      "React Testing Lib",
      "Jest",
    ],
  },
  {
    name: "Orange Health for Doctors",
    description: "Application maintenance and support",
    image_path: "/images/oh.png",
    deployed_url:
      "https://play.google.com/store/apps/details?id=in.orangehealth.patient&hl=en_IN&gl=US",
    github_url: "",
    category: ["react native"],
    key_techs: ["React Native"],
  },
  {
    name: "Yara Connect",
    image_path: "/images/oh.png",
    deployed_url:
      "https://play.google.com/store/apps/details?id=com.yara.connect.prod&hl=en&gl=US",
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
      "Saga",
    ],
  },

  {
    name: "Yara Bodega",
    image_path: "/images/oh.png",
    deployed_url: "https://yarabodega.com/",
    github_url: "",
    category: ["react native", "node", "react"],
    description: "A platform for retailers and farmers to connect",
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
      "Leading global provider of differentiated electronic instruments and electromechanical devices",
    key_techs: [
      "React",
      "Redux",
      "Sitecore",
      "Jquery",
      "Bootstrap",
      "Javascript",
      "c#",
    ],
  },
  {
    name: "Maritime",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react native", "react"],
    description: "New app for the global marine community",
    key_techs: ["React Native", "React", "Redux", "Axios", "Node", "Bootstrap"],
  },
  {
    name: "Dinamalar Fantasy",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description: "Online Cricket Fantasy for Tamil cricket enthusiasts",
    key_techs: ["React", "Redux", "API", "Sass", "Bootstrap"],
  },
  {
    name: "Yahoo Fantasy",
    image_path: "/images/oh.png",
    deployed_url: "",
    github_url: "",
    category: ["react"],
    description: "Online Cricket Fantasy for Indian cricket enthusiasts",
    key_techs: ["React", "Redux", "API", "Sass", "Bootstrap"],
  },
];
