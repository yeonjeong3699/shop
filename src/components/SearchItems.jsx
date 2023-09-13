import React, { useEffect, useState } from "react";
import { searchProducts } from "../api/firebase";
import SearchList from "./SearchList";

export default function SearchItems() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (query.trim() === '') { //trim: 공백 제거
            setResult([]);
        } else {
            searchProducts(query)
                .then((text) => {
                    setResult(text);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [query])

    const inputEvent = (e) => {
        setQuery(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="container">
            <input type="text" value={query} onChange={inputEvent} />

            {/* {result.length > 0 && (
                <SearchList result={result} />
            )} */}

            <ul>
                {result.map((product) => (
                    <SearchList key={product.id} products={product} />
                ))}
            </ul>
        </div>
    )
}