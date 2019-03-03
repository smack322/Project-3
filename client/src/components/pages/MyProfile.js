import React, { Component } from 'react';
import 'whatwg-fetch';
import { Form, Button } from "react-bootstrap";
import { getFromStorage, setInStorage, } from '../../utils/storage';
// import NavTabs frOm "../NavTabs";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token: '',
            signUpError: '',
            signUpEmail: '',
            signUpPassword: '',
            // firstName: "",
            // lastName: "",
            // age: "",
            // fitnessGoal: "",
            // isFormValid: false
        }


        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

        this.onSignUp = this.onSignUp.bind(this);
        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    onTextboxChangeSignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }
    onSignUp() {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        // Post request to backend
        fetch('/api/account/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
            }),
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpEmail: '',
                        signUpPassword: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    });
                }
            });
    }

    logout() {
        this.setState({
            isLoading: true,
        });
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            // Verify token
            fetch('/api/account/logout?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token: '',
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false,
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const {
            isLoading,
            token,
            signUpEmail,
            signUpPassword,
            signUpError,
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }

        if (!token) {

            // console.log("isFormValid: " + this.isFormValid());
            // const { firstName, lastName } = this.state;
            // console.log("first name: " + firstName);
            return (
                <div>
                    <Form>
                       
                        {(signUpError) ? (<p>{signUpError}</p>) : (null)}
                        <p>Sign Up</p>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>Enail</Form.Label>
                            <Form.Control type="email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail} placeholder="Email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formLasttName">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="text" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword} placeholder="password" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <br />
                        <button onClick={this.onSignUp}>Sign UP</button>
                        <br />
                    </Form>
                </div>
            )
        }

        return (
            <div>
              <p>Account </p>
              <button onClick={this.logout}>Logout</button>
            </div>
          );
        }
      }

    export default User;