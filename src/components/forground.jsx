import React, { useRef } from 'react';
import Card from './Card';

function Forground() {
  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, asperiores.",
      filesize: ".9mb",
      close: false,
      tag: { isOpened: true, tagtitle: "Download Now", tagcolor: "green" }
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, asperiores.",
      filesize: "1.5mb",
      close: false,
      tag: { isOpened: true, tagtitle: "Download Now", tagcolor: "blue" }
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, asperiores.",
      filesize: ".04mb",
      close: false,
      tag: { isOpened: true, tagtitle: "Download Now", tagcolor: "green" }
    },
    { desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, asperiores.", 
      filesize: "2mb", 
      close: false, 
      tag: { isOpened: true, tagtitle: "Download Now", tagcolor: "blue" } },
  ];


  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-1000/50 flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}

    </div>
  )

}
export default Forground;