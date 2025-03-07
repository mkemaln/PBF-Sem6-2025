import logo from './logo.svg';
import Counter from './Counter';
import Greeting from './Greeting';
import TodoList from './ToDoList';
import './App.css';

import React, {useState} from 'react';

// Komponen App yang menggunakan Header, Main, dan Footer
function App() {
  return (
    <div style={{padding: 20}}>
      <Header />
      <Main />
      <Greeting name="Kemal" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Nama" />
      <input type="number" value={age} onChange={handleAgeChange} placeholder="Umur" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <p>{name}, berumur {age} tahun dan emailnya adalah {email}</p>
    </div>
  );
}

export default App;
