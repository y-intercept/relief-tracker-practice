const React = require('react')
const xhr = require('xhr')
const {Link, Redirect} = require('react-router')

const ShowLocation = React.createClass({
  getInitialState() {
    return {location: {}, removed: false}
  },
  componentDidMount() {
    this.props.get(this.props.params.id, (err, location) => {
      if (err)
        return console.log(err.message)
      this.setState({location})
    })
  },
  handleRemove(e) {
    e.preventDefault()
    if (confirm('Click OK to remove'))
      this.props.remove(this.props.params.id, this.props.location, (err, location) => {
        if (err)
          return console.log(err.message)
        this.setState({removed: true})
      })
  },
  render() {
    console.log(this.state.location)
    return (
      <div>
        {this.state.removed
          ? <Redirect to="/locations"/>
          : null}
        <h1 className="f4 bold center mw5 tc">Relief location</h1>
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <hr className="mw3 bb bw1 b--black-10"></hr>
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">{this.state.location.name}</h1>
              </div>

            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              {this.state.location.lat}
              {this.state.location.long}

            </p>
          </div>
          <div className="ma2 tc">
            <button>
              <Link to="/locations" className="link b black no-underline">Return</Link>
            </button>
            <button>
              <Link to="/" className="link b black no-underline">Home</Link>
            </button>
            <button onClick={this.handleRemove} className="link b black no-underline">Remove</button>
          </div>
        </article>
        {/* <button><Link to="/locations">Return</Link></button>
				<button><Link to="/">Home</Link></button>
				<button onClick={this.handleRemove}>Remove</button> */}
      </div>
    )
  }
})

module.exports = ShowLocation
