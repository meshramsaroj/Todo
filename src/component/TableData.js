import React from 'react'

import { Table, Button } from 'reactstrap';


const TableData =() => {
	const Book =[
		{
			id:"1",
			bookTitle:"Java",
			bookRating: "4.3",

		},
		{
			id:"2",
			bookTItle:"Nest.js",
			bookRating: "4.5",

		},
		{
			id:"3",
			bookTitle:"CQRS",
			bookRating: "4.8",

		},
		{
			id:"4",
			bookTitle:"React",
			bookRating: "5",

		},
	]
	return (
		<div className="container" >

			<h1>Book App</h1>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Rating</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{Book.id}</td>
						<td>{Book.bookTItle}</td>
						<td>{Book.bookRating}</td>
						<td>
							<Button color="success">Edit</Button>
							<Button color="danger">Delete</Button>
						</td>
					</tr>
				</tbody>
			</Table>

		</div>
	)
}

export default TableData
