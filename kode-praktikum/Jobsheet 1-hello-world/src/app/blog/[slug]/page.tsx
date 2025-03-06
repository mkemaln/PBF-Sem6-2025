'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const BlogArticle: React.FC = () => {
    const { slug } = useParams();

    return (
        <div>
            <h1>Blog Article: {slug}</h1>
            <p>
                Welcome to the blog article page. This is a placeholder for the blog article content.
                You can replace this with your actual blog content.
            </p>
        </div>
    );
};

export default BlogArticle;
