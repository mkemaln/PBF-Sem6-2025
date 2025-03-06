'use client';

import React from 'react';
import { useState } from 'react';

const BlogPage: React.FC = () => {

    const posts = [
        { id: 1, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://i.imgur.com/aDkkB1A.jpeg', },
        { id: 3, title: 'Third Post', content: 'This is the content of the third post.', imageUrl: 'https://i.imgur.com/Ck4Ml8D.jpeg', },
        { id: 4, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', },
        { id: 5, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://i.imgur.com/aDkkB1A.jpeg', },
        { id: 6, title: 'Third Post', content: 'This is the content of the third post.', imageUrl: 'https://i.imgur.com/Ck4Ml8D.jpeg', },
        { id: 7, title: 'First Post', content: 'This is the content of the first post.', imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg', },
        { id: 8, title: 'Second Post', content: 'This is the content of the second post.', imageUrl: 'https://i.imgur.com/aDkkB1A.jpeg', },
        { id: 9, title: 'Third Post', content: 'This is the content of the third post.', imageUrl: 'https://i.imgur.com/Ck4Ml8D.jpeg', },
    ];

    return (
        <div className={`container mx-auto p-4`}>
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            {/* <div className='row-start-4 flex gap-4 flex-wrap'> */}
            <div className='grid grid-cols-4 gap-4'>
            {posts.map(post => (
                <a key={post.id} href={`http://localhost:3000/blog/${post.id}`} rel="noopener noreferrer" className="bg-white text-black border-2 border-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105 dark:bg-black dark:text-white dark:border-gray-200 dark:hover:bg-gray-100 dark:hover:text-black transition duration-500">
                    <img className='w-full h-48 object-cover rounded-t-lg' src={post.imageUrl} alt="" />
                    <div className="px-4 py-2 text-2xl font-semibold">{post.title}</div>
                    <p className="px-4 pb-2 text-gray-500">{post.content}</p>
                </a>
            ))}
            </div>
        </div>
    );
};

export default BlogPage;