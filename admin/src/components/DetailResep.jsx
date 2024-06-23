// DetailResep.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DetailResep = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchRecipeDetail(id);
        }
    }, [id]);

    const fetchRecipeDetail = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/admin/recipe/${id}`);

            setItem(response.data.recipe); // Set the fetched data to state
            
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const handleDeleteResep = async (id) => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/admin/recipe/${id}`);
    
                if (response.status === 200) {
                    // Hapus dari state items
                    const updatedItems = item.filter(item => item._id !== id);
                    setItem(updatedItems);
                    console.log("Recipe deleted successfully.");
                } else {
                    console.error("Failed to delete recipe.");
                }
            } catch (error) {
                console.error("Error deleting recipe: ", error);
            }
        }
    };

    function extractYouTubeID(url) {
        const regexList = [
          /youtu\.be\/([a-zA-Z0-9_-]+)/,
          /youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
          /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
        ];
      
        for (const regex of regexList) {
          const match = url.match(regex);
          if (match && match[1]) {
            return match[1];
          }
        }
      
        return null;
      }
      
    
    return (
    <div className='w-full bg-white rounded-lg shadow-md p-5'>
        {item ? (
            <div>
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>{item.title}</h1>
                <img src={item.image} alt={item.title} className='w-full h-auto rounded-lg object-cover' style={{ maxHeight: "450px" }} />
                <div className='text-gray-700 mt-4'>
                    <p className='mb-2'><strong>Category:</strong> {item.category}</p>
                    <p className='mb-2'><strong>Total Time:</strong> {item.total_time}</p>
                    <p className='mb-2'><strong>Description:</strong><br />{item.description}</p>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Ingredients:</h2>
                    <ul className='list-disc pl-5 mt-2'>
                        {item.ingredients && item.ingredients.map((ingredient, index) => (
                            <li key={index} className='mb-1'>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Steps:</h2>
                    <ol className='list-decimal pl-5 mt-2 no-numbering'>
                        {item.steps && item.steps.step.map((step, index) => (
                            <li key={index} className='mb-1'>{step.description}</li>
                        ))}
                    </ol>
                </div>
                <div className='mt-6'>
                    <h2 className='text-2xl font-bold text-gray-800'>Watch Video:</h2>
                    {item.steps.video && (
                        <iframe className='rounded-md w-full mx-auto mt-4'
                            height="650" 
                            src={`https://www.youtube.com/embed/${extractYouTubeID(item.steps.video)}`}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    )}
                </div>

                <div className='flex justify-end mt-6'>
                    <button
                        onClick={() => handleDeleteResep(id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Delete Recipe
                    </button>
                </div>
            </div>
            
        ) : (
            <p className='text-center text-gray-800'>Loading...</p>
        )}
    </div>
    );
};

export default DetailResep;
