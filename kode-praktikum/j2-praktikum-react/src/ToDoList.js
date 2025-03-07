import React, { useState } from "react";

// Melakukan destrukturisasi pada props
function TodoItem({ todo, index, handleDelete }) {
    return <li>
        <span style={{marginRight: 20}}>{todo}</span>
        <button onClick={() => handleDelete(index)}>Hapus</button>
        </li>;
}

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    // Menangani perubahan input pada form
    function handleChange(e) {
        setText(e.target.value);
    }

    // Menangani submit form untuk mengirim ke fungsi handleChange
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, text]);
        setText("");
    }

    // Menghapus todo/ pekerjaan berdasarkan index
    function handleDelete(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div>
            <h1>Todo List</h1>

            {/* melakukan perulangan pada array todos untuk menjadi TodoItem */}
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index} handleDelete={handleDelete} />
                ))}
            </ul>

            {/* form untuk menambahkan todo */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} placeholder="tambah pekerjaan"/>
                <button type="submit">Tambah</button>
            </form>
        </div>
    );
}

export default TodoList;