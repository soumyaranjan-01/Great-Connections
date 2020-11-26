import React, { Component } from 'react';
import LandingvisualOne from './LandingvisualOne';
import LandingvisualTwo from './LandingvisualTwo';
import Footer from './Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <LandingvisualOne />
                <LandingvisualTwo />
                <Footer />
            </div>
        )
    }
}
