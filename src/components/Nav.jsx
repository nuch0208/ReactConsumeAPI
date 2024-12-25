import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
            <Link to="/edit/1">Edit</Link>  {/* ลิงก์ที่ถูกต้อง */}
            <Link to="/delete/1">Delete</Link>  {/* ลิงก์ที่ถูกต้อง */}
        </nav>
    )
}

export default Nav