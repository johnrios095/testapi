import React, { useState, useEffect } from "react"
import Table from "./../components/Tablecontent"

import { httpHelper } from "../helpers/httpHelper"

const Contents = () => {
	const [usercontents, setUserContents] = useState(null)

	const url = "http://localhost:5000/api/Contents/getAll"
	const api = httpHelper()

	useEffect(() => {
		getUserContents()
	}, []) 

	const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUserContents())
			.catch(err => console.log(err)) 
	}

	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUserContents())
			.catch(err => console.log(err))
	}

	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUserContents())
			.catch(err => console.log(err))
	}

	const getUserContents = () => {
		api
			.get(`${url}`)
			.then(res => {
				setUserContents(res)
			})
			.catch(err => console.log(err))
	}

	if (!usercontents) return null

	return (
		<>
			<div className='all-users'>
				<h3>contents</h3>
				<Table
					usercontents={usercontents}
					setUserContents={setUserContents}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			</div>
		</>
	)
}


export default Contents;
