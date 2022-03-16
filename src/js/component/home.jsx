import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import FormTodo from "./fromtodo";
import Todo from "./todo";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const markTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isDone = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container border border-dark text-center w-25">
			<h1 className="fw-light">To-Do List</h1>
			<FormTodo addTodo={addTodo} />
			<div>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						markTodo={markTodo}
						removeTodo={removeTodo}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
