import axios from "axios"
import { useState, useEffect } from "react"
import "./css/ToDoList.css";

export const ToDoList = () => {
    const [completedTodos, setCompletedTodos] = useState([])
	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState("")

	function handlePush() {
		if (todo !== "") {
			setTodos(todos.concat([todo]))
			setTodo("")
		}
	}
	function handleComplete(index) {
		axios.put(`http://localhost:8000/tasks/` + todos[index].id + `/done`).then(() => {
			handleGetTodos()
		})
	}
	function handleGetTodos() {
		axios.get("http://localhost:8000/tasks").then((res) => {
			let tmpCompletedTodos = []
			let tmpTodos = []
			for (let i = 0; i < res.data.length; i++) {
				if (res.data[i].done) {
					tmpCompletedTodos = tmpCompletedTodos.concat([
						{
							id: res.data[i].id,
							title: res.data[i].title,
						},
					])
				} else {
					tmpTodos = tmpTodos.concat([
						{
							id: res.data[i].id,
							title: res.data[i].title,
						},
					])
				}
			}
			setCompletedTodos(tmpCompletedTodos)
			setTodos(tmpTodos)
		})
	}
	useEffect(() => {
		handleGetTodos()
	}, [])
	function handlePush() {
		if (todo !== "") {
			axios.post("http://localhost:8000/tasks", {
					title: todo,
				}).then(() => {
				handleGetTodos()
			})
			setTodo("")
		}
	}
	function handleDelete(index) {
		axios.delete(`http://localhost:8000/tasks/` + completedTodos[index].id).then(() => {
			handleGetTodos()
		})
	}
	return (
		<div className="todoList">
			<h1 className="title">ToDoリスト</h1>
			<input value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button onClick={handlePush} className="button">
				登録
			</button>
			<h2>タスク一覧</h2>
			<h3>完</h3>
			<ul className="ul">
				{completedTodos.map((completedTodo, index) => (
					<li key={index} className="li">
						{completedTodo.title}
						<button onClick={() => handleDelete(index)} className="button">
							タスクを消す
						</button>
					</li>
				))}
			</ul>
			<h3>未完</h3>
			<ul className="ul">
				{todos.map((todo, index) => (
					<li key={index} className="li">
						{todo.title}
						<button onClick={() => handleComplete(index)} className="button">
							完了する
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}