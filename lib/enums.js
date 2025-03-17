
//icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]
export const stats = [
    {
        num: 5,
        text: "Month of experience",
    },
    {
        num: 2,
        text: "Project completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 50,
        text: "Code commits",
    },
]

export const services = [
    {
        num: '01',
        title: "Web Development",
        description: "Web development involves creating and maintaining websites for functionality.",
        path: '',
    },
    {
        num: '02',
        title: "UX/UI Design",
        description: "UX/UI Design focuses on crafting intuitive, engaging user interfaces and experiences for digital products.",
        path: '',
    },
    // {
    //     num: '03',
    //     title: "Logo Design",
    //     description: "Logo Design involves creating visually distinctive symbols that represent a brand's identity and values.",
    //     path: '',
    // },
    // {
    //     num: '04',
    //     title: "SEO",
    //     description: "SEO improves website visibility and rankings on search engines through optimized content and keywords.",
    //     path: '',
    // },
]

//about data
export const about =
{
    title: "About me",
    description: "This information provides details about my contact methods for convenient communication.",
    infor: [
        {
            fieldName: "Name",
            fieldValue: "Tanapol Chaijaroen",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+66) 969 565 976",
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Month",
        },
        {
            fieldName: "Instargram",
            fieldValue: "_song.tc",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Thailand",
        },
        {
            fieldName: "Email",
            fieldValue: "Tanapol.Chaijaroen@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Thailand, English",
        },
    ]
}

//experience data
export const experience =
{
    icon: "icon experience",
    title: "My experience",
    description: "My experience in developing both front-end and back-end of websites.",
    items: [
        {
            company: "Freelance",
            position: "Front End Development",
            duration: "2022 - Present",
        },
        {
            company: "Project LAB",
            position: "Front-end Deverloper Intern",
            duration: "Summer 2022",
        },

    ]
}

//education data
export const education =
{
    icon: "icon education",
    title: "My education",
    description: "This information pertains to my education and academic qualifications, which have been fundamental in shaping my career and skills.",
    items: [
        {
            instituion: "King Mongkut's Institute of Technology Ladkrabang",
            degree: "Engineering Education",
            duration: "2021 - Present",
        },
    ]
}

//skill data
export const skills =
{
    title: "My skills",
    description: "All of this information reflects my experience and skills accumulated from my work in web design and development.",
    skillList: [
        {
            icons: <FaHtml5 />,
            name: "html 5",
        },
        {
            icons: <FaCss3 />,
            name: "css 3",
        },
        {
            icons: <FaJs />,
            name: "javaScript",
        },
        {
            icons: <FaReact />,
            name: "react.js",
        },
        {
            icons: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icons: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icons: <FaNodeJs />,
            name: "node.js",
        },
        {
            icons: <FaFigma />,
            name: "figma",
        },
    ]
}
//project data
export const projects =[
    {
        num: "01",
        category: "Font-end",
        title: "project 1",
        description: "This project involved creating a Mobile application according to the specified design.",
        stack:[
            {
                name: "Next.js"
            },
            {
                name: "React"
            },
            {
                name: "Javascript"
            },
        ],
        image :"/assets/work/project3.png",
        live :"",
        github:"",
    },
    {
        num: "02",
        category: "Font-end",
        title: "project 3",
        description: "This project involved creating a Mobile application according to the specified design.",
        stack:[
            {
                name: "Expo"
            },
            {
                name: "React Native"
            },
        ],
        image :"/assets/work/Project4.png",
        live :"",
        github:"",
    },
    {
        num: "03",
        category: "Font-end",
        title: "project 2",
        description: "This project involved updating the website page from its old design to a new one according to the specified requirements.",
        stack:[
            {
                name: "next.js"
            },
            {
                name: "tailwind.css"
            },
            {
                name: "Javascript"
            },
        ],
        image :"/assets/work/work02.png",
        live :"https://www.meefah.in/",
        github:"",
    },
    {
        num: "04",
        category: "UX/UI Design",
        title: "project 3",
        description: "Design a website according to requirements with responsive support.",
        stack:[
            {
                name: "Figma"
            },
        ],
        image :"/assets/work/job1.jpg",
        live :"",
        github:"",
    },
]

//content data
export const infor =[
    {
        icon : <FaPhoneAlt />,
        title :"Phone",
        description :"(+66)969 565 976"
    },
    {
        icon : <FaEnvelope />,
        title :"Email",
        description :"Tanapol.chaijaroen@gmail.com"
    },
    {
        icon : <FaMapMarkedAlt />,
        title :"Address",
        description :"Khok Pip, Si Mahosot, Prachin Buri 25190"
    },
]