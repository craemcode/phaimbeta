import React from 'react'
import ApplicationLogo from './ApplicationLogo'

export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t-2">
                    <div className="container flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="">
                                <ApplicationLogo className="h-16 w-16 fill-current text-white inline">

                                </ApplicationLogo>
                                <span className="font-extrabold self-center tracking-wider ml-5 text-white text-3xl">
                                    {" "}
                                    PHAIM{" "}
                                </span>
                            </div>

                            <div className="flex-col justify-center pt-5 ">
                                <div className="pb-5">
                                    
                                        <img
                                            src="img/Phone-07.svg"
                                            className="h-8 inline"
                                            alt=""
                                        />
                                    
                                    <span className="text-white text-lg text-bold pl-2">
                                        0720-615-989
                                    </span>
                                </div>
                                <div className='pb-5'>
                                    
                                        <img
                                            src="img/mail-2.svg"
                                            className="h-8 inline"
                                            alt=""
                                        />
                                    <span className="text-white text-lg text-bold pl-2">
                                        iramikken@gmail.com 
                                    </span>
                                </div>
                                <div>
                                    
                                        <img
                                            src="img/mail-2.svg"
                                            className="h-8 inline"
                                            alt=""
                                        />
                                    <span className="text-white text-lg text-bold pl-2">
                                        ndunguzack13@gmail.com
                                    </span>
                                </div>

                                
                            </div>
                            <div className="pt-5 self-center">
                                <p className="text-white text-sm">
                                    Copyright &copy; Lamasoft LLC 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
  )
}