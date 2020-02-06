import React, { Component } from 'react';

export default class createUser extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username : '',
			age : '',
		}
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeAge = this.onChangeAge.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeUsername(e) {
		this.setState({
			username : e.target.value
		});
	}

	onChangeAge(e) {
		this.setState({
			age : e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault() // stop default form submit
	
		const userData = {
			username : this.state.username,
			age : this.state.age,
		}

		console.log(userData)			
	}

	render() {
		return (
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username:</label>
						<input
                            type='text'
                            required
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
					</div>

					<div className="form-group">
						<label>Age : </label>
						<input type="text" className="form-control" value={this.state.age} onChange={this.onChangeAge} />
					</div>

					<div className='form-group'>
						<input type='submit' value='Create Exercise Log' className='btn btn-primary' />
					</div>

				</form>
			</div>
		);
	}
}