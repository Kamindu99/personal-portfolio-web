import { IconType } from "react-icons";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAngular, FaDocker, FaAws, FaPython
} from "react-icons/fa";

import {
    SiTypescript, SiJavascript, SiNextdotjs, SiRedux, SiMongodb, SiMysql,
    SiExpress, SiGooglecloud, SiJira, SiTrello, SiFigma, SiGitlab,
    SiBitbucket, SiPostman, SiSwagger, SiCpanel, SiSass
} from "react-icons/si";

type Skill = {
    name: string;
    icon: IconType;
    color: string;
};

const skills: Skill[] = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },

    { name: "React.js", icon: FaReact, color: "#61DBFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },

    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },

    { name: "HTML", icon: FaHtml5, color: "#E34C26" },
    { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
    { name: "SCSS", icon: SiSass, color: "#CD6799" },

    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },

    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },

    { name: "Docker", icon: FaDocker, color: "#0db7ed" },

    { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    { name: "Bitbucket", icon: SiBitbucket, color: "#2684FF" },

    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Trello", icon: SiTrello, color: "#0079BF" },

    { name: "Figma", icon: SiFigma, color: "#F24E1E" },

    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },

    { name: "cPanel", icon: SiCpanel, color: "#FF6C2C" },

    { name: "Python", icon: FaPython, color: "#3776AB" }
];

export default skills;