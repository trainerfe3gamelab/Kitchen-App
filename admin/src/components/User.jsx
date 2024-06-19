import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:4000/users");
            // Pastikan respons adalah array
            if (Array.isArray(response.data)) {
                setItems(response.data);
            } else {
                console.error("Unexpected response format: ", response.data);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/users/${id}`);

            if (response.status === 200) {
                // Hapus dari state items
                const updatedItems = items.filter(item => item.id !== id);
                setItems(updatedItems);
                console.log("User deleted successfully.");
            } else {
                console.error("Failed to delete user.");
            }
        } catch (error) {
            console.error("Error deleting user: ", error);
        }
    };

    return (
        <>
            <div className='ml-10 mb-10'>
                <h1 className='text-4xl font-bold font-poppins'>Selamat Datang</h1>
                <h3 className='text-2xl font-bold font-poppins'>di Halaman Admin Kitchen Craft</h3>
                <form className="w-[400px] mt-7">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search User" required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
            <div className='w-full bg-white rounded-md p-5'>
                <table className='w-full text-left border-collapse'>
                    <thead>
                        <tr className='border-b'>
                            <th className='p-2 font-poppins'>Name</th>
                            <th className='p-2 font-poppins'>Email</th>
                            <th className='p-2 font-poppins'>Number</th>
                            <th className='p-2 font-poppins'>Status</th>
                            <th className='p-2 font-poppins'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(items) && items.length > 0 ? (
                            items.map((item) => (
                                <tr key={item.id} className='border-b'>
                                    
                                    <td className='p-2 text-sm font-poppins'>{item.name}</td>
                                    <td className='p-2 text-sm font-poppins'>{item.email}</td>
                                    <td className='p-2 text-sm font-poppins'>{item.number}</td>
                                    <td className='p-2 text-sm font-poppins'>{item.status}</td>
                                    <td className='p-2'>
                                        <button className='bg-blue-700 text-sm text-white px-2 py-1 rounded' onClick={() => handleDeleteUser(item.id)}>Hapus</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='p-2 text-center'>No data available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default User;
