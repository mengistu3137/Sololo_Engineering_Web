import React from 'react';
// Assuming SVG icons are imported as React components, e.g.,
// import { PhoneIcon, MailIcon, FacebookIcon, LinkedInIcon, TelegramIcon, TikTokIcon, YouTubeIcon } from './Icons';
// For brevity, I'll use inline SVG for now, but in a real React app, you'd componentize them.
// Also assuming you have 'assets/logo.png', 'assets/web 2.jpg', etc., available or correctly aliased.

const App = () => {
  return (
    <div id="root">
      {/* --- Top Contact & Social Bar Section --- */}
      <section className="bg-primary py-2 border-b-2 border-b-secondary px-24">
        {/* Contact Info - Hidden on small/medium screens, visible on large screens */}
        <div className="hidden lg:flex flex-1 text-secondary justify-between">
          <div className="flex items-center gap-2">
            {/* Phone Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
            </svg>
            +251 94 954 0860
          </div>
          <div className="flex items-center gap-2">
            {/* Email Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" strokeLinejoin="round" strokeWidth="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"></path>
            </svg>
            <a href="mailto:contact@deboengineering.com" className="hover:text-secondary hover:underline">contact@deboengineering.com</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-2 flex-1 text-xl text-secondary items-center justify-center lg:justify-end ">
          <a href="https://facebook.com/deboengineering">
            {/* Facebook Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/debo-engineering">
            {/* LinkedIn Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
          <a href="https://t.me/deboengineering">
            {/* Telegram Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
            </svg>
          </a>
          <a href="#">
            {/* TikTok Icon (assuming this is TikTok based on the path data) */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCSFW4-JLb7X5Y8-ThBX5NFg">
            {/* YouTube Icon */}
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* --- Navigation Bar Section --- */}
      {/* The 'absolute' positioning and 'z-50' suggest this nav bar might be sticky or have dynamic behavior. */}
      <section className="absolute left-0 right-0 z-50 transition-all duration-300 ease-in-out" id="onscroll-top-zero">
        <nav className="w-full h-auto lg:px-24 sm:px-14 px-12">
          <div className="justify-between mx-auto lg:w-full lg:items-center lg:flex">
            <div>
              <div className="flex items-center justify-between py-3 lg:block">
                <a href="/">
                  <div className="flex gap-3 text-lg lg:text-2xl text-white font-semibold tracking-[0.1rem] hover:text-white items-center">
                    <img src="assets/logo.png" alt="logo" className="bg-gray-200 rounded-full W-12 h-12 " />
                  </div>
                </a>
                <div className="lg:hidden">
                  <button className="p-2 px-0 text-gray-700 rounded-md outline-none">
                    {/* Hamburger Icon */}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-secondary cursor-pointer" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation Links - Hidden on small/medium screens, visible on large screens */}
            <div className="flex justify-start items-center lg:block hidden">
              <ul className="list-none lg:flex lg:space-y-0 space-y-3 gap-x-5">
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 text-secondary" href="/">Home</a></li>
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 hover:text-secondary" href="/about">About</a></li>
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 hover:text-secondary" href="/services">Services</a></li>
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 hover:text-secondary" href="/projects">Projects</a></li>
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 hover:text-secondary" href="/blog">Blog</a></li>
                <li className="flex"><a className="flex items-center text-gray-100 px-1 py-0 text-[1rem]  tracking-wider ease-in duration-50 hover:text-secondary" href="/contacts">Contacts</a></li>
                <button className="flex items-center gap-1 font-semibold  text-gray-100  bg-gray-800 hover:bg-secondary  hover:text-primary py-2 px-4 rounded-md">
                  {/* Login Icon */}
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="font-bold text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" x2="3" y1="12" y2="12"></line>
                  </svg>
                  Log In
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* --- Carousel Section --- */}
      <section className="overflow-hidden">
        <div id="controls-carousel" className="relative w-full overflow-hidden" data-carousel="static">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: 'translateX(0%)' }}>
            {/* Slide 1 */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/web 2.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 1" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">Web Development</h2>
                  </div>
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <p className="text-sm md:text-lg text-white">We develop responsive and optimized web for any of your business.</p>
                  </div>
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <img src="assets/web icon 1.png" alt="Web Development icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/app bg 2.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 2" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">Mobile App</h2>
                  </div>
                  <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                    <p className="text-sm md:text-lg text-white">We develop efficient and user-friendly mobile applications.</p>
                  </div>
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <img src="assets/app icon 3.png" alt="Mobile App icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/ecommerce bg 1.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 3" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">E-commerce</h2>
                  </div>
                  <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                    <p className="text-sm md:text-lg text-white">We develop efficient E-commerce solutions.</p>
                  </div>
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <img src="assets/e commerce icon 2.png" alt="E-commerce icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 (Duplicate of Slide 1 for continuous effect) */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/web 2.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 4" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">Web Development</h2>
                  </div>
                  <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                    <p className="text-sm md:text-lg text-white">We develop responsive and optimized web for any of your business.</p>
                  </div>
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <img src="assets/web icon 1.png" alt="Web Development icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 5 (Duplicate of Slide 2) */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/app bg 2.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 5" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">Mobile App</h2>
                  </div>
                  <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                    <p className="text-sm md:text-lg text-white">We develop efficient and user-friendly mobile applications.</p>
                  </div>
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <img src="assets/app icon 3.png" alt="Mobile App icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 6 (Duplicate of Slide 3) */}
            <div className="flex-shrink-0 w-full relative h-72 md:h-screen">
              <img src="assets/ecommerce bg 1.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Slide 6" />
              <div className="absolute bg-black opacity-70 inset-0 z-10"></div>
              <div className="relative flex items-center justify-center h-full px-10 z-20 text-white text-center">
                <div className="flex flex-col justify-center items-center p-5 space-y-3">
                  <div style={{ opacity: 0, transform: 'translateX(-50px)' }}>
                    <h2 className="text-lg md:text-4xl font-bold text-white">E-commerce</h2>
                  </div>
                  <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                    <p className="text-sm md:text-lg text-white">We develop efficient E-commerce solutions.</p>
                  </div>
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <a className="primary-btn hover:bg-secondary hover:text-primary gap-2 flex items-center" href="/services">
                      Get Started
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="hover:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div style={{ opacity: 0, transform: 'scale(0.8)' }}>
                    <img src="assets/e commerce icon 2.png" alt="E-commerce icon" className="hidden md:block h-20 w-20 md:w-96 md:h-96" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel Buttons */}
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              {/* Previous Icon */}
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              {/* Next Icon */}
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      {/* --- Business Introduction Section --- */}
      <section className="flex flex-col md:flex-row bg-primary_bg space-y-4 md:space-y-0 px-6 relative text-center mx-auto mb-4 z-20 inset-0 py-8">
        <div className="flex flex-col absolute -top-9 md:-top-10 left-1/2 pt-1 transform -translate-x-1/2 bg-white px-2 border-2 border-primary rounded-lg">
          <div className="flex w-full">
            <span className="w-full text-primary text-xl md:text-3xl font-semibold md:font-bold"> Debo Engineering</span>
          </div>
          <span className="text-secondary font-satisfy text-xl md:text-2xl mt-2 pb-1">In pursuit of Service</span>
        </div>
        <div className="bg-white mx-auto">
          <div className="container px-4 pb-14 pt-16">
            <div className="flex items-center justify-center text-lg md:text-xl uppercase font-bold text-secondary mt-8" style={{ opacity: 1, transform: 'none' }}>what we do</div>
            <div className="flex justify-center text-center items-center border-t-4 mt-1 border-t-secondary w-16 mx-auto">&nbsp;</div>
            <div style={{ opacity: 1, transform: 'none' }}>
              <div className="flex items-center capitalize justify-center text-center text-2xl md:text-3xl font-bold text-primary mb-6">We Level up your business with digital technologies</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {/* Web Development Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                    <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                    <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                    <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                    <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                    <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                    <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                    <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                    <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">Web Development</h1>
              </div>

              {/* App Development Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g id="Mobile_3">
                      <g>
                        <path d="M16.73,2.065H7.27a2.386,2.386,0,0,0-2.24,2.5v14.87a2.386,2.386,0,0,0,2.24,2.5h9.46a2.386,2.386,0,0,0,2.24-2.5V4.565A2.386,2.386,0,0,0,16.73,2.065Zm1.24,17.37a1.391,1.391,0,0,1-1.24,1.5H7.27a1.391,1.391,0,0,1-1.24-1.5V4.565a1.391,1.391,0,0,1,1.24-1.5H8.8v.51a1,1,0,0,0,1,1h4.4a1,1,0,0,0,1-1v-.51h1.53a1.391,1.391,0,0,1,1.24,1.5Z"></path>
                        <path d="M10,18.934h4a.5.5,0,0,0,0-1H10a.5.5,0,0,0,0,1Z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">App development</h1>
              </div>

              {/* Software Development Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">Software development</h1>
              </div>

              {/* Satisfied Clients Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4zm72.8-187.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2zM256 370.4c48.883 0 89.436-30.164 106.081-72.801H149.919C166.564 340.236 207.117 370.4 256 370.4z"></path>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">Satisfied clients</h1>
              </div>

              {/* SEO Optimization Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 320h64l64-256 64 384 64-224 32 96h64"></path>
                    <circle cx="432" cy="320" r="32" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">SEO optimization</h1>
              </div>

              {/* 24/7 Support Card */}
              <div className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl" style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="text-4xl text-primary mb-4">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
                  </svg>
                </div>
                <h1 className="text-lg text-primary font-semibold text-center px-3">24/7 support</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Business Growth Banner Section --- */}
      <section style={{ opacity: 0, transform: 'scale(0.8)' }}>
        <div className="flex justify-center h-40 md:h-72 rounded-xl">
          <img src="assets/images/business growth banner.jpg " alt="digital growth" className="rounded-xl shadow-lg hover:scale-105 transition ease-in duration-300 shadow-black" />
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="overflow-x-visible bg-green-900">
        <div className="bg-primary -mt-24 pt-24 md:-mt-40 md:pt-44">
          <div className="flex items-center justify-center text-lg md:text-xl uppercase font-bold text-secondary mt-8" style={{ opacity: 0, transform: 'scale(0)' }}>services</div>
          <div className="flex justify-center text-center items-center border-t-4 mt-1 border-t-secondary w-16 mx-auto">&nbsp;</div>
          <div style={{ opacity: 0, transform: 'translateY(50px)' }}>
            <div className="flex items-center capitalize justify-center text-center text-2xl md:text-3xl font-bold text-white mb-6">our digital solution services</div>
          </div>
          <div className="container mx-auto px-6 md:px-8 lg:px-24">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Website Development Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/website.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">Website Development</div>
                    <div className="text-lg text-secondary my-1">Crafting modern, responsive, and SEO-friendly websites tailored to your business needs.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>

              {/* Mobile App Development Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/app 2.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">Mobile App Development</div>
                    <div className="text-lg text-secondary my-1">Developing intuitive and user-friendly mobile applications for both Android and iOS.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>

              {/* ERP Systems Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/erp.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">ERP Systems</div>
                    <div className="text-lg text-secondary my-1">Implementing integrated ERP solutions to streamline and optimize business operations.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>

              {/* Health Center Management Systems Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/health.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">Health Center Management Systems</div>
                    <div className="text-lg text-secondary my-1">Building systems to efficiently manage patient records, appointments, and billing for healthcare centers.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>

              {/* E-Learning Platforms Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/elearning.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">E-Learning Platforms</div>
                    <div className="text-lg text-secondary my-1">Creating engaging online learning platforms that support remote education and skill development.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>

              {/* Smart Digital Solutions Service Card */}
              <div style={{ opacity: 0, transform: 'translateX(50px)' }}>
                <div className="shadow-md flex flex-col h-full shadow-white mb-6 overflow-hidden">
                  <div className="h-60 overflow-hidden">
                    <img src="assets/services/smart-home-3991595_1280.jpg" className="hover:scale-105 h-full w-full object-cover" />
                  </div>
                  <div className="flex items-center flex-col text-center flex-1 mx-2 mb-4">
                    <div className="text-2xl font-bold mt-8 mb-1 text-white">Smart Digital Solutions</div>
                    <div className="text-lg text-secondary my-1">Innovative solutions for smart homes, smart cities, and automation technologies.</div>
                    <button className="hover:bg-secondary mb-4 text-white hover:border-transparent text-[1.1rem] font-semibold hover:text-primary px-5 mt-4 py-1.5 rounded-lg border hover:bg-primary_bg shadow-black">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* --- Why Choose Us Section --- */}
          <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
              <div className="flex flex-col justify-center mx-6 md:mx-0 md:ml-20">
                <div className="text-center md:text-left space-y-12">
                  <h1 className="text-3xl text-[#f4f4f4] md:text-4xl font-bold !leading-snug" style={{ opacity: 0, transform: 'scale(0.5)' }}>Building Trust, Empowering Growth</h1>
                  <div className="flex flex-col gap-6">
                    {/* Trusted, Secure Solutions Card */}
                    <div style={{ opacity: 0, transform: 'translateY(50px)' }}>
                      <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                        </svg>
                        <p className="text-lg">Trusted, Secure Solutions</p>
                      </div>
                    </div>
                    {/* Data Security Card */}
                    <div style={{ opacity: 0, transform: 'translateY(50px)' }}>
                      <div className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path>
                        </svg>
                        <p className="text-lg">Data Security</p>
                      </div>
                    </div>
                    {/* ... (rest of the cards in this section, if any) */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default App;