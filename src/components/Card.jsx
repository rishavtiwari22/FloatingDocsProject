import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion"


function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 8 }}
      className='flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8  overflow-hidden'>
      <FaRegFileLines />
      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-2'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
            {data.close ? <MdOutlineClose /> : <FaCloudDownloadAlt size="1.1em" color='#000' />}
          </span>
        </div>
        {data.tag.isOpened && (
          <div className={`tag w-full py-4 ${data.tag.tagcolor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex items-center justify-center`}>
            <h3 className='text-md font-semibold'>{data.tag.tagtitle}</h3>
          </div>)}

      </div >

    </motion.div>
  )
}

export default Card