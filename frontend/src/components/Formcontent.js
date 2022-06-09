import React, { useState } from "react"

const Form = ({ userData = {}, postUsercontest, updateUsercontest }) => {
	const [usercontents, setUser] = useState({
		id: userData.id ?? "",
		content: userData.content ?? "",
		description: userData.description ?? ""
	})

	const handleValue = e => {
		setUser({ ...usercontents, [e.target.name]: e.target.value })
	}

	const submitUser = e => {
		e.preventDefault()

		if (userData.id!==undefined) {
			updateUsercontest(userData.id, usercontents)
		} else {
			
			postUsercontest(usercontents)
		}
	}

	return (
		<form onSubmit={submitUser} className='row'>
			<input
				type='hidden'
				name='id'
				value={usercontents.id}
				placeholder='id'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='content'
				value={usercontents.content}
				placeholder='content'
				onChange={e => handleValue(e)}
			/>
			<input
				type='text'
				name='description'
				value={usercontents.description}
				placeholder='Description'
				onChange={e => handleValue(e)}
			/>
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new content user" : "Save content "}`}
			/>
		</form>
	)
}

export default Form
