import { React } from "react";
import { HeroParallax } from "./components/ui/hero-parallax";
import { Meteors } from "./components/ui/meteors";
import { SiX, SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import Pro1 from "./images/Pro1.png";
import Pro3 from "./images/Pro3.png";
import Pro2 from "./images/Pro2.png";
import Pro4 from "./images/Pro4.png";
import Pro5 from "./images/Pro5.png";
import Pro6 from "./images/Pro6.png";
import Pro7 from "./images/Pro7.png";
import Pro8 from "./images/Pro8.png";
import Pro9 from "./images/Pro9.png";
import Pro10 from "./images/Pro10.png";
import Card1 from "./images/Card_1.png";
import Card2 from "./images/Card2.png";
import Card3 from "./images/Card_3.png";

export default function Home() {
  const getCurrentYear = () => new Date().getFullYear();

  const footerLinks = [
    { name: "Twitter", link: "https://twitter.com/kiran__a__n", icon: <SiX aria-label="Follow us on Twitter" title="Twitter" />, hover: "text-xl text-gray-300 cursor-pointer hover:text-white" },
    { name: "GitHub", link: "https://github.com/Kiran1689", icon: <SiGithub aria-label="Follow us on GitHub" title="GitHub(Kiran1689)" />, hover: "text-xl text-gray-300 cursor-pointer hover:text-white" },
    { name: "Linkedin", link: "https://linkedin.com/in/kiran-a-n", icon: <SiLinkedin aria-label="Follow us on LinkedIn" title="LinkedIn" />, hover: "text-xl text-gray-300 cursor-pointer hover:text-white" },
    { name: "Instagram", link: "https://instagram.com/kiran_a_n", icon: <SiInstagram aria-label="Follow us on Instagram" title="Instagram" />, hover: "text-xl text-gray-300 cursor-pointer hover:text-white" },
    { name: "Gmail", link: "mailto:kirannaragund197@gmail.com", icon: <SiGmail aria-label="Mail us" title="Gmail" />, hover: "text-xl text-gray-300 cursor-pointer hover:text-white" }
  ];

  const footerdocsLinks = [
    { title: "Documentation", child: [{ name: "Contributing Guide", link: "https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/CONTRIBUTING.md" }] }
  ];

  const footerServiceLinks = [
    { title: "License", child: [{ name: "MIT License", link: "https://github.com/Kiran1689/Awesome-Dev-Portfolios/blob/main/LICENSE" }] }
  ];

  return (
    <section>
      <HeroParallax products={products} />
      
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
            <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">DESIGN FAST</h3>
            <p className="text-neutral-500 tracking-tighter p-5">
              Create a stunning design portfolio by leveraging the work of other developers. Draw inspiration from their projects to enhance the visual appeal and effectiveness of your own portfolio.
            </p>
            <div className="v ab bb dc bf cf">
              <img className="zg zc" src={Card1} alt=""></img>
            </div>
          </div>
          <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center relative overflow-x-hidden">
            <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">CONNECT</h3>
            <p className="text-neutral-500 tracking-tighter p-5">
              Connect with developers worldwide, sharing experiences and collaborating on exciting projects. Reach out directly if you need assistance with their portfolio projects.
            </p>
            <div className="v ab bb dc bf cf ih wh">
              <img className="zg zc" src={Card2} alt=""></img>
            </div>
            <Meteors number={10} />
          </div>
          <div className="bg-black p-4 rounded-md shadow-md max-w-xs text-center">
            <h3 className="text-lg font-bold md:text-2xl mb-2 mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">OPEN SOURCE</h3>
            <p className="text-neutral-500 tracking-tighter p-5">
              Contribute to the open-source community by showcasing your GitHub repositories. Collaborate on exciting projects and make your mark in the world of open source.
            </p>
            <div className="v ab bb dc bf cf ih wh">
              <img className="zg zc" src={Card3} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      
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
                    <a href={footerLink.link} target="_blank" rel="noopener noreferrer" className={footerLink.hover} aria-label={`footer link of ${footerLink.link}`}>
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
                    <h3 className="text-xl font-extrabold mb-4 text-gray-200">{section.title}</h3>
                    <ul>
                      {section.child.map((link, linkIndex) => (
                        <li key={linkIndex} className="pt-2">
                          <a href={link.link} className="hover:text-gray-300" rel="noopener noreferrer" target="_blank" aria-label="footer docs link">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
              <ul className="font-medium text-gray-200 text-center lg:text-left">
                {footerServiceLinks.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-extrabold mt-5 mb-4 text-gray-200">{section.title}</h3>
                    <ul>
                      {section.child.map((link, linkIndex) => (
                        <li key={linkIndex} className="pt-2">
                          <a href={link.link} className="hover:text-gray-300" rel="noopener noreferrer" target="_blank" aria-label="footer service link">{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
              <div className="mt-[25px]">
                <div className="p-2 rounded-lg mx-auto">
                  <a href="https://github.com/Kiran1689/Awesome-Dev-Portfolios" target="_blank" rel="noreferrer" aria-label="GitHub repository">
                    <button className="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                      <svg className="w-6 h-6 fill-neutral-50" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                        <path className="svg-fill-primary" d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"></path>
                      </svg>
                      ⭐GITHUB
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 dark:border-gray-800 text-center lg:text-center">
            <p className="text-gray-200 mx-auto lg:mx-0">
              © Awesome Dev Portfolios {getCurrentYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const products = [
  { title: "Rohit Kushwaha", link: "", thumbnail: Pro1 },
  { title: "Frances Coronel", link: "", thumbnail: Pro3 },
  { title: "Kiran Naragund", link: "https://kiran1689.github.io", thumbnail: Pro2 },
  { title: "Luis Ángel Jimenez", link: "", thumbnail: Pro6 },
  { title: "Yaroslav Lebedenko", link: "", thumbnail: Pro8 },
  { title: "ARupendra Singh Rajawat", link: "", thumbnail: Pro4 },
  { title: "Matteo Santoro Dev", link: "", thumbnail: Pro5 },
  { title: "Pål Stakvik", link: "", thumbnail: Pro7 },
  { title: "Vinod Jangid", link: "", thumbnail: Pro10 },
  { title: "Lakshan Rukantha", link: "", thumbnail: Pro9 }
];