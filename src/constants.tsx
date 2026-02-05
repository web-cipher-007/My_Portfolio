import React, { useId } from 'react';
import type { Project, Blog, Certification } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAndroid, faHtml5, faCss3Alt, faJsSquare, faPython, faLinux 
} from '@fortawesome/free-brands-svg-icons';
import { faFlutter } from '@fortawesome/free-brands-svg-icons';
import { 
    faCode, faShieldHalved, faTerminal, faNetworkWired, faFileCode, 
    faLayerGroup, faC, faMagnifyingGlassChart, faUserSecret, 
    faShieldVirus, faLock, faDiagramProject, faEthernet, 
    faFileWaveform, faServer
} from '@fortawesome/free-solid-svg-icons';

export const AndroidIcon = () => <FontAwesomeIcon icon={faAndroid} className="text-3xl text-green-500" />;
const WebDevIcon = () => <FontAwesomeIcon icon={faCode} className="text-3xl text-blue-500" />;
export const SecurityIcon = () => <FontAwesomeIcon icon={faShieldHalved} className="text-3xl text-red-500" />;
const ProgrammingIcon = () => <FontAwesomeIcon icon={faTerminal} className="text-3xl text-yellow-500" />;
export const NetworkIcon = () => <FontAwesomeIcon icon={faNetworkWired} className="text-3xl text-indigo-500" />;
export const LinuxIcon = () => <FontAwesomeIcon icon={faLinux} className="text-3xl text-gray-800 dark:text-white" />;

export const KotlinIcon = () => (
    <img src="/icons/kotlin.png" alt="Kotlin Icon" className="w-10 h-10" />
);
const XmlIcon = () => <FontAwesomeIcon icon={faFileCode} className="text-4xl text-orange-500" />;

export const JetpackIcon = () => {
    const id = useId();
    const gradA = `jetpack_a_${id}`;
    const gradB = `jetpack_b_${id}`;
    const gradC = `jetpack_c_${id}`;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-9 h-9">
            <defs>
                <linearGradient id={gradA} x1="128" y1="256" x2="128" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#00c853"/>
                    <stop offset="1" stopColor="#00e676"/>
                </linearGradient>
                <linearGradient id={gradB} x1="192" y1="192" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#2962ff"/>
                    <stop offset="1" stopColor="#448aff"/>
                </linearGradient>
                <linearGradient id={gradC} x1="192" y1="64" x2="64" y2="192" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#2979ff"/>
                    <stop offset="1" stopColor="#448aff"/>
                </linearGradient>
            </defs>
            <path fill={`url(#${gradA})`} d="M128 0l128 64v128l-128 64L0 192V64L128 0z"/>
            <path fill={`url(#${gradB})`} d="M128 0l128 64v128l-128 64L0 192V64L128 0z"/>
            <path fill={`url(#${gradC})`} d="M128 0l128 64v128l-128 64L0 192V64L128 0z"/>
            <path fill="#fff" fillOpacity=".5" d="M128 32l96 48v96l-96 48-96-48v-96l96-48z"/>
            <path fill="#fff" d="M128 64l64 32v64l-64 32-64-32v-64l64-32z"/>
        </svg>
    );
};

export const FlutterIcon = () => <FontAwesomeIcon icon={faFlutter} className="text-4xl text-sky-600" />;

const MvvmIcon = () => <FontAwesomeIcon icon={faLayerGroup} className="text-4xl text-teal-500" />;
const HtmlIcon = () => <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-600" />;
const CssIcon = () => <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-blue-600" />;
const JsIcon = () => <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-yellow-500" />;
export const PythonIcon = () => <FontAwesomeIcon icon={faPython} className="text-4xl text-yellow-400" />;
const CppIcon = () => <FontAwesomeIcon icon={faC} className="text-4xl text-blue-700" />;
const PowershellIcon = () => <FontAwesomeIcon icon={faTerminal} className="text-4xl text-blue-400" />;

