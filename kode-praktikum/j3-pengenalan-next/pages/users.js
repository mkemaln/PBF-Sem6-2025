import React from 'react';

const Users = ({ users }) => {    
    return (
        <div style={{ margin: '20px' }}>
            <h1>List Username, Email</h1>
            <ul>
                {users.map((user) => (
                    <div key={user.id}>
                        <li>
                            <a href={`/users/${user.id}`}>
                                <span style={{ fontWeight: 'bold' }} className="hover-effect">{user.username}</span>
                            </a>, {user.email}
                        </li>
                    </div>
                ))}
            </ul>
            <style jsx>{`
                .hover-effect:hover {
                    color: green;
                }
            `}</style>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default Users;
