const React = require('react')
const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

const ShowPerson = React.createClass({
	getInitialState() {
		return {
			person: {},
			removed: false
		}
	},
	componentDidMount() {
		if (this.props.params.id) {
			xhr.get('http://localhost:4000/persons/' +
				this.props.params.id, {
					json: true
				}, (err, res, person) => {
					if (err) return console.log(err.message)
					this.setState({person})
				})
		}
	},
	handleRemove(e) {
		e.preventDefault
		if (confirm('Are you sure?')) {
			xhr.del('http://localhost:4000/persons/' + this.state.person.id, {
				json: this.state.person
			}, (err, res, body) => {
				if (err) return console.log(err.message)
				this.setState({removed: true})
			})
		}
	},
	render () {
		return (
			<div>
				{ this.state.removed ? <Redirect to="/persons" /> : null }
				<h3>{this.state.person.firstName
					 + ' ' + this.state.person.lastName}
				</h3>
				<button><Link to={`/persons/${this.state.person.id}/edit`}>Edit Person</Link></button>
				<button onClick={this.handleRemove}>Remove</button>
				<button><Link to="/persons">Return</Link></button>

			</div>
		)
	}
})

module.exports = ShowPerson
