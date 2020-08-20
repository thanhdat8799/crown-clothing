import React from 'react';
import './sign-up.styles.scss';
import {auth, createUserProfile} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('Password and confirm password do not match!');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className="sign-up">
                <h2 className='title'>I do not have an account yet</h2>
                <span className='sub-title'>Sign up with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} label='Display Name' onChange={this.handleChange} required />
                    <FormInput type='email' name='email' value={email} label='Email' onChange={this.handleChange} required />
                    <FormInput type='password' name='password' value={password} label='Password' onChange={this.handleChange} required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm Password' onChange={this.handleChange} required />
                    <CustomButton type='submit'>
                        sign up
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;