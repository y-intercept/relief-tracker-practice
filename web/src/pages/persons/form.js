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
		if (this.state.id) {
			xhr.put('http://localhost:4000/persons/	' + this.state.id, {
				json: this.state
			}, (err, res, body) => {
				if (err) console.log(err.message)
				this.setState({ success: true })
			})
		} else {
			xhr.post('http://localhost:4000/persons', {
				json: this.state
			}, (err, res, body) => {
				if (err) console.log(err.message)
				this.setState({ success: true })
			})
		}
	},
	handleChange (field) {
		return e => {
			const newState = {}
			newState[field] = e.target.value
			this.setState(newState)
		}
	},
	componentDidMount() {
		xhr.get('http://localhost:4000/persons/' +
			this.props.params.id, {json:true}, (err, res, person) => {
				if (err) return console.log(err.message)
				this.setState(person)
			})
	},
	render() {
		const formState = this.state.id ? 'Edit' : 'New'
		return (
			<div>
				{ this.state.success && this.state.id ?
					<Redirect to={`/persons/${this.state.id}/show`} /> : null
				}
				{ this.state.success && !this.state.id ?
					<Redirect to={`/persons`} /> : null
				}

				<h3>{formState} Person Form</h3>
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
						<button>Save</button>
						<button><Link to="/persons">Cancel</Link></button>
					</form>
			</div>
		)
	}
})

module.exports = PersonForm
