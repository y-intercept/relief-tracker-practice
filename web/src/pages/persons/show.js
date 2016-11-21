const React = require('react')
const xhr = require('xhr')
const {Link, Redirect} = require('react-router')

const ShowPerson = React.createClass({
  getInitialState() {
    return {person: {}, removed: false}
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (err, person) => {
      if (err)
        return console.log(err.message)
      this.setState({person})
    })
  },
  handleRemove(e) {
    e.preventDefault
    if (confirm('Are you sure?')) {
      this.props.remove(this.props.params.id, this.props.person, (err, person) => {
        if (err)
          return console.log(err.message)
        this.setState({removed: true})
      })
    }
  },
  render() {
    return (
      <div className="pa4 avenir">
        {this.state.removed
          ? <Redirect to="/persons"/>
          : null}
        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
          <div className="tc">
            <img src={this.state.person.picture} className="br-100 h3 w3 dib"></img>
            <h1 className="f4">{this.state.person.firstName + " " + this.state.person.lastName}</h1>
            <hr className="mw3 bb bw1 b--black-10"></hr>
          </div>
          <p className="lh-copy measure center f6 black-70 tc">
            {this.state.person.email}
          </p>
          <button>
            <Link to={`/persons/${this.state.person.id}/edit`} className="no-underline">Edit</Link>
          </button>
          <button onClick={this.handleRemove} className="">Remove</button>
          <button>
            <Link to="/persons" className="no-underline">Return</Link>
          </button>
        </article>
      </div>
    )
  }
})

module.exports = ShowPerson
