import React, { useState, useEffect } from "react"
import Table from "./../components/Tablecontent"
import Form from "./../components/Formcontent"
import { httpHelper } from "../helpers/httpHelper"

const Contents = () => {
	const [usercontents, setUserContents] = useState(null)

	const url = "http://localhost:5000/api/Contents"
	const api = httpHelper()

	useEffect(() => {
		getUserContents()
	}, []) 

	const postUsercontest = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUserContents())
			.catch(err => console.log(err)) 
	}

	const updateUsercontest = (id, user) => {
       		api
			.put(`${url}/updateContent/${id}`, { body: user })
			.then(res => getUserContents())
			.catch(err => console.log(err))

	}

	const deleteUsercontest = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUserContents())
			.catch(err => console.log(err))
	}

	const getUserContents = () => {
		api
			.get(`${url}`+ '/getAll')
			.then(res => {
				setUserContents(res)
			})
			.catch(err => console.log(err))
	}

	if (!usercontents) return null

	return (
		<>
    	<Form postUser={postUsercontest} />
		
			<div className='all-users'>
				<h3>contents</h3>
				<Table
					usercontents={usercontents}
					setUserContents={setUserContents}
					postUser={postUsercontest}
					updateUsercontest={updateUsercontest}
					deleteUser={deleteUsercontest}
				/>
			</div>
		</>
	)
}


export default Contents;
