import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faXmark, faXmarksLines} from '@fortawesome/free-solid-svg-icons';
function Register() {
    return (
        <section className='signup-wrapper'>
            <div className='d-flex justify-content-start '>
                <button className='btn-exit'><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon> </button>
            </div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-12 col-lg-10'>
                        <div className='wrap d-md-flex'>
                            <div className='img'>
                            </div>
                            <div className='login-wrap p-4 p-md-5'>
                                <div className='d-flex'>
                                    <div class="w-100">
			      			            <h3 class="mb-4">Sign Up</h3>
                                        <p className='py-2'>Create your account to get full access</p>
			      		            </div>
                                </div>
                                <form action='' className='signin-form'>
                                    <div className='form-group mb-3'>
                                        <label class="label" for="name">Full name</label>
                                        <input type="text" class="form-control" placeholder="Username" required=""/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className="label" for="password">Email Address</label>
                                        <input type="password" className="form-control" placeholder="Password" required/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className="label" for="password">Password</label>
                                        <input type="password" className="form-control" placeholder="Password" required/>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className="label" for="password">Confirm password</label>
                                        <input type="password" className="form-control" placeholder="Password" required/>
                                    </div>
                                    <div className='form-group'>
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign Up</button>
                                    </div>
                                </form>
                                <p className="text-center">Already have an account? <a data-toggle="tab" href="../login">Login </a>here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
