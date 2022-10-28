import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BASE_API_URL from '../../api/api';
import './Register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUserSignUp = (e) => {
        e.preventDefault();
        axios
            .post(BASE_API_URL + 'v1/users/createUser', {
                userName: username,
                email: email,
                password: password,
            })
            .then((res) => {
                navigate('/login');
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate("/")
        }
    }, []);
    return (
        <section className="signup-wrapper">
            <div className="d-flex justify-content-start ">
                <button className="btn-exit">
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>{' '}
                </button>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img"></div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign Up</h3>
                                        <p className="py-2">
                                            Create your account to get full access
                                        </p>
                                    </div>
                                </div>
                                <form
                                    action=""
                                    className="signup-form"
                                    onSubmit={(e) => handleUserSignUp(e)}
                                >
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="name">
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.currentTarget.value)}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">
                                            Email Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.currentTarget.value)}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.currentTarget.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" htmlFor="password">
                                            Confirm password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-primary rounded submit px-3"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <p className="text-center">
                                    Already have an account?{' '}
                                    <Link to="/login">
                                        <b>Login Here</b>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
