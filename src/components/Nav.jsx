import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <header>
            <Link to='/'>
                <h1>title</h1>
            </Link>

            <nav>
                <Link to='/items'>All Items</Link>
                <Link to='/items/new'>New</Link>
                <Link to='/cart'>장바구니</Link>
            </nav>
        </header>
    )
}