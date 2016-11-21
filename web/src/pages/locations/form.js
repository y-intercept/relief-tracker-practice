const React = require('react')
const {Link, Redirect} = require('react-router')
const xhr = require('xhr')
const labelStyle = {
  display: 'block'
}

const LocationForm = React.createClass({
  getInitialState() {
    return {
      name: '',
      lat: '',
      long: '',
      success: false
    }
  },
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.id) {
      xhr.put('http://localhost:4000/locations/	' + this.state.id, {
        json: this.state
      }, (err, res, body) => {
        if (err)
          console.log(err.message)
        this.setState({success: true})
      })
    } else {
      xhr.post('http://localhost:4000/locations', {
        json: this.state
      }, (err, res, body) => {
        if (err)
          console.log(err.message)
        this.setState({success: true})
      })
    }
  },
  handleChange(field) {
    return e => {
      const newState = {}
      newState[field] = e.target.value
      this.setState(newState)
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/locations/' + this.props.params.id, {
      json: true
    }, (err, res, location) => {
      if (err)
        return console.log(err.message)
      this.setState(location)
    })
  },
  render() {
    const formState = this.state.id
      ? 'Edit'
      : 'New'
    return (
      <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center pa4">
        {this.state.success && this.state.id
          ? <Redirect to={`/locations/${this.state.id}/show`}/>
          : null
				}
        {this.state.success && !this.state.id
          ? <Redirect to={`/locations`}/>
          : null
				}
        <h3>{formState} Location Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label style={labelStyle}>Name</label>
            <input onChange={this.handleChange('firstName')} value={this.state.name} type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Latitude</label>
            <input onChange={this.handleChange('lat')} value={this.state.lat} type="text"/>
          </div>
          <div>
            <label style={labelStyle}>Longitude</label>
            <input onChange={this.handleChange('long')} value={this.state.long} type="email"/>
          </div>
          <button className="link b near-black no-underline">Save</button>
          <button>
            <Link to="/locations" className="link b near-black no-underline">Cancel</Link>
          </button>
          <button>
            <Link to="/" className="link b near-black no-underline">Home</Link>
          </button>
        </form>
      </div>
    )
  }
})

module.exports = LocationForm
