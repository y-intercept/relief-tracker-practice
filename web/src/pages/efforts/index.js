const React = require('react')
const {Link} = require('react-router')
//const xhr = require('xhr')
//const listPerson = require('../components/personlist')

const Efforts = React.createClass({
  getInitialState() {
    return {efforts: []}
  },
  componentDidMount() {
    this.props.allDocs((err, efforts) => {
      if (err)
        return console.log(err.message)
      this.setState({efforts})
    })
  },
  render() {
    const listEffort = (effort) => <li key={effort.id} className="dt w-100 bb b--black-05 pb2 mt2">
      <div className="dtc w2 w3-ns v-mid">
        {effort.picture
          ? <img src={`${effort.picture}`} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
          : <span className="f2 ba b--black-10 db br-100 w2 w3-ns h2 h3-ns tc pt2">{`${effort.name.charAt(0)}`}</span>}
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{effort.name}</h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">{effort.orgId}</h2>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr">
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
            <Link to={`/efforts/${effort.id}/edit`} className="link b black no-underline">Edit</Link>
          </button>
          <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60 ml1" type="submit">
            <Link to={`/efforts/${effort.id}/show`} className="link b black no-underline">Show</Link>
          </button>
        </form>
      </div>
    </li>

    return (
      <div className="pa4">
        <div className="tc">
          <Link to="/efforts/new" className="ml2 link b black underline-hover">Add New Relief Effort</Link>
        </div>
        <main className="mw6 center shadow-3 pa3 mv4 bg-washed-blue">
          <h1 className="f3 tc pt1">Our Relief Efforts</h1>
          <ul className="list pl0">
            {this.state.efforts.map(listEffort)}
          </ul>
        </main>
        <h1 className="f5 bold center mw5 tc">
          <Link to="/" className="link b black underline-hover">Home</Link>
        </h1>
      </div>
    )
  }
})

module.exports = Efforts
