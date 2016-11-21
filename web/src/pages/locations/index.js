const React = require('react')
const {Link} = require('react-router')
const xhr = require('xhr')
//const listPerson = require('../components/personlist')

const Locations = React.createClass({
  getInitialState() {
    return {
			locations: []
		}
  },
  componentDidMount() {
    this.props.allDocs((err, locations) => {
      if (err)
        return console.log(err.message)
      this.setState({locations})
    })
  },
  render() {
    const listlocation = (location) => <li key={location.id} className="dt w-100 bb b--black-05 pb2 mt2">
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{location.name}</h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">{location.lat}</h2>
        <h2 className="f6 fw4 mt0 mb0 black-60">{location.long}</h2>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
            <Link to={`/locations/${location.id}/edit`} className="link b black no-underline">Edit</Link>
          </button>
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60 ml1" type="submit">
            <Link to={`/locations/${location.id}/show`} className="link b black no-underline">Show</Link>
          </button>
        </form>
      </div>
    </li>

    return (
      <div className="pa4">
        <div className="tc">
          <Link to="/locations/new" className="ml2 link b black underline-hover">Add New Location</Link>
        </div>
        <main className="mw6 center shadow-3 pa3 mv4 bg-washed-blue">
          <h1 className="f3 tc pt1">Locations</h1>
          <ul className="list pl0">
            {this.state.locations.map(listlocation)}
          </ul>
        </main>
        <h1 className="f5 bold center mw5 tc">
          <Link to="/" className="link b black underline-hover">Home</Link>
        </h1>
      </div>
    )
  }
})

module.exports = Locations
