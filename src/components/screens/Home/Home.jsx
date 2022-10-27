import React, { useState } from 'react'
import CreateTodoField from '../Create-todo/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
	{
		_id: 'wdadw23r34w',
		title: 'Make a Workout-App',
		isCompleted: false,
	},
	{
		_id: 'wwdadwwff',
		title: 'Learn Tailwind',
		isCompleted: false,
	},
	{
		_id: 'we2ght44',
		title: 'Make a tasks in CodeWars',
		isCompleted: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const change = [...todos]
		const current = change.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(change)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

	return (
		<div className=' text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo App</h1>
			{todos.map(item => (
				<TodoItem
					key={item._id}
					item={item}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
			<CreateTodoField setTodos={setTodos} />
		</div>
	)
}

export default Home
