const React = require('react')
const {BrowserRouter, Match, Miss, Link} = require('react-router')
const Home = require('./pages/home')
const About = require('./pages/about')
const Persons = require('./pages/persons')
const ShowPerson = require('./pages/persons/show')
const PersonForm = require('./pages/persons/form')
const ServicePersons = require('./components/servicePersons')
const ServiceEfforts = require('./components/serviceEfforts')
const ServiceLocations = require('./components/serviceLocations')
const Efforts = require('./pages/efforts')
const EffortForm = require('./pages/efforts/form')
const ShowEffort = require('./pages/efforts/show')
const Locations = require('./pages/locations')
const LocationForm = require('./pages/locations/form')
const ShowLocation = require('./pages/locations/show')

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
        <div className="h-100">
          <Match exactly pattern="/" component={Home}/>
          <Match pattern="/about" component={About}/>
          <Match exactly pattern="/persons" component={ServicePersons(Persons)}/>
          <Match pattern="/persons/:id/show" component={ServicePersons(ShowPerson)}/>
          <Match exactly pattern="/persons/new" component={PersonForm}/>
          <Match pattern="/persons/:id/edit" component={PersonForm}/>
          <Match exactly pattern="/efforts" component={ServiceEfforts(Efforts)}/>
          <Match exactly pattern="/efforts/new" component={EffortForm}/>
          <Match pattern="/efforts/:id/show" component={ServiceEfforts(ShowEffort)}/>
          <Match pattern="/efforts/:id/edit" component={EffortForm}/>
          <Match exactly pattern="/locations" component={ServiceLocations(Locations)}/>
          <Match pattern="/locations/new" component={LocationForm}/>
          <Match pattern="/locations/:id/show" component={ServiceLocations(ShowLocation)}/>
          <Match pattern="/locations/:id/edit" component={LocationForm}/>

          <Miss component={NoMatch}/>
        </div>
      </BrowserRouter>
    )
  }
})

module.exports = App
