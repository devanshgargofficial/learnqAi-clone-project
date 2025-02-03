import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className='bg-cyan-100 rounded-t-[4vw] pt-20'>
       <div className='flex justify-center'>
        <div className='mr-10'>
            <p className='font-bold'>Features</p>
            <p>Diagnostic Test</p>
            <p>Play & Practice</p>
            <p>Mock Tests</p>
            <p>Mia, AI Tutor</p>
            <p>Digital SAT</p>
            <p>Schools/Institutes</p>

        </div>
        <div className='mr-10'>
                <p className='font-bold'>Company</p>
                <p>About</p>
                <p>Users Terms and Conditions</p>
                <p>Enterprise Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Pricing</p>
                <p>Cookie Settings</p>
        </div>
        <div className='mr-10'>
        <p className='font-bold'>Resources</p>
                <p>Blogs</p>
                <p>iOS App</p>
                <p>Android App</p>
                <p>Download</p>
                <img src="play-store-button.avif" alt="" className='h-10'/>
                <img src="play-store-button.avif" alt="" className='h-10'/>
                
                
        </div>
        <div className='mr-10'>
                <p className='font-bold'>Compare</p>
                <p>CollegeBoard</p>
                <p>Bluebook</p>
                <p>Khan Academy</p>
                <p>Rtest.ai</p>
                <p>UWorld</p>
                <p>TestInnovators</p>
                <p>Kaplan SAT</p>
                <p>Acely.ai</p>
        </div>

        










        <div className='mr-10'>
                <p className='font-bold'>Support</p>
                <p>Contact</p>
                <p>Join Discord Community</p>
                <p>FAQ</p>
                <p>Contact Sales</p>
                <p>Request Demo</p>
                <p>Try for Free</p>
                {/* <p>Play & Practice</p>
                <p>Mock Tests</p>
                <p>Mia, AI Tutor</p>
                <p>Digital SAT</p>
                <p>Schools/Institutes</p> */}
        </div>
        {/* <table>
            <tr>
                <thead>Features</thead>
                <td>Diagnostic Test</td>
                <td>Play & Practice</td>
                <td>Mock Tests</td>
                <td>Mia, AI Tutor</td>
                <td>Digital SAT</td>
                <td>Schools/Institutes</td>
            </tr>
            <tr>
                <thead>Features</thead>
                <td>Diagnostic Test</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <thead>Features</thead>
                <td>Diagnostic Test</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table> */}
       </div>
       <div className='flex flex-col items-center'>
        <div className='flex justify-center'>
            <img src="discord-footer-icon.webp" alt="" className='mr-2 h-10'/>
            <img src="discord-footer-icon.webp" alt="" className='mr-2 h-10'/>
            <img src="discord-footer-icon.webp" alt="" className='mr-2 h-10'/>
            <img src="discord-footer-icon.webp" alt="" className='mr-2 h-10'/>
            <img src="discord-footer-icon.webp" alt="" className='mr-2 h-10'/>
        </div>
        <p>SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse, this site.</p>
        <p>© 2024 All rights reserved LearnQ Inc.</p>
       </div>
      
    </div>
  )
}

export default Footer;