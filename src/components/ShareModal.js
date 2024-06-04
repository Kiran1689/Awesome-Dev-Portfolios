import React from 'react'

const ShareModal = ({ toggleShareModel }) => {
    return (
        <section>
            <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center z-20 items-center font-sans'>
                <div className='flex flex-col w-[80%] lg:w-[50%] bg-[#ffffff] p-2 rounded-xl'>
                    <div className='flex flex-row justify-between items-center relative top-14 md:top-0 l gap-3 border-b-2 pb-1 border-black '>
                        <div className='text-2xl font-bold '>
                            Share this portfolio
                        </div>
                        <button className=' text-right px-2 py-1 text-2xl font-sans border-2 rounded-xl font-black border-black' onClick={() => { toggleShareModel() }}>X</button>
                    </div>
                    <div>
                        Content below
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShareModal