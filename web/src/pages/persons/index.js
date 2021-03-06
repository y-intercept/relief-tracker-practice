const React = require('react')
const { Link } = require('react-router')
const xhr = require('xhr')


const Persons = React.createClass({
	getInitialState() {
		return {
			persons: []
		}
	},
	componentDidMount() {
		this.props.allDocs((err, persons) => {
			if (err) return console.log(err.message)
			this.setState({persons})
		})
	},
	render() {
		const listPerson = person =>
			<li key={person.id}>
				<Link to={`persons/${person.id}/show`}> {/* template string format */}
				{person.firstName + ' ' + person.lastName}
				</Link>
			</li>
		return (
			<div>
				<h2>TODO: Persons List</h2>
				<Link to="/persons/new">Add New Person</Link>
				<ul>
					{this.state.persons.map(listPerson)}
				</ul>
				<Link to="/">Home</Link>
			</div>
		)
	}
})

module.exports = Persons
