import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function Login() {
    const [login, setLogin] = useState({
        username:'',
        password:''
    })

    const history = useHistory();

    const handleLoginChange = e => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

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
        <div>
            <form onSubmit={handleLoginSubmit}>
                <button type='submit'>Log in</button>
                <input 
                    type='text'
                    name='username'
                    placeholder='Username (Email works too)'
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
    )
};

export default Login;