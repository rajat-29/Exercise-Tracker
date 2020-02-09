import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
	<tr>
		<td>{props.exercise.username}</td>
		<td>{props.exercise.description}</td>
		<td>{props.exercise.duration}</td>
		<td>{props.exercise.date.substring(0, 10)}</td>
		<td>
			
		</td>
	</tr>
)

export default class ExerciseList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			exercises: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/exercises/getExercises')
			.then(res => {
				console.log(res);
				this.setState({
					exercises: res.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	exerciseList() {
		return this.state.exercises.map(currentexercise => {
			return <Exercise exercise={currentexercise} key={currentexercise._id} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Logged Exercises</h3>
				<table className='table'>
					<thead className='thead-light'>
						<tr>
							<th>UserName</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.exerciseList()}
					</tbody>
				</table>
			</div>
		);
	}
}