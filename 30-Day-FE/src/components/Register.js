import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function Register() {
    const [register, setRegister] = useState({
        username:'',
        email:'',
        password:''
    });

    const history = useHistory();

    const handleRegisterChange = e => {
        e.preventDefault();
        setRegister({
            ...register,
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
    };

    return (
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <label>Username: </label>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username (Email works too)'
                        value={register.username}
                        onChange={handleRegisterChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type='email'
                        name='email'
                        placeholder='Email'
                        value={register.email}
                        onChange={handleRegisterChange}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={register.password}
                        onChange={handleRegisterChange}
                    />
                </div>
                
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}

export default Register;