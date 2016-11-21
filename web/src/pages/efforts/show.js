const React = require('react')
const xhr = require('xhr')
const { Link, Redirect } = require('react-router')

const ShowEffort = React.createClass({
	getInitialState() {
		return {
			effort: {},
			removed: false
		}
	},
	componentDidMount() {
		this.props.get(this.props.params.id, (err, effort) => {
			if (err) return console.log(err.message)
			this.setState({effort})
		})
	},
	handleRemove (e) {
		e.preventDefault()
		if (confirm('Click OK to remove'))
			this.props.remove(this.props.params.id, this.props.effort, (err, effort) => {
				if (err) return console.log(err.message)
				this.setState({ removed: true })
			})
	},
	render() {
		console.log(this.state.effort)
		return (
			<div>
				{this.state.removed ? <Redirect to="/efforts" /> : null }
				<h1 className="f4 bold center mw5 tc">Relief Effort</h1>
				<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
					<img src={this.state.effort.picture} className="db w-100 br2 br--top" alt={this.state.effort.name}></img> {/*? <img src={`${this.state.effort.picture}`} className="db w-100 br2 br--top"/> : <span className="db w-100 br2 br--top">{`${this.state.effort.name.charAt(0)}`}</span>} */}
					<hr className="mw3 bb bw1 b--black-10"></hr>
					<div className="pa2 ph3-ns pb3-ns">
				    <div className="dt w-100 mt1">
				      <div className="dtc">
				        <h1 className="f5 f4-ns mv0">{this.state.effort.name}</h1>
				      </div>
				      <div className="dtc tr">
				        <h2 className="f5 mv0">{this.state.effort.phase}</h2>
				      </div>
				    </div>
				    <p className="f6 lh-copy measure mt2 mid-gray">
				      {this.state.effort.orgId}
				    </p>
				  </div>
					<div className="ma2 tc">
						<button><Link to="/efforts" className="link b black no-underline">Return</Link></button>
						<button><Link to="/" className="link b black no-underline">Home</Link></button>
						<button onClick={this.handleRemove} className="link b black no-underline">Remove</button>
					</div>
				</article>
				{/* <button><Link to="/efforts">Return</Link></button>
				<button><Link to="/">Home</Link></button>
				<button onClick={this.handleRemove}>Remove</button> */}
			</div>
		)
	}
})

module.exports = ShowEffort
