import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/news_categories')
            .then(response => response.json())
            .then(json => setCategories(json))
    });

    return (
        <div>
            {
                categories.map(category => <p key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link>  </p>)
            }
        </div>
    );
};

export default LeftNav;