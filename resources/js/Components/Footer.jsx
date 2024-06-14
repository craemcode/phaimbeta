import React from 'react'
import ApplicationLogo from './ApplicationLogo'

export default function Footer() {
  return (
    <footer className="bg-yellow-100 border-t-2">
                    <div className="container flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="">
                                <ApplicationLogo className="h-16 w-16 fill-current text-gray-500 inline">

                                </ApplicationLogo>
                                <span className="font-extrabold self-center tracking-wider ml-5 text-gray-500 text-3xl">
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
                                    
                                    <span className="text-gray-500 text-lg text-bold pl-2">
                                        0720-615-989
                                    </span>
                                </div>
                                
                                <div>
                                    
                                        <img
                                            src="img/mail-2.svg"
                                            className="h-8 inline"
                                            alt=""
                                        />
                                    <span className="text-gray-500 text-lg text-bold pl-2">
                                        ndunguzack13@gmail.com
                                    </span>
                                </div>

                                
                            </div>
                            <div className="pt-5 self-center">
                                <p className="text-gray-400 text-sm">
                                    Copyright &copy; Zachariah
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
  )
}