import {
  SiLinkedin,
  SiX,
  SiWhatsapp,
  SiFacebook,
  SiTelegram
} from "react-icons/si";

import { FaLink } from "react-icons/fa6";

import toast, { Toaster } from 'react-hot-toast';

const shareText = "Check out this awesome portfolio!"

const copyToClipboard = (link) => {
  navigator.clipboard.writeText(link)
    .then(() => toast.success("Link copied to clipboard!"))
    .catch(err => toast.error("Failed to copy!"));
}

export const ShareModal = ({link, onClose}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[98]">
          <div
            className="fixed top-0 left-0 w-full h-full modal-overlay backdrop-blur bg-white/10"
            onClick={onClose}
          >
        
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-white bg-black rounded-lg modal-content md:w-30 lg:w-30 md:flex-row ">
            <button
            className="absolute font-bold text-gray-300 x-close top-4 right-5 hover:text-white"
            onClick={onClose}
          >
            <span className="X"></span>
            <span className="Y"></span>
            <div className="close">X</div>
          </button>
            <div className="flex items-center justify-center mb-4 md:mr-5 md:mb-0">
              
              {/* Share */}
              <div className="mb-1">
                <h3 className="mb-3 text-base font-bold md:text-lg lg:text-xl">
                  Share Portfolio
                </h3>
                <div className="flex mb-3">
                  <a
                      href={`https://twitter.com/intent/tweet?url=${link}&text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 text-gray-300"
                    >
                      <SiX size={25} />
                  </a>
                  <a
                      href={`https://wa.me/?text=${shareText}%20${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2 text-green-300"
                    >
                      <SiWhatsapp size={25} />
                  </a>
                  <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="mr-2 text-gray-300"
                    >
                      <SiFacebook size={25} />
                  </a>
                  <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="mr-2 text-blue-500"
                    >
                      <SiLinkedin size={25} />
                  </a>
                  <a
                      href={`https://t.me/share/url?url=${link}&text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="mr-2 text-blue-500"
                    >
                      <SiTelegram size={25} />
                  </a>
                </div>
                <h3 className="mb-3 text-base font-bold md:text-lg lg:text-xl">
                  Copy Link
                </h3>
                <div className="flex items-center justify-between bg-black-100 rounded-md px-4 py-2 text-sm font-mono border border-gray-300">
      <span className="truncate">{link}</span>
      <button
        onClick={copyToClipboard}
        className="ml-4 text-gray-600 hover:text-white transition"
        title="Copy"
      >
        <FaLink className="text-lg" />
      </button>
    </div>
              </div>
            </div>
          </div>
        </div>
      );
}