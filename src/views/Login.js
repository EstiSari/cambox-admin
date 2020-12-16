import React, {Component} from 'react';
// import {connect} from 'react-redux';
import './Login.css';
import firebaseDb, { database } from '../firebase/firebase'
// import { loginUser } from "../firebase/auth";

class Login extends Component {
    // state = { email: "", password: "" };
    // handleEmailChange = ({ target }) => {
    //     this.setState({ email: target.value });
    // };
    // handlePasswordChange = ({ target }) => {
    //     this.setState({ password: target.value });
    // };
    // handleSubmit = () => {
    //     const { dispatch } = this.props;
    //     const { email, password } = this.state;
    //     dispatch(loginUser(email, password));
    // };
    state = {
        email:'',
        password:''
    }

    handleChangeText = (e) =>{
        //console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value,
        })
    } 

    handleLoginSubmit = () =>{
        const {email,password} = this.state;
        const {history} =  this.props;
        console.log('data before send:',email,password)
        firebaseDb.app.auth().signInWithEmailAndPassword(email,password)
        .then(res => {
            console.log('success: ', res);
            history.push('/dashboard')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    render(){
        return(
            <div  className="auth-container"> 
                <div className="auth-card" >
                    <p className="auth-title" >Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="email" onChange={this.handleLoginSubmit}/>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleLoginSubmit}/>
                    <button className="btn" onClick={this.handleLoginSubmit}>Login</button>
                </div> 
                {/* <button>Go to Dashboard</button>  */}
            </div>
        )
    }
}

// const reduxDispatch = (dispatch) => ({
//     changeUserName: () => dispatc{(type: 'CHANGE_USER', value: 'Veronicha')}
// })
export default Login;