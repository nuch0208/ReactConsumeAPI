import Nav from "./Nav";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Add() {

    const [newGame, setNewGame] = useState({
        title: '',
        platform: '',
        developer: '',
        publisher: ''
      });

      const navigate = useNavigate();  // Initialize useNavigate
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewGame({
          ...newGame,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5156/api/VideoGame', newGame)
          .then((res) => {
            console.log('Game added:', res.data);
            setNewGame({
              title: '',
              platform: '',
              developer: '',
              publisher: ''
            });
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <>
            <Nav />
            <div>
            <h3>Add New Video Game</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={newGame.title} onChange={handleChange} placeholder="Title" required />
                <input type="text" name="platform" value={newGame.platform} onChange={handleChange} placeholder="Platform" required />
                <input type="text" name="developer" value={newGame.developer} onChange={handleChange} placeholder="Developer" required />
                <input type="text" name="publisher" value={newGame.publisher} onChange={handleChange} placeholder="Publisher" required />
                <button type="submit">Add Game</button>
            </form>
            </div>
        </>
    )
}

export default Add