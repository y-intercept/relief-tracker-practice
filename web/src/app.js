const React = require('react')
const { BrowserRouter, Match, Miss, Link } = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons')
const ShowPerson = require('./pages/persons/show')

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
				<div>
					<Match exactly pattern="/" component={Home} />
					<Match pattern="/about" component={About} />
					<Match exactly pattern="/persons" component={Persons} />
					<Match pattern="/persons/:id/show" component={ShowPerson} />
					<Miss component={NoMatch} />
				</div>
		 </BrowserRouter>
		)
	}
})

module.exports = App
