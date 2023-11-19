'use client'

import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaUserCheck } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";

import './style.css';


const Signup = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const poolData = {
        UserPoolId: 'us-east-1_gBZIYM2wT',
        ClientId: '62qgftf12aegrocjpjbnv5gus8'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        setLoading(true);
        setPassword('');
        setConfirmPassword('');


        if (!username || !password || !confirmPassword) {
            setError('All fields are required');
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }


        if (password !== confirmPassword) {
            setError('The password and confirmation password do not match');
            setLoading(false);
            setTimeout(() => {
                setError(null);
            }, 3000);
            return;
        }

        const userPool = new CognitoUserPool(poolData);

        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: username
            })
        ];

        userPool.signUp(username, password, attributeList, null, (err, result) => {
            if (err) {
                setLoading(false);
                setError(err.message || 'Error during the signup.');
                setTimeout(() => {
                    setError(null);
                }, 3000);
            } else {
                setLoading(false);
                setSuccess(true)
                setTimeout(() => {
                    router.push('/');
                }, 3000);
            }
        });
    };

    return (
        <div id='signup'>
            <form onSubmit={handleSubmit}>
               
                {loading && <div className='overlay-loading'><BiLoaderAlt /></div>}
                {
                    success &&
                    <div className='success-singup' >
                        <FaUserCheck size={32} />
                        <p>Success, you can login in Atlassias Launcher</p>
                        <div className='redirect'>
                            <p>Redirecting to site...</p>
                        </div>
                    </div>

                }
                {!success  &&
                    <>
                        <h2>Hello, signup in VREAL</h2>
                        <p className='text-muted'>
                            Compile the form to signup in VREAL after you can login in VREAL Launcher
                        </p>
                        <div className="form-floating mb-3 w-100">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>

                        {error &&
                            <div className="error-singup" >
                                <MdReportGmailerrorred size={24} />
                                <p>{error}</p>

                            </div>}
                        <button type="submit">Registrati</button>
                    </>
                }
            </form>
        </div>
    );
};

export default Signup;