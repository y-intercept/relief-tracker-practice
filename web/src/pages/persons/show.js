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
		this.props.get(this.props.params.id, (err, person) => {
			if (err) return console.log(err.message)
			this.setState({person})
		})
	},
	handleRemove(e) {
		e.preventDefault
		if (confirm('Are you sure?')) {
			this.props.remove(this.props.params.id, this.props.person, (err, person) => {
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
