import React from "react"
import "../styles/styletable.css"
const Table = ({ usercontents, postUser, updateUser, deleteUserContent }) => {
	const showUpdateUserContent = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	const Row = ({ usercontent }) => {
		return (
			<>
				<div className='row'>
					<div>{usercontent.id}</div>
					<div>{usercontent.content}</div>
					<div>{usercontent.description}</div>
					<div className='buttons'>
						<button onClick={() => showUpdateUserContent(usercontent.id)}>Update</button>
						<button onClick={() => deleteUserContent(usercontent.id)}>Delete</button>
					</div>
				</div>
							</>
		)
	}

	return (
		<div className='table'>
			<div className='titles'>
				<div>id</div>
				<div>content</div>
				<div>description</div>
				
			</div>
			<div className='rows'>
				{usercontents && usercontents.map(u => <Row usercontent={u} key={u.id} />)}
			</div>
		</div>
	)
}

export default Table
