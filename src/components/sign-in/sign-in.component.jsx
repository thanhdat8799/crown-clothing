import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGG} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
            const {value, name} = e.target;
            this.setState({[name]: value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    render() {
        

        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} 
                    type="email" 
                    name='email' 
                    label='Email' 
                    value={this.state.email} 
                    required 
                    /> 
                    
                    <FormInput handleChange={this.handleChange} 
                    type="password" 
                    name='password' 
                    value={this.state.password}
                    label='Password' 
                    required
                    />
                    <div className="buttons">
                        <CustomButton type='submit' value='submit form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGG} googleButton>
                            Sign In With Google
                        </CustomButton>
                    </div>
                    
                </form>
                
            </div>
        );
    }
}

export default SignIn;