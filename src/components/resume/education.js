import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './resumeCard';

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row  gap-20' >
            {/* part one */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2001 - 2023</p>
                <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard 
                title="BSc- Water Resources Management and Hydrology"
                subTitle="Federal University of Agriculture Abeokuta (April 2018 -November 2023)"
                result="3.20/5.0"
                des="Achieved Second class Lower in Hydrology. 
                "
            />
            <ResumeCard
                title="Senior Secondary School Education"
                subTitle="Evaton comprehensive Secondary school. (2012 - 2015)"
                result="(SSCE)"
                
                />
            </div>
            </div>
            {/* part Two */}
            <div>
            <div className="py-6 lgl:py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
                <h2 className="text-3xl md:text-4xl font-bold">Proffesional Experience</h2>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-[700px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard
                title="Front End Developer"
                subTitle="Front End Developer | Next-gen Tech | Abeokuta, Ogun State."
                des="As a member of Google developer students club now GDC, i was involved in creating user friendly website designs and redesigns focusing on performance optimization and responsiveness, critical for developing applications and also Regularly updated and expanded skills by learning new frameworks, tools, and technologies."
                />
                <ResumeCard
                title="FullStack Developer"
                result="March 2024- Present"
                subTitle="Full Stack Developer | Shariz Initiatives, Lagos State."
                des="Built Complex Data Dashboards Designed and developed dashboards for various industries, allowing users to interact with large datasets. Created interactive web applications using React.js and Redux for clients in various industries,
                Worked closely with backend developers, UX designers, and project managers to build solutions that required efficient data handling and presentation."
                />
            
            </div>
            </div>
            </motion.div>
    )
}

export default Education;