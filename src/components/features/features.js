import React from 'react'
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/title';
import Card from './card';

const Features = () => {
    return (
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="features" des="What I do"/>
           <div className='grid grid-cols-1  gap-6 xl:gap-20 md:grid-cols-2 xl:grid-cols-2 '> 
            {/* xl:grid-cols-1, md:grid-cols-1  */}
            <Card 
            title='Graphic Designer'
            des='I possess a creative eye and technical expertise to craft visually compelling designs that communicate messages effectively. my skill set allows me to create logos, marketing materials, web graphics, and brand identities that resonate with target audiences. I excel in bringing concepts to life, balancing aesthetics with functionality. My passion for design is driven by a desire to blend creativity and strategy to solve problems and engage users visually.'
            icon={<FaMobile />}
            />
            <Card title='Web-App Development'
            des='Experienced Front End Engineer with a proven track record of translating design concepts into responsive and visually engaging web interfaces using cutting-edge technologies. Proficient in React.js and its core principles, I specialize in crafting seamless user experiences through well-structured, maintainable, and reusable code. My expertise in responsive design, state management, and asynchronous request handling allows me to optimize applications for maximum speed and scalability. With a solid foundation in JavaScript, TypeScript and python.' 
            icon={<AiFillAppstore />} />
            {/* <Card title='SEO Optimization'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<SiProgress />} />
            <Card title='Mobile Development'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<FaMobile />} />
            <Card title='UX design'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
            icon={<SiAntdesign />} />
            <Card title='Hosting Websites'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad.'
        icon={<FaGlobe />} /> */}
           </div> 
            </section>
    )
};

export default Features;