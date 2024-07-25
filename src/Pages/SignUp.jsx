import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; // FontAwesome icon for the signup button
import logo from '../images/image.png';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(username, password, userAddress, mobileNumber);
            
            const response = await axios.post('http://localhost:3001/api/signup', {
                username,
                password,
                user_address: userAddress,
                mobile_number: mobileNumber
            });
            console.log('User signed up successfully!');
            navigate('/login'); // Redirect after successful signup
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray- bg-white shadow-xl">
            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg  border-gray-300 border shadow-lg">
                <div>
                <img
                    src={logo}
                    width={100}
                    alt="Step Savvy"
                    className="mx-auto lg:mb-11 mb-8"
                />
                </div>
                <h2 className="text-amber-800 text-center font-manrope text-3xl font-bold leading-10 ">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mt-6">
                        <label className="block text-sm text-gray-900 font-manrope ">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full py-2 mt-2 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-900font-manrope">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full py-2 mt-2 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-900 font-manrope">Address</label>
                        <input
                            type="text"
                            value={userAddress}
                            onChange={(e) => setUserAddress(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm text-gray-600 font-manrope">Mobile Number</label>
                        <input
                            type="text"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none mb-1"
                        />
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <button
                            type="submit"
                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold rounded-md text-white hover:bg-brown transition-all duration-300 bg-light-brown shadow-sm focus:outline-none focus:ring-2 focus:ring-brown-300"
                        >
                            <FaUserPlus className="mr-2" />
                            Signup
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
                        <a href="/login" className="hover:underline">Already have an account? Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;