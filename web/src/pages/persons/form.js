const React = require('react')
const { Link, Redirect } = require('react-router')
const xhr = require('xhr')
const labelStyle = { display: 'block'}

const PersonForm = React.createClass({
	getInitialState() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			success: false
		}
	},
	handleSubmit (e) {
		e.preventDefault()
		xhr.post('http://localhost:4000/persons', {
			json: this.state
		}, (err, res, body) => {
			if (err) console.log(err.message)
			this.setState({ success: true })
		})
	},
	handleChange (field) {
		return e => {
			const newState = {}
			newState[field] = e.target.value
			this.setState(newState)
		}
	},
	render() {
		return (
			<div>
				{ this.state.success ? <Redirect to="/persons" /> : null }
				<h3>New Person Form</h3>
					<form onSubmit={this.handleSubmit}>
						<div>
							<label style={labelStyle}>First Name</label>
							<input onChange={this.handleChange('firstName')}
								value={this.state.firstName}
								type="text"/>
						</div>
						<div>
							<label style={labelStyle}>Last Name</label>
							<input onChange={this.handleChange('lastName')}
								value={this.state.lastName}
								type="text"/>
						</div>
						<div>
							<label style={labelStyle}>Email</label>
							<input onChange={this.handleChange('email')}
								value={this.state.email}
								type="email"/>
						</div>
						<div>
							<label style={labelStyle}>Phone Number</label>
							<input onChange={this.handleChange('phone')}
								value={this.state.phone}
								type="text"/>
						</div>
						<button>Create</button>
						<Link to="/persons">Cancel</Link>
					</form>
			</div>
		)
	}
})

module.exports = PersonForm
