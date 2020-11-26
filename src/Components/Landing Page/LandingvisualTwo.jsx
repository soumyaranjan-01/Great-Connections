import React, { Component } from 'react';

export default class LandingvisualTwo extends Component {
    render() {
        return (
            <div id="LandingvisualTwo">
                <div className="py-12 bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                Learn Better Together
                            </h3>
                            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                                Manage your classroom. Engage your students.
                            </p>
                        </div>
                        <div className="mt-10">
                            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <li>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                {/* Heroicon name: globe-alt */}
                                                <span className="iconify" data-icon="clarity:tools-solid" data-inline="false" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-left text-lg leading-6 font-medium text-gray-900">Tools that teachers need</h4>
                                            <p className="text-left mt-2 text-base leading-6 text-gray-500">
                                                Send messages, share class materials, and make learning accessible anywhere. Save yourself time by bringing all your classroom tools together.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                {/* Heroicon name: scale */}
                                                <span className="iconify" data-icon="fa-solid:money-bill-wave" data-inline="false" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-left text-lg leading-6 font-medium text-gray-900">No hidden fees</h4>
                                            <p className="text-left mt-2 text-base leading-6 text-gray-500">
                                                No extra fee is charged for sharing materials.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                {/* Heroicon name: lightning-bolt */}
                                                    <span className="iconify" data-icon="emojione:smiling-face-with-heart-eyes" data-inline="false" />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-left text-lg leading-6 font-medium text-gray-900">A platform students love</h4>
                                            <p className="text-left mt-2 text-base leading-6 text-gray-500">
                                                Raise your confidence, find your voice, and experience what it means to be a digital citizen. Empower your learning and become part of a vibrant classroom community.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-10 md:mt-0">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                {/* Heroicon name: annotation */}
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                </svg>
                                                </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-left text-lg leading-6 font-medium text-gray-900">For everyone in your school (or district)</h4>
                                            <p className="text-left mt-2 text-base leading-6 text-gray-500">
                                                Roll out to every user effortlessly and streamline communication school-wide. Get even more when you integrate your entire school.
                                            </p>   
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
