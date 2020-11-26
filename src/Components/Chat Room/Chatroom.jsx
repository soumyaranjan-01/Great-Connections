import React, { Component } from 'react'
import fire from '../../config/fire';
import Displaychat from './Displaychat'
import Logo from "../../images/workflow-mark-on-white.svg"
import Dp from "../../images/professional-man.jpg"
import "../../App.css"

export class Chatroom extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <main className="bg-gray-800 h-screen w-screen">
                <nav className="bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src={Logo} alt="Workflow logo" />
                        </div>
                        </div>
                        <div className="hidden sm:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="shadow mx-2">
                            <ul className="list-style-type-none flex">
                                <li className="px-4 py-2 cursor-pointer rounded-md mx-2 bg-gray-400 hover:bg-gray-500">Reset Password</li>
                                <li className="px-4 py-2 cursor-pointer rounded-md mx-2 bg-gray-400 hover:bg-gray-500">Create Group</li>
                                <li className="px-4 py-2 cursor-pointer rounded-md mx-2 bg-gray-400 hover:bg-gray-500">
                                    <button className="outline-none" onClick={this.logout}>Sign out</button>    
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>  
                </nav>
                <div className="flex-container">
                    <div className="flex-content flex">
                    <div className="hidden md:block bg-gray-400 rounded-md mx-4 mr-2 px-2 py-4 h-full w-1/5">
                        <div className="profile flex flex-col justify-center items-center">
                        <div className="profile-pic w-16 h-16 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
                            <img src={Dp} alt="dp"/>
                        </div>
                        {/* <div className="username my-3 py-2">
                            <h3 className="text-center">Name of the User</h3>
                            <h3 className="text-center">Email Address</h3>
                        </div> */}
                        <div className="status flex items-center">
                            <div className="online bg-green-500 rounded-full w-2 h-2">
                            </div>
                            &nbsp;
                            <div><p>Online</p></div>
                        </div>
                        </div>
                        <hr className="m-2" />
                        <div id="groups">
                        <h4 className="px-2 py-3 font-bold">GROUPS</h4>
                        <div id="groups-list" className="h-64 overflow-y-scroll overflow-x-hidden">
                            <ul className="list-style-type-none">
                            <li className="px-4 py-2 cursor-pointer rounded-md bg-blue-700 text-white hover:bg-gray-500"># General</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 1</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 2</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 3</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 4</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 5</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 6</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 7</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 8</li>
                            <li className="px-4 py-2 cursor-pointer rounded-md hover:bg-gray-500"># Channel 9</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="rounded-md mx-4 ml-2 px-2 h-256 w-4/5">
                        <div id="chat-ground" className="flex flex-col h-1/6 w-full rounded-md overflow-hidden">
                        <div className="chat-room-name bg-blue-900 flex-none">
                            <p className="font-bold text-2xl text-white m-2"># General</p>
                        </div> 
                        <div className="chat-area h-5/6 bg-gray-400 flex-1 flex flex-col">
                            <div className="display-chats m-2 max-h-36 flex-grow">
                                <div className="chat rounded-md bg-gray-200">
                                    <Displaychat />
                                </div>
                            </div> 
                        </div>               
                        </div>
                    </div>
                    </div>
                </div> 
                </main>

            </div>
        )
    }
}

export default Chatroom
