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
          <li className='mb-3 text-gray-400'>Javascript, Python, C/C++, Java.</li>
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
          <li className='mb-3 text-gray-400 '>MySQL, Firebase, Supabase, MangoDB. </li>
        </ol>
      </div>
      {/* skill section end */}

      <p className='text-sm pb-10 pt-4 lg:text-lg'>I specialize in developing responsive user interfaces for web-based applications with a focus 
      on secure and smooth user experience.</p>

      
      <div className='text-sm lg:text-lg py-4 xl:mb-16 flex gap-4'>
          
        
        <a href="https://github.com/preetlakra" target="_blank"> <img className='w-8 lg:w-12'  src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="linkedin"  /> </a> 

        <a href="https://www.linkedin.com/in/preetlakra/" target="_blank"> <img className='w-8 lg:w-12' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin"  /> </a> 
        
        <a href="https://twitter.com/notbeamn/" target="_blank"> <img className='w-8 lg:w-12 ' src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000" alt="twitter" /> </a>
        
      </div>
      

      <p className='pt-16 md:pb-4 text-xs md:pt-24 '>2023 © Preet Lakra</p>

        
    </main>
  )
}

