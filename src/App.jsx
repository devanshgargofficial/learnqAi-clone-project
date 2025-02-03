import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.svg'
import PricingSection from './PricingSection';
import CampusAmbassdor from './CampusAmbassdor';
import Discord from './Discord';
import Faq from './Faq';
import Footer from './Footer';


function App() {
  

  return (
    <>
    <nav className='br-5 mt-4 navbar'>
      <div><img src={logo} alt="logo" className='h-20' /></div>
      <div>
        <ul className='navbar-middle-options'>
          <li className='font-bold'>For Students</li>
          <li>For Tutors/Institutes</li>
          <li className='text-blue-900'>Pricing</li>
          <li className='text-blue-900'>Blog</li>
          <li className='text-blue-900'>Community</li>
        </ul>
      </div>
      <div className='navbar-login-sectin'>
        <button className='login-button mr-5'>Login</button>
        <button className='schedule-button'>Schedule a Call</button>
      </div>
    </nav>


    <div className='bg-green-100 hero pt-30 pb-20'>
      <div className='px-10 flex mb-20'>
        <div className='w-3/5'>
          <h1 className='font-bold mb-8'>Boost Your Digital SAT Score. Guaranteed! While Playing.</h1>
          <p className='mb-8'>Keep a real-time track of progress with the most fun and loved AI-powered practice platform.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className='bg-blue-500'>Get Started</button>
        </div>
        <div className='flex justify-center items-center'><img src="landing main.avif" alt="landing main" className='w-2/3' /></div>
      </div>
      <div className='stats'>
        <div>
          <h1 className='font-bold'>7.1 M+</h1>
          <p>Minutes Practice</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1 className='font-bold'>7.1 M+</h1>
          <p>Minutes Practice</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1 className='font-bold'>7.1 M+</h1>
          <p>Minutes Practice</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1 className='font-bold'>7.1 M+</h1>
          <p>Minutes Practice</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
          <h1 className='font-bold'>7.1 M+</h1>
          <p>Minutes Practice</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>

    </div>




    <div className="section-2 flex p-20 bg-blue-100">
      <div className='mr-10'><img src="chart-section-2.avif" alt="" /></div>
      <div className='w-2/3'>
        <h1 className='font-bold mb-10'>Lorem ipsum dolor sit <span className='text-blue-500'>amet consectetur adipisicing.</span></h1>
        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto tempora quasi facere velit!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, assumenda.</p>
        <button className='border-blue'>Practice Now</button>
      </div>

    </div>


    <div className="section-3 flex p-20 bg-gray-100">
      <div>
        <h1 className='font-bold mb-10'>Lorem ipsum dolor sit amet, consectetur <span className='text-blue-500'>adipisicing elit. Ut!</span></h1>
        <h3 className='font-bold mb-10 text-xl'>- Lorem ipsum dolor sit amet.</h3>
        <p className='mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem quisquam repudiandae, enim corporis odio.</p>
        <button>Try LearnQ.ai</button>
      </div>
      <div><img src="image-section-3.avif" alt="" className=''/></div>
    </div>
    
    <div className="section-4 flex p-20 bg-green-100">
      <div className='mr-10'><img src="image-section-4.avif" alt="" /></div>
      <div className='w-2/3'>
        <h1 className='font-bold mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas iusto tempora quasi facere velit!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, assumenda.</p>
        <button className='border-blue-500'>Practice Now</button>
      </div>
    </div>
    {/* hero section ending */}
    <div className="section-5">
      <div className='bg-teal-500 flex px-20 py-15 items-center'>
        <div >
          <h1>Are You a Tutor or a Test Prep Institute?</h1>
          <h4>Give your students a Duolingo-like platform for the SAT with Shopify-like customization for tutors and test prep institutes.</h4>
        </div>
        <button className='flex-1'>Book Free Demo</button>
      </div>
      <div className='flex flex-col items-center'>
        <div className='bg-blue-100 px-20 py-5 rounded-3xl'>Wall of Love</div>
        <h2 className=''>Loved By Digital SAT Aspirants Across The Globe </h2>
        <button className='schedule-button'>See the Wall of Love</button>
        <img src="" alt="scrolling" />
      </div>
      <div>
        <div>GEN-AI Digital SAT Platform</div>
        <h1>Experience The Personalized Digital SAT Training Available 24/7</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum.</p>
      </div>
      
      {/* scrolling section ends */}
      
    <div className="section-6 bg-green-100 flex p-20">
      <div className='flex flex-col w-2/5 mr-10'>
        <div className='bg-white border-4 border-blue-500 px-10 py-2 inline color-blue-500 rounded-xl mx-10'>AI Generated</div>
        <h1 className='font-bold font-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut!</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem quisquam repudiandae, enim corporis odio.</p>
        <button className='login-button'>Try LearnQ.ai</button>
      </div>
      <div><img src="image-section-6.webp" alt="" /></div>
    </div>

{/* ---------------------------------------------------section-7--------------------------------------- */}
    <div className='section-7'>
    <div className="section-7-1 flex p-20">

      <div className='mr-10'><img src="image-section-7-1.avif" alt="" /></div>
      <div className='w-2/3'>
        <div className='bg-green-100 rounded-xl mb-10 color-blue text-center'>SAT EXAM SCORE CALCULATOR</div>
        <h1 className='font-bold mb-15'>Digital SAT Diagnostic Test</h1>
        <p className='mb-10'>A shorter, yet deeper  AI-driven test coupled with SAT score calculator that gauges students' understanding, setting the groundwork for Digital SAT prep.</p>
        
        <button className='login-button'>Get Your Score</button>
      </div>
      </div>

      <div className="section-7-2 flex p-20">
      <div className='w-2/3'>
        <div className='bg-green-100 rounded-xl mb-10 color-blue text-center'>GAMIFIED DSAT SELECTION TEST</div>
        <h1 className='font-bold mb-15'>Digital SAT Play & Practice</h1>
        
        <p className='mb-10'>Topic-wise practice tests that are engaging, mobile-friendly, AI-driven game-based learning modules that make Digital SAT prep enjoyable and effective.</p>
        <button className='login-button'>Start Playing</button>
      </div>
      <div><img src="image-section-7-2.avif" alt="" /></div>
    </div>

    <div className="section-7-3 flex p-20">

      <div className='mr-10'><img src="image-section-7-3.avif" alt="" /></div>
      <div className='w-2/3'>
        <div className='bg-green-100 rounded-xl mb-10 color-blue text-center'>FULL LENGTH NEW SAT PRACTICE</div>
        <h1 className='font-bold mb-15'>Digital SAT Full-Length Practice Tests</h1>
        <p className='mb-10'>Realistic Digital SAT practice tests that mirror the College Board's format, ensuring students are exam-ready.</p>  
        <button className='login-button'>Practice Now</button>
      </div>
      </div>

      <div className="section-7-4 flex p-20">
      <div className='w-2/3'>
        <div className='bg-green-100 rounded-xl mb-10 color-blue text-center'>AI Tutor</div>
        <h1 className='font-bold mb-15'>Mia - Your AI Tutor For DSAT</h1>
        <p className='mb-10'>Harnessing the power of Gen AI, Mia offers personalized guidance, ensuring each Digital SAT student's prep journey is tailored to their unique needs.</p>
        <button className='login-button'>Learn With Mia</button>
      </div>
      <div><img src="image-section-7-4.avif" alt="" /></div>
    </div>
    </div>

    {/* <div className="section-pricing">
      <h2>Pricing and Plans</h2>
      <div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
      <div>

      </div>

    </div> */}
    <PricingSection/>
    <CampusAmbassdor/>
    <Discord />
    <Faq/>
    <Footer/>
    

    </div>








    </>
  )
}

export default App
