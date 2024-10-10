"use client"
import { motion } from 'framer-motion'
import project1 from "../assets/p1.png"
import project2 from "../assets/p2.png"
import project3 from "../assets/p3.png"
import project4 from "../assets/p4.png"
import project5 from "../assets/p5.png"
import Image from 'next/image'

const projects = [
    {
        title: "Food Leftover Website",
        desc: "A food leftover website connects people or businesses with surplus food to those who need or want it, helping reduce food waste. Users can post or browse listings of excess food, promoting sustainability and addressing food insecurity by redistributing meals that would otherwise be wasted.",
        devStack: "HTML, CSS, JAVASCRIPT",
        link: "https://muzaffar401.github.io/food.leftover.github.io/",
        git: "https://github.com/muzaffar401/food.leftover.github.io.git",
        src: project1
    },
    {
        title: "Metric Conversion Website",
        desc: "A metric conversion website helps users convert between various units of measurement like length, weight, and volume. It provides tools for converting between metric and imperial systems for tasks such as cooking or engineering. The site offers a quick, accurate, and convenient way to handle everyday conversions.",
        devStack: "HTML, CSS, JAVASCRIPT",
        link: "https://muzaffar401.github.io/metric_conversion.github.io/",
        git: "https://github.com/muzaffar401/metric_conversion.github.io.git",
        src: project2
    },
    {
        title: "Lifelink Website",
        desc: "A LifeLink website connects individuals with essential health and emergency services. It provides tools for tracking medical information, accessing real-time health data, and receiving emergency alerts. Designed for quick communication, it ensures that users can easily contact healthcare providers or emergency responders, enhancing personal safety and well-being.",
        devStack: "HTML, CSS, JAVASCRIPT",
        link: "https://lifelink-mu.vercel.app/",
        git: "https://github.com/muzaffar401/Lifelink.github.io.git",
        src: project3
    },
    {
        title: "Soccer Club Website",
        desc: "A soccer club website provides fans and members with information about the club's teams, players, schedules, and events. It features updates on match results, news, and player stats, along with ticket sales and membership options. The site serves as a hub for fans to stay connected with their favorite club and engage with the soccer community",
        devStack: "HTML, CSS, JAVASCRIPT",
        link: "https://muzaffar401.github.io/soccerverse.github.io/",
        git: "https://github.com/muzaffar401/soccerverse.github.io.git",
        src: project4
    },
    {
        title: "Space Portfolio Website",
        desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum est consequatur architecto distinctio laboriosam, ipsum officiis necessitatibus dignissimos nobis exercitationem, maxime voluptatibus deserunt iste tempore dolorum numquam tempora sequi saepe!",
        devStack: "NEXT JS, TAILWIND CSS",
        link: "https://space-portfolio-gilt-beta.vercel.app/",
        git: "https://github.com/muzaffar401/space-portfolio.git",
        src: project5
    },
]

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-16 mt-52' id='portfolio'>

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12'>
                Selected <span className='text-orange-400'>Projects</span>
            </h1>

            <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                    >

                        <div className='space-y-2 max-w-[550px] '>
                            <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                            <h2 className='text-4xl'>{project.title}</h2>
                            <p className='text-lg text-white/70 break-words p-2'>{project.desc}</p>
                            <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>

                            <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                <a href={project.link} className='mr-6'>Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className='flex justify-center items-center'>
                            <Image
                                src={project.src}
                                alt={project.title}
                                className='h-auto  w-auto object-cover border border-gray-700 rounded'
                            />
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio