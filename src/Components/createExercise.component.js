import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class createExercise extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username : '',
			description : '',
			duration : 0,
			date : new Date(),
			users : []
		}
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangedescription = this.onChangedescription.bind(this);
		this.onChangeduration = this.onChangeduration.bind(this);
		this.onChangedate = this.onChangedate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			users : ['test user'],
			username: 'test user'
		});
	}

	onChangeUsername(e) {
		this.setState({
			username : e.target.value
		});
	}

	onChangedescription(e) {
		this.setState({
			description : e.target.value
		});
	}

	onChangeduration(e) {
		this.setState({
			duration : e.target.value
		});
	}

	onChangedate(date) {
		this.setState({
			date : date
		});
	}

	onSubmit(e) {
		e.preventDefault() // stop default form submit
		console.log('s')

		const exercise = {
			username : this.state.username,
			description : this.state.description,
			duration : this.state.duration,
			date : this.state.date,
		}

		console.log(exercise)

		axios.post('http://localhost:5000/exercises/add', exercise)
			.then(res => alert(res.data));
				window.location = '/';
		
	}


	render() {
		return (
			<div>
				<h3>Create New Exercise</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username:</label>
						<select ref='userInput'
							required
							className='form-control'
							value={this.state.username}
							onChange={this.onChangeUsername}>
							{
								this.state.users.map(user => {
									return <option
										key={user}
										value={user}>{user}

									</option>
								})
							}
						</select>
					</div>

					<div className="form-group">
						<label>Description : </label>
						<input type="text" className="form-control" value={this.state.description} onChange={this.onChangedescription} />
					</div>

					<div className="form-group">
						<label>Duration : </label>
						<input type='text' className="form-control" value={this.state.duration} onChange={this.onChangeduration} />
					</div>

					<div className="form-group">
						<label>Date : </label>
						<div>
							<DatePicker selected={this.state.date} onChange={this.onChangedate}
							/>
						</div>
					</div>

					<div className='form-group'>
						<input type='submit' value='Create Exercise Log' className='btn btn-primary' />
					</div>

				</form>
			</div>
		);
	}
}