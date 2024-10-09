import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiFigma, SiTailwindcss } from 'react-icons/si';
import Image from 'next/image';


import nextjsIcon from '../assets/nextjs.svg';

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3 size={140} />, label: "CSS" },
    { icon: <FaReact size={110} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <SiTypescript size={140} />, label: "TypeScript" },
    { icon: <SiFigma size={140} />, label: "Figma" },
    { icon: <SiTailwindcss size={140} />, label: "Tailwind CSS" },
    {
        icon: (
            <Image 
                src={nextjsIcon} 
                alt="Next.js" 
                className="w-[110px] h-[110px] lg:w-[140px] lg:h-[140px]"
            />
        ),
        label: "Next.js"
    }
    
];

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 overflow-x-hidden'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
