const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons')
const ShowPerson = require('./pages/persons/show')
const PersonForm = require('./pages/persons/form')
const Service = require('./components/service')

const NoMatch = () => (
	<div>
		<h3>Page Not Found</h3>
		<Link to="/">Home</Link>
	</div>
)

const App = React.createClass({
	render() {
		return (
			<BrowserRouter>
				<div className="bg-light-blue">
					<Match exactly pattern="/" component={Home} />
					<Match pattern="/about" component={About} />
					<Match exactly pattern="/persons" component={Service(Persons)} />
					<Match pattern="/persons/:id/show" component={Service(ShowPerson)} />
					<Match exactly pattern="/persons/new" component={PersonForm} />
					<Match pattern="/persons/:id/edit" component={PersonForm} />
					<Miss component={NoMatch} />
				</div>
		 </BrowserRouter>
		)
	}
})

module.exports = App