export const AndroidStudioIcon = () => (
    <img src="/icons/android-studio.png" alt="Android Studio Icon" className="w-10 h-10" />
);

export const BurpSuiteIcon = () => (
    <img src="/icons/burp-pro.ico" alt="Burp Suite Icon" className="w-8 h-8" />
);

export const VulnerabilityIcon = () => <FontAwesomeIcon icon={faMagnifyingGlassChart} className="text-4xl text-red-500" />;
export const PenetrationIcon = () => <FontAwesomeIcon icon={faUserSecret} className="text-4xl text-red-500" />;
export const WebAppSecurityIcon = () => <FontAwesomeIcon icon={faShieldVirus} className="text-4xl text-red-500" />;
const HardeningIcon = () => <FontAwesomeIcon icon={faLock} className="text-4xl text-red-500" />;

const TcpIpIcon = () => <FontAwesomeIcon icon={faDiagramProject} className="text-4xl text-indigo-500" />;
const OsiIcon = () => <FontAwesomeIcon icon={faLayerGroup} className="text-4xl text-indigo-500" />;
const IpIcon = () => <FontAwesomeIcon icon={faEthernet} className="text-4xl text-indigo-500" />;
const PacketAnalysisIcon = () => <FontAwesomeIcon icon={faFileWaveform} className="text-4xl text-indigo-500" />;

const BashIcon = () => <FontAwesomeIcon icon={faTerminal} className="text-4xl text-gray-400" />;
const LinuxAdminIcon = () => <FontAwesomeIcon icon={faServer} className="text-4xl text-gray-400" />;

export const NAME = "Sandesh Poudel";
export const ROLES = [
    "an Android App Developer",
    "a Web Penetration Tester",
    "a Computer Engineering Student"
];
export const INTRO = "I'm an Application Developer and Web Penetration Tester who bridges the gap between building and breaking applications. My expertise in both offensive security and mobile development allows me to engineer robust, secure, and resilient digital experiences from the ground up.";
export const RESUME_URL = "/resume.pdf";
export const EMAIL = "web-cipher-007@proton.me";
export const PHONE_NUMBER = "+977-9864455823";
export const LOCATION = "Kathmandu, Nepal";
export const GITHUB_PROFILE_URL = "https://github.com/web-cipher-007";
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/sandeshpoudel007";
export const X_PROFILE_URL = "https://x.com/_Sandesh_007";
export const FACEBOOK_PROFILE_URL = "https://www.facebook.com/SandeshPoudel007";
export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/sandesh_poudel007";

export const CORE_HERO_ICONS = [
    { id: 'kotlin', component: <KotlinIcon /> },
    { id: 'android-studio', component: <AndroidStudioIcon /> },
    { id: 'flutter', component: <FlutterIcon /> },
    { id: 'android', component: <AndroidIcon /> }
];

export const RANDOMIZABLE_HERO_ICONS = [
    { id: 'python', component: <PythonIcon /> },
    { id: 'pentest', component: <PenetrationIcon /> },
    { id: 'burpsuite', component: <BurpSuiteIcon /> },
    { id: 'network', component: <NetworkIcon /> },
    { id: 'linux', component: <LinuxIcon /> },
    { id: 'vulnerability', component: <VulnerabilityIcon /> },
    { id: 'webappsec', component: <WebAppSecurityIcon /> },
];

