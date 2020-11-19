import React, { Component } from 'react'
import SoundlyInvestContext from '../../contexts/SoundlyInvestContext';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LogInForm.css';

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    };

    static contextType = SoundlyInvestContext;

    state = { 
        error: null, 
        isLoading: false 
    };
    
    _isMounted = false;

    // posts user credentials to the server once user submits
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this._isMounted = true;
        this.setState({ error: null, isLoading: true })
        const { user_name, password } = ev.target
    
        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
            })
            .then(res => {
                if (this._isMounted) {
                    this.context.setUserId(res.user_id)
                    this.context.setUserName(res.user_name)
                    user_name.value = ''
                    password.value = ''
                    TokenService.saveAuthToken(res.authToken)
                    this.props.onLoginSuccess()
                }
            })
            .catch(res => {
                if (this._isMounted) {
                    this.setState({ error: res.error })
                }
            })
            .finally(() => {
                this.setState({ isLoading: false })
            })
    };

    componentWillUnmount() {
        // cancel all subscriptions and asynchronous tasks when unmounted
        this._isMounted = false;
    }

    render() {
        const { error } = this.state
        return (
            <section className='login-container'>
                <h2>Log In</h2>
                <p>Please log in below to start a report or view your saved reports.</p>
                <p>To register for an account, click the register button above.</p>
                <section className="demo">
                    <p>To demo this site without registering, log in with these credentials:</p>
                    <p>username: <b>demo</b></p>
                    <p>password: <b>Testing123!</b></p>
                </section>
                
                <form onSubmit={this.handleSubmitJwtAuth}>
                    <label htmlFor="username">Username *</label>
                    <input
                        required
                        name='user_name'
                        type='text'
                    >
                    </input>
                    <label htmlFor="password">Password *</label>
                    <input
                        required
                        name='password'
                        type='password'
                    >
                    </input>
                    <button type='submit' className='submit-button'>
                        {!this.state.isLoading ? 'Login' : 'Success!'}
                    </button>
                    <div role='alert'>
                        {error ? <p className='error'>{error}</p> : ''}
                    </div>
                </form>
            </section>
        )
    }
};