import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList(props) {
    // const blogs = props.blogs;
    console.log(props)
    const { blogs } = props;

    return (
        <div className="container">
            {
                blogs.map((blog, index) => {
                    return <Link to={`/blog/${blog.id}`} className='blog-card' key={index}>
                        <h3 className="blog-card__title">{blog.title}</h3>
                        <p className="blog-card__description">{blog.description.substr(0, blog.description.length / 3) + " [...]"}</p>
                    </Link>
                })
            }


        </div>
    )
}
