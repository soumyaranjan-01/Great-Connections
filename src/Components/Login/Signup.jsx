import React, { Component } from 'react'
import logo from "../../images/workflow-mark-on-white.svg"
import fire from '../../config/fire';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        });
        
        alert("Signup Successful!!!");
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (
            <div className="AppSignup">
               <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        <div>
                        <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Sign up Now
                        </h2>
                        </div>
                        <form className="mt-8" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm">
                                <div>
                                    <input aria-label="Email address" name="email" type="email" onChange={this.handleChange} value={this.state.email} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                                </div>
                                <br />
                                <div className="-mt-px">
                                  <input aria-label="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick={this.signup} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
