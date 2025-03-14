import { useRouter } from "next/router";

const UserDetail = ({ user }) => {
  return (
    <ul style={{ margin: '20px' }}>
        <h1>User Detail</h1>
        <div key={user.id}>
            <li>Data from @{user.username}</li>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
        </div>
    </ul>
  );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { slug: user.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

export default UserDetail;
