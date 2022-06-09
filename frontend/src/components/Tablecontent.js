import React from "react"
import "../styles/App.css"
import Form from "./Formcontent"

const Table = ({ usercontents, postUsercontents, updateUsercontest, deleteUserContent }) => {
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
					<div className={`hide-form show-form-${usercontent.id}`}>
					<Form userData={usercontent} postUsercontents={postUsercontents} updateUsercontest={updateUsercontest} />
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
