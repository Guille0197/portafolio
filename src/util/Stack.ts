// Frontend
import AngularIcon from "@/components/icons/stack/frontend/Angular.astro";
import CSSIcon from "@/components/icons/stack/frontend/CSS.astro";
import HtmlIcon from "@/components/icons/stack/frontend/HTML.astro";
import IonicIcon from "@/components/icons/stack/frontend/Ionic.astro";
import JavaScriptIcon from "@/components/icons/stack/frontend/JavaScript.astro";
import ReactIcon from "@/components/icons/stack/frontend/React.astro";
import ReactNativeIcon from "@/components/icons/stack/frontend/ReactNative.astro";
import TailwindIcon from "@/components/icons/stack/frontend/Tailwind.astro";
import TypeScriptIcon from "@/components/icons/stack/frontend/TypeScript.astro";
// Backend
import NextJSIcon from "@/components/icons/stack/backend/NextJS.astro";
import NodeJSIcon from "@/components/icons/stack/backend/NodeJS.astro";
import ExpressIcon from "@/components/icons/stack/backend/ExpressJS.astro";
import JavaIcon from "@/components/icons/stack/backend/Java.astro";
import SpringBootIcon from "@/components/icons/stack/backend/SpringBoot.astro";
import CSharpIcon from "@/components/icons/stack/backend/CSharp.astro";
import PostgreSQLIcon from "@/components/icons/stack/backend/PostgreSQL.astro";
import MongoDBIcon from "@/components/icons/stack/backend/MongoDB.astro";
import MySQLIcon from "@/components/icons/stack/backend/MySQL.astro";
// Tools
import FigmaIcon from "@/components/icons/stack/tools/Figma.astro";
import GitIcon from "@/components/icons/stack/tools/Git.astro";
import GitHubIcon from "@/components/icons/stack/tools/GitHub.astro";
import VSCodeIcon from "@/components/icons/stack/tools/VSCode.astro";
import NPMIcon from "@/components/icons/stack/tools/NPM.astro";
import WordPressIcon from "@/components/icons/stack/tools/WordPress.astro";
import WarpTerminalIcon from "@/components/icons/stack/tools/Warp.astro";
import PNPMIcon from "@/components/icons/stack/tools/PNPM.astro";
import VercelIcon from "@/components/icons/stack/tools/Vercel.astro";
// Learning
import PythonIcon from "@/components/icons/stack/learning/Python.astro";
import AstroIcon from "@/components/icons/stack/learning/Astro.astro";
import AWSIcon from "@/components/icons/stack/learning/AWS.astro";
import AWSLambdaIcon from "@/components/icons/stack/learning/AWSLambda.astro";
import DockerIcon from "@/components/icons/stack/learning/Docker.astro";

export const MY_STACK = {
  frontend: [
    { name: "HTML", icon: HtmlIcon },
    { name: "CSS", icon: CSSIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React.js", icon: ReactIcon },
    { name: "React Native", icon: ReactNativeIcon },
    { name: "Angular", icon: AngularIcon },
    { name: "Ionic", icon: IonicIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
  ],
  backend: [
    { name: "Next.js", icon: NextJSIcon },
    { name: "NodeJS", icon: NodeJSIcon },
    { name: "ExpressJS", icon: ExpressIcon },
    { name: "Java", icon: JavaIcon },
    { name: "Spring Boot", icon: SpringBootIcon },
    { name: "C#", icon: CSharpIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "MySQL", icon: MySQLIcon },
  ],
  tools: [
    { name: "Git", icon: GitIcon },
    { name: "GitHub", icon: GitHubIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "VSCode", icon: VSCodeIcon },
    { name: "Warp Terminal", icon: WarpTerminalIcon },
    { name: "WordPress", icon: WordPressIcon },
    { name: "Vercel", icon: VercelIcon },
    { name: "NPM", icon: NPMIcon },
    { name: "PNPM", icon: PNPMIcon },
  ],
  learning: [
    { name: "Python", icon: PythonIcon },
    { name: "Astro", icon: AstroIcon },
    { name: "AWS", icon: AWSIcon },
    { name: "AWS Lambda", icon: AWSLambdaIcon },
    { name: "Docker", icon: DockerIcon },
  ],
};
