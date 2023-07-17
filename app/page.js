import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-start pt-14 m-7 xl:mx-96 md:mx-24 ">
      <div className="flex flex-col">
        <h1 className='text-4xl lg:text-6xl lg:mb-3 font-bold'>I'm Preet Lakra.</h1>
        <span className='lg:text-2xl' >Full-Stack Engineer.</span>
        <span className='lg:text-2xl' >Freelance.</span>
      </div>
      {/* skills section */}
      <div className='py-8 text-sm lg:text-lg'>

        <h2 className='mb-4 text-2xl xl:text-3xl font-bold underline'>Skills</h2>

        <h4 className='mb-1 xl:text-xl font-semibold'>Programming Languages</h4>
        <ol>
          <li className='mb-3 text-gray-400'>Javascript, C++, Python.</li>
        </ol>

        <h4 className='mb-1 xl:text-xl font-semibold'>Framework</h4>
        <ol>
          <li className='mb-3 text-gray-400 '>Next.js, TailwindCSS, Bootstrap.</li>
        </ol>
        
        <h4 className='mb-1 xl:text-xl font-semibold'>Web-Stack</h4>
        <ol>
          <li className='mb-3 text-gray-400 '>MangoDB, Express.js, React.js, Node.js.</li>
        </ol>
       
        <h4 className='mb-1 xl:text-xl font-semibold'>Database</h4>
        <ol>
          <li className='mb-3 text-gray-400 '>MySQL, MangoDB. </li>
        </ol>
      </div>
      {/* skill section end */}

      <p className='text-sm pb-10 pt-4 lg:text-lg'>I specialize in developing responsive user interfaces for web-based applications with a focus 
      on secure and smooth user experience.</p>

      {/* social profiles */}
      <div className='text-sm lg:text-lg py-4 xl:mb-16 flex gap-4'>
        
        <button className='bg-white text-black px-2 rounded-lg shadow-md hover:shadow-white '><a className='font-semibold h' href="https://github.com/preetlakra">Github</a></button>

        <button className='bg-white text-black px-2 rounded-lg shadow-md hover:shadow-sky-600  hover:text-sky-700 '><a className=' font-semibold h' href="https://www.linkedin.com/in/preetlakra">LinkedIn</a></button>

        <button className='bg-white text-black px-2 rounded-lg shadow-md hover:shadow-sky-500  hover:text-sky-500 '><a className=' font-semibold h' href="https://twitter.com/notbeamn">Twitter</a></button>
        
      </div>
      {/* social profiles */}

      <p className='pt-16 text-xs md:pt-24 '>2023 © Preet Lakra</p>

        
    </main>
  )
}

