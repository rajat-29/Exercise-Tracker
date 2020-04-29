import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to='/' className='navbar-brand'>Exercise Tracker</Link>
				<div className='collpase navbar-collapse'>
					<ul className ='navbar-nav mr-auto'>
						<li className='navbar-item'>
							<Link to='/' className='nav-link'>Exercise</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/create' className='nav-link'>Create Exercise</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/user' className='nav-link'>Create User</Link>
						</li>

						<NavDropdown title="Categories" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="#action/3.1">Add Category</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Manage Category</NavDropdown.Item>
      					</NavDropdown>


					</ul>
				</div>
			</nav>
		);
	}
}