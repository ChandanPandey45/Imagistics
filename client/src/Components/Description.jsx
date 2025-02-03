import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div initial={{opacity:0, y:100}}  transition={{ duration:1}} whileInView={{opacity:1, y:0}} viewport={{once: true}}
    className=' flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold'>
            Create AI Images
        </h1>
        <p className='text-gray-500 mb-8'> Turn Your Imagination in to Visual World </p>
    
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg ' alt="" />
            <div >
                <h2 className='text-3xl max-w-lg font-medium' > Introducing the AI- Powered Text to Image Generator</h2>
                <p className='text-gray-500 mb-4 gap-5 pt-3'> Imagistics is an innovative AI-powered web application that transforms text into stunning visuals. Designed for creators, storytellers, and visionaries, it allows users to generate high-quality images simply by entering descriptive prompts.</p>
                <p className='text-gray-500 mb-4'> Whether you need photorealistic scenes, abstract art, or custom designs, Imagistics offers diverse styles and customizable features to match your creative needs. Its intuitive interface ensures a seamless experience, while cloud integration makes saving and sharing creations effortless. Perfect for graphic design, storytelling, education, and social media content, Imagistics empowers you to turn ideas into captivating visuals with ease. Let your words inspire extraordinary works of art!</p>
            </div>
        </div>
    
    </motion.div>
  )
}

export default Description