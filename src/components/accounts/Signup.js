import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { useNavigate, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Signup = () => {
    const { signInUsingGoogle, signInUsingGithub, handleCreateUser } = useAuth();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleDisplayName = e => setDisplayName(e.target.value)


    const handleRegister = e => {
        e.preventDefault();
        handleCreateUser(displayName, email, password)
    }

    if (user?.email) {
        navigate('/', {
            replace: true
        })
    }
    return (
        <div className='mx-auto w-5/6 md:w-2/6 mt-28'>
            <div className=''>
                <h1 className='text-center font-semibold text-3xl'>Sign Up</h1>
                <form onSubmit={handleRegister} className='mt-10'>
                    <label htmlFor="displayName">Name</label>
                    <input type="displayName"
                        name="displayName"
                        id="displayName"
                        placeholder='Your Name'
                        onChange={handleDisplayName}
                        className='focus:outline-none border-2 px-3 py-1 w-full mb-1'
                    />
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        placeholder='Your Email'
                        onChange={handleEmail}
                        className='focus:outline-none border-2 px-3 py-1 w-full mb-1' />
                    <label htmlFor="name">Password</label>
                    <input type="password"
                        name="passowrd"
                        id="passowrd"
                        placeholder='Your Password'
                        onChange={handlePassword}
                        className='focus:outline-none border-2 px-3 py-1 w-full mb-1' />
                    <input type="submit" value="Sign Up" className='w-full px-3 py-1 uppercase hover:bg-indigo-500 hover:text-white mt-3' />
                </form>
            </div>
            <div>
                <p className='flex items-center justify-center my-5'><hr className='w-1/12 mr-2 bg-indigo-500' />OR<hr className='w-1/12 ml-2 bg-indigo-500' /></p>
                <div className="flex items-center gap-3 justify-center">
                    <button onClick={signInUsingGoogle} className="cursor-pointer text-2xl"><FcGoogle /></button>
                    <button onClick={signInUsingGithub} className="cursor-pointer text-2xl"><BsGithub /></button>
                </div>
            </div>
            <div className='mt-3'>Already have account? <NavLink to="/login" className="text-indigo-500 cursor-pointer">Log in</NavLink> here.</div>
        </div>
    )
}

export default Signup;