export const SKILLS_DATA: { title: string; icon: React.ReactNode; skills: { name: string; icon: React.ReactNode; description: string }[] }[] = [
    {
        title: 'Application Development',
        icon: <AndroidIcon />,
        skills: [
            { name: 'Flutter (Dart)', icon: <FlutterIcon />, description: 'Cross-platform UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.' },
            { name: 'Kotlin', icon: <KotlinIcon />, description: 'Primary language for building robust, modern Android applications. Proficient in coroutines, Flow, and best practices.' },
            { name: 'Jetpack Compose', icon: <JetpackIcon />, description: 'Skilled in using Jetpack Compose for declarative UI development, creating beautiful and interactive UIs with less code.' },
            { name: 'MVVM/MVI Architecture', icon: <MvvmIcon />, description: 'Adept at implementing MVVM for creating scalable, testable, and maintainable Android apps using Architecture Components.' },
        ],
    },
    {
        title: 'Web Development',
        icon: <WebDevIcon />,
        skills: [
            { name: 'HTML', icon: <HtmlIcon />, description: 'Proficient in creating semantic and accessible markup for modern web applications.' },
            { name: 'CSS', icon: <CssIcon />, description: 'Experienced in crafting responsive layouts and custom designs using CSS3, including Flexbox, Grid, and animations.' },
            { name: 'JavaScript', icon: <JsIcon />, description: 'Skilled in modern JavaScript (ES6+) for building interactive and dynamic user experiences.' },
        ],
    },
    {
        title: 'Cybersecurity',
        icon: <SecurityIcon />,
        skills: [
            { name: 'Vulnerability Assessment', icon: <VulnerabilityIcon />, description: 'Identifying and evaluating security weaknesses in systems and applications to prioritize and guide remediation efforts.' },
            { name: 'Penetration Testing', icon: <PenetrationIcon />, description: 'Simulating cyberattacks on networks and applications to find and exploit vulnerabilities before malicious actors do.' },
            { name: 'Web App Security (OWASP)', icon: <WebAppSecurityIcon />, description: 'Applying OWASP Top 10 principles to secure web applications against common threats like XSS, SQLi, and CSRF.' },
            { name: 'System Hardening', icon: <HardeningIcon />, description: 'Configuring operating systems and applications to minimize their attack surface and improve their security posture.' },
        ],
    },
    {
        title: 'Programming',
        icon: <ProgrammingIcon />,
        skills: [
            { name: 'Python', icon: <PythonIcon />, description: 'Using Python for scripting, automation, and developing custom security tools. Familiar with libraries like Requests and Scapy.' },
            { name: 'C / C++', icon: <CppIcon />, description: 'Strong understanding of low-level programming, memory management, and system performance through C/C++.' },
            { name: 'Powershell', icon: <PowershellIcon />, description: 'Leveraging Powershell for automation, task scripting, and system management within Windows environments.' },
        ],
    },
     {
        title: 'Linux',
        icon: <LinuxIcon />,
        skills: [
            { name: 'Bash / Zsh Scripting', icon: <BashIcon />, description: 'Writing powerful shell scripts to automate system administration tasks and streamline workflows in Linux environments.' },
            { name: 'Linux Administration', icon: <LinuxAdminIcon />, description: 'Managing and maintaining Linux systems, including user management, permissions, and service configuration.' },
        ],
    },
    {
        title: 'Networking',
        icon: <NetworkIcon />,
        skills: [
            { name: 'TCP/IP Suite', icon: <TcpIpIcon />, description: 'In-depth knowledge of the TCP/IP protocol suite, covering how data is encapsulated and transmitted across networks.' },
            { name: 'OSI Model', icon: <OsiIcon />, description: 'Understanding the 7 layers of the OSI model to troubleshoot network issues and analyze traffic effectively.' },
            { name: 'IPv4 / IPv6', icon: <IpIcon />, description: 'Proficient with IP addressing, subnetting, and routing for both IPv4 and the newer IPv6 protocols.' },
            { name: 'Packet Analysis', icon: <PacketAnalysisIcon />, description: 'Using tools like Wireshark to capture and analyze network packets for troubleshooting and security analysis.' },
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'Tweetzy',
        description: 'Tweetzy is a modern Android application meticulously engineered with Jetpack Compose for a declarative UI, utilizing MVVM architecture, Dagger-Hilt for Dependency Injection, and Kotlin Coroutines/Flows for a reactive data pipeline, all driven by a Retrofit for API access that performs server-side data filtering via a custom X-JSON-Path header.',
        category: 'Apps',
        image: '/images/projects/tweetzy.png',
        githubUrl: 'https://github.com/web-cipher-007/Tweetzy',
        featured: true,
    },
    {
        title: 'SureSky',
        description: 'SureSky is an android app built with Kotlin (Jetpack Compose) which loads simple weather data from WeatherAPI.',
        category: 'Apps',
        image: '/images/projects/suresky.png',
        githubUrl: 'https://github.com/web-cipher-007/SureSky',
        featured: true,
    },
    {
        title: 'Quotes App',
        description: 'A simple Quotes App made using Jetpack Compose in Kotlin. It displays a list of inspiring quotes, and navigates to a new screen to show the full text in detail.',
        category: 'Apps',
        image: '/images/projects/quotes-app.png',
        githubUrl: 'https://github.com/web-cipher-007/Quotes-App',
        featured: true,
    },
    {
        title: 'QuizApp',
        description: 'An interactive Android quiz application built using Kotlin. It supports multiple categories, tracks user scores, and provides instant feedback on answers.',
        category: 'Apps',
        image: '/images/projects/quiz-app.png',
        githubUrl: 'https://github.com/web-cipher-007/QuizApp',
        featured: true,
    },
    {
        title: 'Rock-Paper-Scissors Game',
        description: 'A classic rock-paper-scissors game built with a clean interface using HTML, CSS, and JavaScript for interactive gameplay.',
        category: 'Web',
        image: '/images/projects/rps-game.png',
        githubUrl: 'https://github.com/web-cipher-007/rock-paper-scissors',
        liveUrl: 'https://web-cipher-007.github.io/rock-paper-scissors/',
    },
    {
        title: 'Instruments Picker',
        description: 'A dynamic web app that allows users to filter musical instruments. Built with JavaScript, combining array methods, DOM manipulation, and event handling.',
        category: 'Web',
        image: '/images/projects/instruments-picker.png',
        githubUrl: 'https://github.com/web-cipher-007/instruments-picker',
        liveUrl: 'https://web-cipher-007.github.io/instruments-picker/',
    },
    {
        title: 'Character Counter',
        description: 'A simple and useful real-time character counter tool created for fun using HTML, CSS, and vanilla JavaScript.',
        category: 'Web',
        image: '/images/projects/char-counter.png',
        githubUrl: 'https://github.com/web-cipher-007/character-counter',
        liveUrl: 'https://web-cipher-007.github.io/character-counter/',
    },
    {
        title: 'Recon-Engine',
        description: 'A powerful and extensible reconnaissance toolkit designed for security professionals to automate information gathering and vulnerability detection.',
        category: 'CyberSecurity',
        image: '/images/projects/recon-engine.png',
        githubUrl: 'https://github.com/web-cipher-007/Recon-Engine',
        liveUrl: 'https://web-cipher-007.github.io/Recon-Engine',
        featured: true,
    },
    {
        title: 'Basic Network Sniffer',
        description: 'A Python-based network packet sniffer that captures and analyzes TCP packets, generating a visual graph of packet flow using Graphviz.',
        category: 'CyberSecurity',
        image: '/images/projects/network-sniffer.png',
        githubUrl: 'https://github.com/web-cipher-007/CodeAlpha_BasicNetworkSniffer',
    },
];

export const BLOGS: Blog[] = [
    {
        title: 'Cracking MongoDB Logins',
        date: 'Jul 2025',
        description: 'A Practical Demonstration of NoSQL Injection',
        linkUrl: 'https://web-cipher.medium.com/cracking-mongodb-logins-with-nosql-injection-a-practical-demonstration-df09c760d8b9',
    },
    {
        title: 'LFI Exploitation',
        date: 'March 2025',
        description: "A Technical Walkthrough of File Inclusion (LFI) Exploit in Hacker101 CTF Challenge",
        linkUrl: 'https://web-cipher.medium.com/a-technical-walkthrough-of-file-inclusion-exploit-in-ctf-challenges-a667ea0add99',
    },
    {
        title: 'JWT Weaknesses Exposed',
        date: 'March 2025',
        description: 'A Practical Walkthrough of a Token Exploitation CTF in picoCTF',
        linkUrl: 'https://web-cipher.medium.com/jwt-weaknesses-exposed-a-practical-walkthrough-of-a-token-exploitation-ctf-b6ed5d8662ed',
    },
    {
        title: 'Disk Image Deep Dive',
        date: 'March 2025',
        description: 'Uncovering Hidden Flags in Digital Forensics',
        linkUrl: 'https://web-cipher.medium.com/disk-image-deep-dive-uncovering-hidden-flags-in-digital-forensics-27e744a38226',
    },
    {
        title: 'Decrypt & Conquer',
        date: 'Feb 2025',
        description: 'Solving the Encrypted File CTF Challenge',
        linkUrl: 'https://web-cipher.medium.com/decryption-successful-0b75ee2f03b9',
    },
    {
        title: 'The Classic Password Puzzle',
        date: 'Feb 2025',
        description: 'A Reverse Engineering Adventure',
        linkUrl: 'https://web-cipher.medium.com/the-classic-password-puzzle-a-reverse-engineering-adventure-108e1e68cba4',
    },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Clifford Chance – Cyber Security Job Simulation',
    issuer: 'Forage',
    date: 'Jun 2025',
    credentialId: 'EeJR3NF4oWrjY5taj',
    image: '/images/certs/clifford-chance.png',
    verifyUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/qbcPPWhE6mhQeKgdy/33CKX5eTKH3dXer7X_qbcPPWhE6mhQeKgdy_vTD3ndYWSdNTh3Tu8_1749992579366_completion_certificate.pdf',
  },
  {
    title: 'Mastercard – Cybersecurity Job Simulation',
    issuer: 'Forage',
    date: 'Jun 2025',
    credentialId: '6fM48ZzgaaHfEGdwY',
    image: '/images/certs/mastercard.png',
    verifyUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mfxGwGDp6WkQmtmTf/vcKAB5yYAgvemepGQ_mfxGwGDp6WkQmtmTf_vTD3ndYWSdNTh3Tu8_1749568832570_completion_certificate.pdf',
  },
  {
    title: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2024',
    credentialId: 'ea5ee001-fe1e-4c00-8adf-5d7a3a5d2295',
    image: '/images/certs/cisco-ctm.png',
    verifyUrl: 'https://www.credly.com/badges/ea5ee001-fe1e-4c00-8adf-5d7a3a5d2295',
  },
  {
    title: 'Endpoint Security',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2024',
    credentialId: '5b3a3c9e-fe4e-47b7-a6f7-82b75e24d4c1',
    image: '/images/certs/cisco-es.png',
    verifyUrl: 'https://www.credly.com/badges/5b3a3c9e-fe4e-47b7-a6f7-82b75e24d4c1',
  },
  {
    title: 'Networking Devices and Initial Configuration',
    issuer: 'Cisco Networking Academy',
    date: 'Jun 2024',
    credentialId: '41eea024-e1da-4c6f-bd6b-8ec17b110361',
    image: '/images/certs/cisco-ndic.png',
    verifyUrl: 'https://www.credly.com/badges/41eea024-e1da-4c6f-bd6b-8ec17b110361',
  },
  {
    title: 'Network Defense',
    issuer: 'Cisco Networking Academy',
    date: 'May 2024',
    credentialId: '947f0465-b0f4-4e92-9875-c22ef47b4437',
    image: '/images/certs/cisco-nd.png',
    verifyUrl: 'https://www.credly.com/badges/947f0465-b0f4-4e92-9875-c22ef47b4437',
  },
  {
    title: 'Hacking Ético – Aprende Hacking con CTFs (Capture The Flag)',
    issuer: 'Udemy',
    date: 'Jan 2024',
    credentialId: 'UC-ad80098a-de62-4eb0-8f2e-c95a5847e900',
    image: '/images/certs/udemy-he.png',
    verifyUrl: 'https://www.udemy.com/certificate/UC-ad80098a-de62-4eb0-8f2e-c95a5847e900/',
  },
  {
    title: 'Mastering Command Injection – The Ultimate Hands-On Course',
    issuer: 'Udemy',
    date: 'Jan 2024',
    credentialId: 'UC-34de91e5-d76b-406e-9c78-4404791a81e3',
    image: '/images/certs/udemy-mci.png',
    verifyUrl: 'https://www.udemy.com/certificate/UC-34de91e5-d76b-406e-9c78-4404791a81e3',
  },
  {
    title: 'Mastering Directory Traversal – The Ultimate Hands-On Course',
    issuer: 'Udemy',
    date: 'Jan 2024',
    credentialId: 'UC-058575eb-d271-4718-ae9c-a8eb02df9dec',
    image: '/images/certs/udemy-mdt.png',
    verifyUrl: 'https://www.udemy.com/certificate/UC-058575eb-d271-4718-ae9c-a8eb02df9dec',
  },
  {
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2023',
    credentialId: 'f6bf8dce-9983-401c-a56a-2cb3b9772d30',
    image: '/images/certs/cisco-eh.png',
    verifyUrl: 'https://www.credly.com/badges/f6bf8dce-9983-401c-a56a-2cb3b9772d30',
  },
  {
    title: 'Front End Web Development – CSS',
    issuer: 'Great Learning',
    date: 'Dec 2023',
    image: '/images/certs/gl-css.png',
    verifyUrl: 'https://www.mygreatlearning.com/certificate/DIVITESJ',
  },
  {
    title: 'Front End Web Development – HTML',
    issuer: 'Great Learning',
    date: 'Dec 2023',
    image: '/images/certs/gl-html.png',
    verifyUrl: 'https://www.mygreatlearning.com/certificate/QDMHYSKW',
  },
  {
    title: 'Introduction to Ethical Hacking',
    issuer: 'Great Learning',
    date: 'Dec 2023',
    image: '/images/certs/gl-ieh.png',
    verifyUrl: 'https://www.mygreatlearning.com/certificate/KRFRCMYC',
  },
  {
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2023',
    credentialId: '37f89eee-c9d4-4baa-81a2-7e796c5e86d9',
    image: '/images/certs/cisco-jca.png',
    verifyUrl: 'https://www.credly.com/badges/37f89eee-c9d4-4baa-81a2-7e796c5e86d9',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Dec 2023',
    credentialId: '655bc902-4d7b-4f63-a6b3-cb89934fcda1',
    image: '/images/certs/cisco-nb.png',
    verifyUrl: 'https://www.credly.com/badges/655bc902-4d7b-4f63-a6b3-cb89934fcda1',
  },
  {
    title: 'Professional Ethical Hacking',
    issuer: 'Code IT',
    date: 'Dec 2023',
    image: '/images/certs/peht.png',
  },
  {
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2023',
    credentialId: '9ec68a51-eed6-4345-af6a-0c80d15d6e74',
    image: '/images/certs/cisco-chb.png',
    verifyUrl: 'https://www.credly.com/badges/9ec68a51-eed6-4345-af6a-0c80d15d6e74',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2023',
    credentialId: 'c2a23c30-c488-4477-bf21-5f2e322fa00b',
    image: '/images/certs/cisco-ics.png',
    verifyUrl: 'https://www.credly.com/badges/c2a23c30-c488-4477-bf21-5f2e322fa00b',
  },
];