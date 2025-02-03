import React from 'react'

function CampusAmbassdor() {
  return (
    <div className="mt-12 bg-green-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <h3 className="text-2xl font-bold text-green-700 mb-2">Campus Ambassador Program</h3>
          <p className="text-gray-700 font-medium">Become an Official Ambassador!</p>
          
        </div>
        <div className="flex items-center space-x-4 md:w-1/2">
          <img
            src="ambassdor.avif"
            alt="Ambassador Image 1"
            className="w-50 h-50 rounded-full shadow-md"
          />
          {/* <img
            src="/path-to-ambassador-image2.png"
            alt="Ambassador Image 2"
            className="w-24 h-24 rounded-full shadow-md"
          /> */}
        </div>
        <div>
            <h1 className='text-red-800 text-xl font-bold'>Promote Us and Enjoy Exclusive Rewards:</h1>
            <ul className='list-disc'>
                <li><span className='font-bold'>Earn Unlimited commissions,</span> build your personal brand, and boost your resume!</li>
                <li>Grow your network, gain experience, and <span className='font-bold'>get certified!</span></li>
            </ul>
            {/* mt-4 px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 */}
        <button className="schedule-button">
            Apply Now
          </button>
        </div>
      </div>
  )
}

export default CampusAmbassdor;
