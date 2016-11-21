const React = require('react')
const {Link} = require('react-router')

const Home = React.createClass({
  render() {
    return (
      <div className="avenir pa4">
        <h1 className="f3 bold center mw5 tc">Relief Tracker</h1>
        <ul className="list pl0 ml0 center mw5 ba b--light-silver br3 bg-washed-blue">
          <li className="ph3 pv2 bb b--light-silver tc">
            <Link to="/persons" className="link b black no-underline underline-hover">Persons</Link>
          </li>
          <li className="ph3 pv2 bb b--light-silver tc">
            <Link to="/efforts" className="link b black no-underline underline-hover">Relief Efforts</Link>
          </li>
          <li className="ph3 pv2 bb b--light-silver tc">
            <Link to="/locations" className="link b black no-underline underline-hover">Locations</Link>
          </li>
          <li className="ph3 pv2 bb b--light-silver tc">
            <Link to="/about" className="link b black no-underline underline-hover">About</Link>
          </li>
        </ul>
        <h1 className="f5 bold center mw5 tc">Home</h1>
      </div>
    )
  }
})

module.exports = Home
