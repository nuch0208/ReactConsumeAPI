import Nav from "./Nav";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Import necessary hooks
import axios from 'axios';


    function Edit() {

        const { id } = useParams(); // Get the id from the URL
        const [game, setGame] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            // Fetch the game data to edit using the id
            axios.get(`http://localhost:5156/api/VideoGame/${id}`)
            .then((response) => {
                setGame(response.data);  // Assuming response.data contains the game object
            })
            .catch((error) => {
                console.log(error);
                // Handle error if the game is not found
            });
        }, [id]);

        const handleSubmit = (e) => {
            e.preventDefault();
            // PUT request to update the game
            axios.put(`http://localhost:5156/api/VideoGame/${id}`, game)
            .then((response) => {
                navigate('/'); // Redirect to the home page after successful edit
            })
            .catch((error) => {
                console.log(error);
            });
        };

        if (!game) return <div>Loading...</div>;

    return (
        <>
            <Nav />
            <div>
            <h3>Edit Game</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={game.title}
                onChange={(e) => setGame({ ...game, title: e.target.value })}
                placeholder="Title"
                required
                />
                <input
                type="text"
                value={game.platform}
                onChange={(e) => setGame({ ...game, platform: e.target.value })}
                placeholder="Platform"
                required
                />
                <input
                type="text"
                value={game.developer}
                onChange={(e) => setGame({ ...game, developer: e.target.value })}
                placeholder="Developer"
                required
                />
                <input
                type="text"
                value={game.publisher}
                onChange={(e) => setGame({ ...game, publisher: e.target.value })}
                placeholder="Publisher"
                required
                />
                <button type="submit">Save Changes</button>
            </form>
            </div>
        </>
    )
}

export default Edit