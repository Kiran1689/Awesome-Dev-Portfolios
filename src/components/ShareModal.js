import React from 'react';
import { WhatsappShareButton, TwitterShareButton, WhatsappIcon, TwitterIcon, RedditShareButton, RedditIcon, XIcon, FacebookShareButton, FacebookIcon } from 'react-share';

const ShareModal = ({ toggleShareModel, cardUrl }) => {

    const handleCopy = (e) => {
        // this is another way of doing it if e.target.value
        // console.log(e.target.getAttribute("value"));
        // console.log(e);

        navigator.clipboard.writeText(cardUrl);
        document.getElementById("copyButton").style.background = "green"
        document.getElementById("copyButton").innerHTML = "Copied!"

        setTimeout(() => {
            document.getElementById("copyButton").style.background = "black"
            document.getElementById("copyButton").innerHTML = "Copy"
        }, 1000);

    }

    return (



        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-lg flex justify-center items-center '>
            <div className='flex rounded-xl top-14 md:top-0 flex-col gap-3 w-[80%] md:w-[50%] lg:w-[45%] xl:w-[35%] m-5 p-2 text-white bg-zinc-800 py-6'>
                <div className='flex flex-row justify-between items-center relative  md:top-0 l gap-3  pb-1 px-2'>
                    <div className='text-2xl font-bold '>
                        Share this portfolio
                    </div>
                    <button className=' text-right px-2 py-1 text-2xl font-sans  rounded-xl bg-black text-white font-black border-black hover:bg-white hover:text-black duration-150' onClick={() => { toggleShareModel() }}>X</button>
                </div>
                <div className=' flex justify-center items-center gap-2 flex-wrap'>
                    <TwitterShareButton url={cardUrl} quote="Look at this super cool tutorial I found!">
                        <XIcon className='rounded-full size-14 ' />
                    </TwitterShareButton>
                    <WhatsappShareButton url={cardUrl} quote="Look at this super cool tutorial I found!">
                        <WhatsappIcon className='rounded-full  size-14' />
                    </WhatsappShareButton>
                    <RedditShareButton url={cardUrl} quote="Look at this super cool tutorial I found!">
                        <RedditIcon className='rounded-full  size-14' />
                    </RedditShareButton>
                    <FacebookShareButton url={cardUrl} quote="Look at this super cool tutorial I found!">
                        <FacebookIcon className='rounded-full  size-14' />
                    </FacebookShareButton>
                </div>
                <div className='px-2 mt-2'>
                    <div className='w-full h-[40px] px-3 py-6 bg-white text-black rounded-xl mb-2 flex justify-between  items-center'>
                        <div className='hidden lg:inline '>
                            {cardUrl.substr(0, 33)} {cardUrl.length > 33 ? "..." : ""}
                        </div>
                        <div className='hidden md:inline lg:hidden'>
                            {cardUrl.substr(0, 25)} {cardUrl.length > 25 ? "..." : ""}
                        </div>
                        <div className='inline md:hidden'>
                            {cardUrl.substr(0, 18)} {cardUrl.length > 20 ? "..." : ""}
                        </div>
                        <button onClick={handleCopy} id='copyButton' className='rounded-xl px-2 py-1 text-[16px]  text-white bg-black font-bold'>Copy</button>
                    </div>
                </div>
            </div>
        </div >



    )
}

export default ShareModal