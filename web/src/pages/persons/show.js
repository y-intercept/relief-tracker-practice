const React = require('react')
const xhr = require('xhr')
const { Link } = require('react-router')

const ShowPerson = React.createClass({
	getInitialState() {
		return {
			person: {}
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
	render () {
		return (
			<div>
				<h3>{this.state.person.firstName
					 + ' ' + this.state.person.lastName}
				</h3>
				<Link to={`/persons/${this.state.person.id}/edit`}>Edit Person</Link>
				<Link to="/persons">Return</Link>

			</div>
		)
	}
})

module.exports = ShowPerson
