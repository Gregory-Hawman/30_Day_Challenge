import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function LandingPage() {
    const [register, setRegister] = useState({
        username:'',
        email:'',
        password:''
    })

    const [login, setLogin] = useState({
        username:'',
        password:''
    })

    const history = useHistory();

    const handleRegisterChange = e => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginChange = e => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };
    
    const handleRegisterSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/auth/register', register)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                history.push('/dashboard')
            })
            .catch(error => {
                console.log(error.message)
            });
            setRegister({
                username:'',
                email:'',
                password:''
            })
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/auth/login', login)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                history.push('/dashboard')
            })
            .catch(error => {
                console.log(error.message)
            });
        setLogin({
            username:'',
            password:''
        })
    };

    // useEffect(() => {
    //     const getApiData = () => {
    //         axios
    //             .get('http://localhost:5000/api/auth/login')
    //             .then(res => {
    //               console.log(res.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     };

    //     getApiData()
    // })


    return (
        <div className='LandingPage'>
            <h2>Are you ready for a Challenge?</h2>
            <div>
                <form onSubmit={handleRegisterSubmit}>
                    <button type='submit'>Sign up</button>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username (Your Email works)'
                        value={register.username}
                        onChange={handleRegisterChange}
                    />
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={register.email}
                        onChange={handleRegisterChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={register.password}
                        onChange={handleRegisterChange}
                    />
                </form>
            </div>
            <div>
                <form onSubmit={handleLoginSubmit}>
                    <button type='submit'>Log in</button>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username (Your Email works too!)'
                        value={login.username}
                        onChange={handleLoginChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={login.password}
                        onChange={handleLoginChange}
                    />
                </form>
            </div>
        </div>
    );
  }

  export default LandingPage;