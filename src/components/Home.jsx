import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // ประกาศตัวแปร navigate

    useEffect(() => {
        axios.get('http://localhost:5156/api/VideoGame')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch data');
                setLoading(false);
                console.log(err);
            });
    }, []);


    // Handle delete request (DELETE request)
    const handleDelete = (id) => {
        // Show confirmation dialog before deleting
        const isConfirmed = window.confirm("Are you sure you want to delete this game?");
        if (isConfirmed) {
            // Proceed with delete if confirmed
            axios.delete(`http://localhost:5156/api/VideoGame/${id}`)
                .then(() => {
                    // Remove the deleted game from the state
                    setData(data.filter(game => game.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                    setError('Failed to delete game');
                });
        }
        
    };

    return (
        <>
            <Nav />
            <div>
                <h2>Video Games List</h2>

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Platform</th>
                            <th>Developer</th>
                            <th>Publisher</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={i}>
                                <td>{d.title}</td>
                                <td>{d.platform}</td>
                                <td>{d.developer}</td>
                                <td>{d.publisher}</td>
                                <td>
                                    {/* <Link to={`/edit/${d.id}`}>Edit</Link> */}
                                    <button onClick={() => navigate(`/edit/${d.id}`)}>Edit</button>
                                </td>
                                <td>
                                    {/* Add delete button with onClick event */}
                                    <button onClick={() => handleDelete(d.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;
