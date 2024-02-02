import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "react-icons/si";

const CardModal = ({ card, onClose }) => {
  if (!card) {
    return null;
  }

  const {
    name,
    username,
    technologiesUsed,
    email,
    linkedin,
    instagram,
    x,
    livePortfolioLink,
    githubRepoLink,
  } = card;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[100]">
      <div
        className="fixed top-0 left-0 w-full h-full modal-overlay backdrop-blur bg-white/10"
        onClick={onClose}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white bg-black rounded-lg modal-content md:w-2/3 lg:w-1/2 md:flex-row  w-[90%] ">
        <div className="flex items-center justify-center mb-4 md:mr-5 md:mb-0">
          <img
            src={`https://github.com/${username}.png`}
            alt={`${username}'s GitHub avatar`}
            className="w-full h-full rounded-lg md:w-full md:h-48 max-w-[50%] max-h-32 sm:max-w-full sm:max-h-full justify-center"
          />
        </div>

        {/* Right side content */}
        <div className="flex flex-col flex-1 w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
          <button
            className="absolute font-bold text-gray-300 x-close top-4 right-5 hover:text-white"
            onClick={onClose}
          >
            <span className="X"></span>
            <span className="Y"></span>
            <div className="close">X</div>
          </button>

          {/* Name */}
          <h2 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl">
            {name}
          </h2>

          {/* GitHub username */}
          <div className="flex items-center mb-4">
            <img
              src={`https://github.com/${username}.png`}
              alt={`${username}'s GitHub avatar`}
              className="w-5 h-5 mr-2 rounded-full"
            />
            <span className="text-sm md:text-base lg:text-lg">{username}</span>
          </div>

          {/* Tech stack used */}
          <div className="mb-4">
            <h3 className="mb-1 text-base font-bold md:text-lg lg:text-xl">
              Tech Stack Used
            </h3>
            <div className="flex flex-wrap">
              {technologiesUsed.split(", ").map((tech, index) => (
                <div key={index} className="mb-1 mr-2">
                  • {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="mb-5">
            <h3 className="mb-1 text-base font-bold md:text-lg lg:text-xl">
              Socials
            </h3>
            <div className="flex items-center">
              {email !== "-" && (
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-red-500"
                >
                  <SiGmail size={25} />
                </a>
              )}

              {x && x !== "-" && (
                <a
                  href={x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-gray-300"
                >
                  <SiX size={25} />
                </a>
              )}

              {linkedin !== "-" && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-blue-500"
                >
                  <SiLinkedin size={25} />
                </a>
              )}

              {instagram && instagram !== "-" && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-pink-500"
                >
                  <SiInstagram size={25} />
                </a>
              )}

              {username !== "-" && (
                <a
                  href={`https://www.github.com/${username}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 text-gray-300"
                >
                  <SiGithub size={25} />
                </a>
              )}
            </div>
          </div>

          {/* External links */}
          <div className="mb-2">
            <h3 className="mb-1 text-base font-bold md:text-lg lg:text-xl">
              External Links
            </h3>
            <div className="flex">
              <a
                href={livePortfolioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 mr-2 text-white bg-purple-800 rounded-lg"
              >
                Live Portfolio
              </a>

              {githubRepoLink !== "-" && (
                <a
                  href={githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-black bg-white rounded-lg"
                >
                  GitHub Repo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
