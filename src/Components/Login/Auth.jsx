import React, { Component } from 'react'
import fire from '../../config/fire'
import Chatroom from '../Chat Room/Chatroom';
import Login from './Login';

export class Auth extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : {}
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ user });
            }else{
                this.setState({ user: null });
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.user ? (<Chatroom />):(<Login />)}
            </div>
        )
    }
}

export default Auth
