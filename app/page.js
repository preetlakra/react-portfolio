import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start pt-16 m-7 xl:mx-96 md:mx-24 ">
      <div className="flex flex-col">
        <h1 className='text-4xl lg:text-6xl lg:mb-3 font-bold'>I'm Preet Lakra.</h1>
        <span className='lg:text-2xl' >Full-Stack Engineer.</span>
        <span className='lg:text-2xl' >Freelance.</span>
      </div>
      {/* skills section */}
      <div className='py-8'>

        <h2 className='text-2xl xl:text-3xl font-bold underline'>Skills</h2>

        <h4 className='my-3 xl:text-xl font-semibold'>Programming Languages</h4>
        <ol>
          <li className='my-4'>Javascript, C++, Python.</li>
        </ol>

        <h4 className='my-3 xl:text-xl font-semibold'>Framework</h4>
        <ol>
          <li className='my-4'>Next.js, TailwindCSS, Bootstrap.</li>
        </ol>
        
        <h4 className='my-3 xl:text-xl font-semibold'>Web-Stack</h4>
        <ol>
          <li className='my-4'>MangoDB, Express.js, React.js, Node.js.</li>
        </ol>
       
        <h4 className='my-3 xl:text-xl font-semibold'>Database</h4>
        <ol>
          <li className='my-4 '>MySQL,  Firebase,  AWS, MangoDB. </li>
        </ol>
      </div>
      {/* skill section end */}

      <p className='xl:text-lg'>I specialize in developing responsive user interfaces for web-based applications with a focus 
      on secure and smooth user experience.</p>

      {/* social profiles */}
      <div className='mb-10 xl:mb-16'>
        
        
      </div>
      {/* social profiles */}



      <p className='pt-20 text-xs xl:text-sm'>© Preet Lakra</p>

        
    </main>
  )
}
