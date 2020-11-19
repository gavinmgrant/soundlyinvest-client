import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {  
    state = { 
        error: null,
        onRegistrationSuccess: false,
        isLoading: false
    };

    // posts user credentials to the server once user submits
    handleSubmit = ev => {
        ev.preventDefault()
        this.setState({ error: null, isLoading: true })
        const { user_name, password } = ev.target
    
        AuthApiService.postUser({
          user_name: user_name.value,
          password: password.value,
        })
        .then(user => {
            user_name.value = ''
            password.value = ''
            this.setState({ onRegistrationSuccess: true })
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
        .finally(() => {
            this.setState({ isLoading: false })
        })
    };

    render() {
        const { error } = this.state
        return (
            <section className='registration-container'>
                <h2>Register</h2>
                <p>Registered users can create and save reports.</p>
                <section className='demo'>
                    <p>Your password must include each of the following:</p> 
                    <ul className='registration-list'>
                        <li>an upper case letter</li>
                        <li>a lower case letter</li>
                        <li>a number</li>
                        <li>a special character</li>
                        <li>between 8 and 72 characters</li>
                    </ul>
                </section>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>
                        Username *
                    </label>
                    <input
                        name='user_name'
                        type='text'
                        required
                    >
                    </input>
                    <label htmlFor='password'>
                        Password *
                    </label>
                    <input
                        name='password'
                        type='password'
                        required
                    >
                    </input>
                    <button type='submit' className='submit-button'>
                        {!this.state.isLoading ? 'Register' : 'Loading...'}
                    </button> 
                    <div role='alert'>
                        {error ? <p className='error'>{error}</p> : ''}
                    </div>
                    {this.state.onRegistrationSuccess ? <p className='success'>Success! We have saved your credentials. Log in to get started!</p> : ''}
                </form>
            </section>
        )
    }
};