import React from 'react'
import Logo from "../../assets/logo/logo3.png"
function Footer() {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
      <img src={Logo} className="h-10 mr-3 sm:h-9" alt="nuwana Logo" />
          Nuwana Higher Education  
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">Fostering Excellence, Inspiring Innovation, and Transforming Education for a Brighter Tomorrow.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="/" class="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
              <a href="/gallery" class="mr-4 hover:underline md:mr-6 ">Gallery</a>
          </li>
          <li>
              <a href="/leaderboard" class="mr-4 hover:underline md:mr-6">Leaderboard</a>
          </li>
          <li>
              <a href="/virtual" class="mr-4 hover:underline md:mr-6">Virtual tour</a>
          </li>
          <li>
              <a href="/contact" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>

      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">&nbsp; Nuwana Higher Education Institute</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer