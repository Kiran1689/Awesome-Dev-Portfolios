// src/App.js
import React, { useState } from 'react';
//import ReactPlayer from 'react-player';
//import { Link } from 'react-router-dom';
import { SiX, SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si"


function Home() {
    const getCurrentYear = () => new Date().getFullYear()

    const [showNavbar, setShowNavbar] = useState(false)


  const footerLinks = [
    {
      name: "Twitter",
      link: "https://twitter.com/kiran__a__n",
      icon: (
        <SiX aria-label="Follow us on Twitter" title="Twitter" />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "GitHub",
      link: "https://github.com/Kiran1689",
      icon: (
        <SiGithub
          aria-label="Follow us on GitHub"
          title="GitHub(Kiran1689)"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/kiran-a-n",
      icon: (
        <SiLinkedin
          aria-label="Follow us on LinkedIn"
          title="LinkedIn"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Instagram",
      link: "https://instagram.com/kiran_a_n",
      icon: (
        <SiInstagram
          aria-label="Follow us on Instagram"
          title="Instagram"
        />
      ),
      hover: " text-xl text-gray-300 cursor-pointer hover:text-white"
    },
    {
      name: "Gmail",
      link: "mailto:kirannaragund197@gmail.com",
      icon: (
        <SiGmail
          aria-label="Mail us"
          title="Gmail"
        />
      ),
      hover: " text-xl  text-gray-300 cursor-pointer hover:text-white"
    }
  ]

  const footerdocsLinks = [
    {
      title: "Documentation",
      child: [
        {
          name: "Contributing Guide",
          link:
            "https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md"
        },
        {/*
        {
          name: "Add projects via GitHub",
          link:
            "https://github.com/Kiran1689/Awesome-Dev-Portfolios"
        },
        {
          name: "Run the project locally",
          link:
            "https://github.com/Kiran1689/Awesome-Dev-Portfolios"
        }
      */}
      ]
    }
  ]

  const footerServiceLinks = [
    {
      title: "License",
      child: [
        {
          name: "MIT License",
          link: "https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/LICENSE"
        },
        {/*
        {
          name: "Code of Conduct",
          link:
            "https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/LICENSE"
        }
        */}
      ]
    }
  ]


  function handleShowNavbar(){
    setShowNavbar(!showNavbar)
  }


  return (
    <section>
    {/* Navbar */}
    <header className="bg-black border-b border-gray-500">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
                <div className="flex items-center flex-shrink-0">
                    <a href="/" title="" className="inline-flex">
                    <h1 className=" text-white font-medium">A W E S O M E</h1>
                    </a>
                </div>

                <div className={`absolute opacity-1  border border-zinc-600 border-t-0 h-12   top-0  right-0 flex items-center  justify-around md:justify-center md:gap-8 px-10 w-full bg-zinc-950/90 backdrop-blur-sm ${showNavbar ? "translate-y-16 z-10 opacity-1 " : "translate-y-0 -z-10 opacity-0 lg:opacity-100"}
                 transition-all md:transition-none  ease-in-out

                  lg:relative lg:border-none lg:h-min lg:translate-y-0 lg:z-0 lg:px-10 lg:w-min lg:bg-transparent lg:backdrop-blur-0 lg:gap-0
                lg:flex lg:justify-center lg:space-x-10 xl:space-x-14 `}>
                    <a href="/" title="" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Home </a>

                    <a href="/portfolios" title="" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Portfolios </a>

                    <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md" title="Documentation" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Documentation </a>

                    <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/issues/new/choose" title="" className="text-base font-medium text-gray-300  focus:text-white hover:text-white"> Help </a>
                </div>

                <div className="flex items-center justify-end space-x-5">
                  {/* Button for show nav bar */}
                    <button onClick={handleShowNavbar} type="button" className="p-2 -m-2 text-white transition-all duration-200 lg:hidden hover:text-gray-200">
                        {!showNavbar ? 
                          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        :  
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
                            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                          </svg>
                        }
                    </button>
                    

                    <div class="group relative">
                      <a
                        href="https://github.com/Kiran1689/Awesome-Dev-Portfolios"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub repository"
                      >
                      
                      <button className='text-gray-300'>
                      <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-100 duration-200 hover:stroke-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </button>
                      </a>
                      <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                      z-20 origin-left scale-0 px-3 rounded-lg border 
                      border-white bg-white py-2 text-sm font-bold
                      shadow-md transition-all duration-300 ease-in-out 
                      group-hover:scale-100">GitHub<span>
                    </span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/*Hero section*/}
    <div className="relative pt-12 bg-black sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="absolute inset-0 hidden lg:block">
            <img className="object-cover object-right-bottom w-full h-full" src="https://iili.io/JYiTEe1.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">Want to build awesome portfolio?</h1>
                <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">On the Awesome Dev Portfolios platform, you can showcase your impressive portfolio to the world. If you're looking to build your own, feel free to browse through the projects for inspiration.</p>
                <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                    <a
                        href="/portfolios"
                        title="Portfolios"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-gray-900
                            transition-all
                            duration-200
                            bg-white
                            border border-transparent
                            rounded-md
                            sm:px-6
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                            hover:bg-gray-200
                        "
                        role="button"
                    >
                        BROWSE PROJECTS
                    </a>

                    <a
                        href="https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md"
                        title="GitHub"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-transparent
                            border border-transparent
                            rounded-md
                            sm:px-4
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                            hover:bg-gray-700
                        "
                        role="button"
                    >
                        ADD YOUR PORTFOLIO
                    </a>
                </div>
            </div>
        </div>

        <div className="mt-8 lg:hidden">
            <img className="object-cover w-full h-full" src="https://iili.io/JYPUxLX.png" alt="" />
        </div>
    </div>
    
    {/*Feature section*/}
    <div className="flex items-center justify-center flex-col sm:flex py-8 bg-white sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
      <div className="text-center mb-8 items-center justify-center">
        <h1 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl xl:leading-tight">Let's Showcase & get inspired</h1>
      </div>
      <div className="text-center items-center justify-center">
        <p className="mb-8 text-base font-normal leading-7 text-gray-600 lg:max-w-md xl:pr-0">
        Whether you're crafting a new portfolio or showcasing your existing one, our platform is the ideal space for inspiration. 
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center">
          <h3 className="text-white mb-2 mt-4">DESIGN FAST</h3>
          <p className="text-gray-400 tracking-tighter p-5">
          Create a stunning design portfolio by leveraging the work of other developers. Draw inspiration from their projects to enhance the visual appeal and effectiveness of your own portfolio.
          </p>
          <div class="v ab bb dc bf cf">
            <img class="zg zc" src="https://iili.io/JYZHFyv.png" alt=""></img>
          </div>
        </div>

        {/*  Card 2 */}
        <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center">
          <h3 className="text-white mb-2 mt-4">CONNECT</h3>
          <p className="text-gray-400  tracking-tighter p-5">
          Connect with developers worldwide, sharing experiences and collaborating on exciting projects. Reach out directly if you need assistance with their portfolio projects.
          </p>
          <div class="v ab bb dc bf cf ih wh">
              <img class="zg zc" src="https://iili.io/JYtFmXf.png" alt=""></img>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center">
          <h3 className="text-white mb-2 mt-4">OPEN SOURCE</h3>
          <p className="text-gray-400 tracking-tighter p-5">
          Contribute to the open-source community by showcasing your GitHub repositories. Collaborate on exciting projects and make your mark in the world of open source.
          </p>
          <div class="v ab bb dc bf cf ih wh">
              <img class="zg zc" src="https://iili.io/JYp193v.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
    {/*footer section*/}
    <div className="border-t border-gray-800 bg-black">
      <div className="mx-auto max-w-screen-xl pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="text-center lg:text-left">
            <div className="flex h-10 items-center justify-center lg:justify-start text-white rounded-lg font-extrabold text-2xl">
              A W E S O M E
            </div>
            <p className="mt-4 text-center text-gray-200 dark:text-gray-400 lg:text-left lg:text-lg">
             Awesome Dev Portfolios platform aims to collect portfolios and their repositories from developers around the world.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-4">
              {footerLinks.map(footerLink => (
                <li key={footerLink.link}>
                  <a
                    href={footerLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={footerLink.hover}
                    aria-label={`footer link of ${footerLink.link}`}
                  >
                    {footerLink.icon}
                  </a>
                </li>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
            <ul className="font-medium text-gray-200 pt-5 text-center lg:text-left">
              {footerdocsLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <a
                          href={link.link}
                          className="hover:text-gray-300 "
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="footer docs link"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>

            <ul className="font-medium text-gray-200 text-center lg:text-left">
              {footerServiceLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">
                    {section.title}
                  </h3>
                  <ul>
                    {section.child.map((link, linkIndex) => (
                      <li key={linkIndex} className="pt-2">
                        <a
                          href={link.link}
                          className="hover:text-gray-300  "
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="footer service link"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
            <div className="mt-[25px] ">
              <div className="p-2 rounded-lg  mx-auto">
                <a
                  href="https://github.com/Kiran1689/Awesome-Dev-Portfolios"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub repository"
                >
                 <button
                    className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
                  >
                    <svg
                      className="w-6 h-6 fill-neutral-50"
                      height="100"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 100 100"
                      width="100"
                      x="0"
                      xmlns="http://www.w3.org/2000/svg"
                      y="0"
                    >
                      <path
                        className="svg-fill-primary"
                        d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                      ></path>
                    </svg>
                    ⭐GITHUB
                  </button>
 
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 dark:border-gray-800 text-center lg:text-center ">
          <p className="text-gray-200 mx-auto lg:mx-0">
            © Awesome Dev Portfolios {getCurrentYear()} All rights reserved
          </p>
        </div>
      </div>
    </div>
</section>

  );
}


export default Home;
