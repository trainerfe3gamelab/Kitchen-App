import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DetailUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [initialFormData, setInitialFormData] = useState({
        username: '',
        fullName: '',
        email: ''
    });
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: ''
    });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/admin/user/${id}`);
            setUser(response.data);
            setInitialFormData({
                username: response.data.username,
                fullName: response.data.fullName,
                email: response.data.email
            });
            setFormData({
                username: response.data.username,
                fullName: response.data.fullName,
                email: response.data.email
            });
        } catch (error) {
            console.error("Error fetching user details: ", error);
        }
    };

    const handleDeleteUser = async () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/admin/user/${id}`);
                if (response.status === 200) {
                    console.log("User deleted successfully.");
                    navigate('/'); // Navigate back to the user list
                } else {
                    console.error("Failed to delete user.");
                }
            } catch (error) {
                console.error("Error deleting user: ", error);
            }
        }
    };

    const handleEditUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/admin/user/${id}`, formData);
            if (response.status === 200) {
                setUser(response.data);
                setEditMode(false);
                alert("User updated successfully.");
                setInitialFormData(formData); // Update initialFormData to the latest data after successful update
            } else {
                console.error("Failed to update user.");
            }
        } catch (error) {
            console.error("Error updating user: ", error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCancel = () => {
        setFormData(initialFormData);
        setEditMode(false);
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='w-full bg-white rounded-md p-5'>
            <h1 className='text-2xl font-bold'>Detail User</h1>
            {editMode ? (
                <form onSubmit={handleEditUser}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full p-2 border rounded"
                        />
                    </div>
                    <button type="submit" className='bg-blue-700 text-sm text-white px-2 py-1 rounded mt-2'>Save</button>
                    <button type="button" className='bg-gray-500 text-sm text-white px-2 py-1 rounded ml-2 mt-2' onClick={handleCancel}>Cancel</button>
                </form>
            ) : (
                <>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Full Name:</strong> {user.fullName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <div>
                        <button className='bg-blue-700 text-sm text-white px-2 py-1 rounded' onClick={() => setEditMode(true)}>Edit</button>
                        <button className='bg-red-700 text-sm text-white px-2 py-1 rounded ml-2' onClick={handleDeleteUser}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default DetailUser;
