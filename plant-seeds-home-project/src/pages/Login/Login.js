import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faCircleXmark, faXmark, faXmarksLines } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.scss';

function Login() {
    return (
        <section className="wrapper-content">
            <div className="d-flex justify-content-start ">
                <button className="btn-exit">
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>{' '}
                </button>
            </div>
            <div className="container">
                <div
                    className="row justify-content-center"
                    data-toggle="animation"
                    data-animation-start="onLoad"
                    data-animation="fade-in-up"
                >
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex">
                            <div className="img"></div>
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div class="w-100">
                                        <h3 class="mb-4">Sign In</h3>
                                    </div>
                                    <div class="w-100">
                                        <p class="social-media d-flex justify-content-end">
                                            <a
                                                href="#"
                                                class="social-icon d-flex align-items-center justify-content-center"
                                            >
                                                <FontAwesomeIcon icon={faGoogle} />
                                            </a>
                                            <a
                                                href="#"
                                                class="social-icon d-flex align-items-center justify-content-center"
                                            >
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <form action="" className="signin-form">
                                    <div className="form-group mb-3">
                                        <label class="label" for="name">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Username"
                                            required=""
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="form-control btn btn-primary rounded submit px-3"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="form-group d-md-flex">
                                        <div className="w-50 text-left">
                                            <label className="checkbox-wrap checkbox-primary mb-0">
                                                Remember Me
                                                {/* <input type="checkbox" checked/> */}
                                                <span className="checkmark">
                                                    <FontAwesomeIcon
                                                        icon={faCheckSquare}
                                                    ></FontAwesomeIcon>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="w-50 text-md-right">
                                            <a href="#">Forgot Password ?</a>
                                        </div>
                                    </div>
                                </form>
                                <p className="text-center">
                                    Not a member?{' '}
                                    <a data-toggle="tab" href="../register/">
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;
