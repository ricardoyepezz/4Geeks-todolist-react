import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [text, setText] = useState("");
	const [text2, setText2] = useState([]);

	return (
		<div className="container border border-dark text-center w-25">
			<h1 className="fw-light">To-Do List</h1>

			<div class="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Add a task!"
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
				<button
					class="btn btn-outline-secondary"
					type="button"
					onClick={() => {
						setText2([...text2, text]);
					}}>
					+
				</button>
			</div>

			{text2.map((text, indice) => {
				return <p key={indice}>{text}</p>;
			})}
		</div>
	);
};

export default Home;