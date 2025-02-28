import React from 'react'

const App = () => {
  return (
    < >
 <div className="bg-black text-white min-h-screen p-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b border-purple-500">
        <div className="text-lg font-bold text-blue-400 ">
          <img className='w-44' src="./Img/Logo.png" alt="" srcset="" />
        </div>
        <button className="border border-purple-500 px-4 py-2 rounded-lg">Sign in</button>
      </nav>

      {/* Navigation Menu */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 bg-purple-900 p-4 rounded-lg">
  <img className="w-28 h-16 mr-6" src="./Img/logo-2.png" alt="Logo 2" />
  <button className="border border-purple-500 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-900 shadow-lg">
    Overview
  </button>
  <button className="border border-purple-500 px-6 py-2 rounded-lg cursor-pointer">Create Team</button>
  <button className="border border-purple-500 px-6 py-2 rounded-lg cursor-pointer">Prizes & Sponsors</button>
  <button className="border border-purple-500 px-6 py-2 rounded-lg cursor-pointer">FAQs</button>
  <button className="border border-purple-500 px-6 py-2 rounded-lg cursor-pointer">Judging & Rules</button>
  <button className="border border-purple-500 px-6 py-2 rounded-lg cursor-pointer">Resources</button>
</div>
      {/* Main Content */}
      <div className="text-center py-12">
      <div className="flex flex-col items-center text-center mt-6">
  <img className="w-12 h-20" src="./Img/logo-3.png" alt="Logo 3" />
  <h4 className="mt-[-10px] text-white font-bold">SingularityNFT</h4>
</div>
<h2 className="text-7xl font-extrabold mt-4">
  <span className="text-orange-400">Ha</span>
  <span className="text-white">ckIndia2025</span>
</h2>
<p className="text-gray-300 text-xl mt-3">India's Biggest Web3 & AI Hackathon</p>
<div className="bg-purple-600 px-12 py-4 rounded-lg inline-block mt-6 text-3xl font-extrabold text-white">
  February 28 - September 28
</div>


        
<div className="flex justify-center gap-12 text-orange-400 mt-8 text-2xl font-extrabold">
  <div className="flex flex-col items-center">
    <span className="text-4xl">$150+</span>
    <span className="text-lg text-gray-300">Price Pool</span>
  </div>
  <div className="flex flex-col items-center">
    <span className="text-4xl">150+</span>
    <span className="text-lg text-gray-300">Universities</span>
  </div>
  <div className="flex flex-col items-center">
    <span className="text-4xl">25,000+</span>
    <span className="text-lg text-gray-300">Students</span>
  </div>
</div>


        <button className="mt-6 border border-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-purple-600">Register now!</button>
      </div>

      {/* Sponsors/Universities */}
      <div className="flex justify-center mt-10 border-t border-purple-500 pt-6">
  <img src="./Img/holding.png" className="w-full h-24 bg-[#D9D9D9]" />
</div>


      {/* Video Section */}
      <div className="mt-10 flex flex-col items-center text-center">
  {/* Tag */}
  

  {/* Heading & Subtext */}
  <h3 className="text-4xl font-bold mt-6 text-white">
    150+ <span className="text-yellow-500">Universities</span> participating
  </h3>
  <p className="text-xl text-gray-300 mt-3">
    72+ Judges | 21 Hackathons | 36+ Great Speakers
  </p>

  {/* Video Embed */}
  <iframe
    className="mt-8 border-4 border-purple-500 rounded-xl w-full max-w-3xl h-64"
    src="https://www.youtube.com/embed/gi1kkMbfNAE"
    title="HackIndia 2024 Finals"
    allowFullScreen
  ></iframe>
</div>

      <div>
      <img src="./Img/banner.png"  className=" mt-4 w-5/4 h-20 bg-[#D9D9D9]" />
      </div>
      {/* Footer */}
      <footer className="mt-10 text-center border-t border-purple-500 pt-6 text-gray-400">
        <p>Copyright ©2025 DcodeBlock</p>
        <div className="flex justify-center gap-6 mt-2 text-sm">
          <span>Help Center</span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App