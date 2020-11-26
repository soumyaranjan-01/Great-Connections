import React, { Component } from 'react'
import logo from "../../images/workflow-mark-on-white.svg"

export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
               <nav id="footer" className="bg-gray-800">
                    {/* start container */}
                    <div className="container mx-auto pt-8 pb-4">
                        <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
                            <div className="flex flex-row w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                                {/* Column 1 Content */}
                                <img style={{maxWidth: '70%', height: 'auto'}} className="object-center flex-no-shrink fill-current" viewbox="0 0 40 40" width="40px" height="40px" src={logo} alt="Logo" />
                                <p className="text-white flex flex-col mx-3 flex-auto align-middle justify-center Piedra text-xl">© Great Connections Inc.</p>
                            </div>
                            <div className="flex flex-col justify-around w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                                {/* Column 2 Content */}
                                <h4 className="Piedra text-white text-center text-xl">Contact Us</h4>
                                <ul className="nav navbar-nav">
                                    <li id="navi-2" className="object-center leading-7 text-sm">
                                        <a className="text-white no-underline text-small" href="">
                                           <p className="text-center Piedra text-xl">help.greatconnections@gcmail.in</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-around w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                                {/* Column 3 Content */}
                                <h4 className="Piedra text-center text-white text-xl">Info</h4>
                                <ul>
                                    <li id="navi-2" className="leading-7 text-sm">
                                        <a className="text-white no-underline text-small" href="">
                                            <p className="text-center Piedra text-xl">About Us</p>  
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full leading-normal overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                                {/* Column 4 Content */}
                                <h2 className="Piedra text-center text-white text-xl">Follow Us On</h2>
                                <ul className>
                                    <li id="navi-2" className="leading-7 text-sm">
                                        <a className="text-white no-underline text-xl" href="">
                                            <p className="text-center">
                                                <i className="text-left text-blue-600 fa fa-facebook" aria-hidden="true" />&nbsp;&nbsp;Facebook    
                                            </p> 
                                        </a>
                                    </li>
                                    <li id="navi-1" className="leading-7 text-sm">
                                        <a className="text-white no-underline text-xl" href="">
                                            <p className="text-center">
                                                <i className="text-left text-blue-300 fa fa-twitter" aria-hidden="true" />&nbsp;&nbsp;Twitter
                                            </p> 
                                        </a>
                                    </li>
                                    <li id="navi-1" className="leading-7 text-sm">
                                        <a className="text-white no-underline text-xl" href="">
                                            <p className="text-center">
                                                <i className="text-red-600 fa fa-youtube-play" aria-hidden="true" />&nbsp;&nbsp;Youtube
                                            </p>    
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </nav>
            </div>
        )
    }
}

