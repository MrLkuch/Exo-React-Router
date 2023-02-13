import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

export default function Blog(props) {
    const { blogs } = props;

    const { id } = useParams();

    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog) return <pre>Le blog est introuvable</pre>
    return (
        <div className='blog-card page'>
            <h1 className='blog-card__title'>Article N°{blog.id}</h1>
            <h2 className='blog-card__title'>{blog.title}</h2>
            <p className='blog-card__description'>{blog.description}</p>
        </div>
    )
}
