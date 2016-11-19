const React = require('react')
const { Link } = require('react-router')
const xhr = require('xhr')
//const listPerson = require('../components/personlist')


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
		const listPerson = (person) =>
			<li key={person.id} className="dt w-100 bb b--black-05 pb2 mt2">
	      <div className="dtc w2 w3-ns v-mid">
	        <img src={`${person.picture}`} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
	      </div>
	      <div className="dtc v-mid pl3">
	        <h1 className="f6 f5-ns fw6 lh-title black mv0">{person.firstName + ' ' + person.lastName}</h1>
	        <h2 className="f6 fw4 mt0 mb0 black-60">{person.email}</h2>
	      </div>
	      <div className="dtc v-mid">
	        <form className="w-100 tr">
	          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
							<Link to={`/persons/${person.id}/edit`}>Edit</Link>
						</button>
						<button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60 ml1" type="submit">
							<Link to={`/persons/${person.id}/show`}>Remove</Link>
						</button>
	        </form>
	      </div>
			</li>

		return (
			<div>
				<main className="mw6 center">
					<ul>
						{this.state.persons.map(listPerson)}
					</ul>
					<Link to="/persons/new" className="ml4">Add New Person</Link>
				</main>
			</div>
		)
	}
})

module.exports = Persons
