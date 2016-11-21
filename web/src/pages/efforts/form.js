const React = require('react')
const { Link, Redirect } = require('react-router')
const xhr = require('xhr')
const labelStyle = { display: 'block'}


const EffortForm = React.createClass({
	getInitialState() {
		return {
			name: '',
			orgId: '',
			phase: '',
			country: '',
			success: false
		}
	},
	handleSubmit (e) {
		e.preventDefault()
		if (this.state.id) {
			xhr.put('http://localhost:4000/efforts/' + this.state.id, {
				json: this.state
			}, (err, res, body) => {
				if (err) console.log(err.message)
				this.setState({ success: true })
			})
		} else {
			xhr.post('http://localhost:4000/efforts', {
				json: this.state
			}, (err, res, body) => {
				if (err) console.log(err.message)
				this.setState({ success: true })
			})
		}
	},
	handleChange (field) {
		return e => {
			const newState = {}
			newState[field] = e.target.value
			this.setState(newState)
		}
	},
	componentDidMount() {
		xhr.get('http://localhost:4000/efforts/' +
			this.props.params.id, {json: true}, (err, res, effort) => {
				if (err) return console.log(err.message)
				this.setState(effort)
			}
		)
	},
	render () {
		const formState = this.state.id ? 'Edit' : 'New'
		return (
			<div className="br2 ba dark-gray b--black-10 mv4 w-90 w-50-m w-25-l mw5 center pa4">
				{ this.state.success && this.state.id ?
					<Redirect to={`/efforts/${this.state.id}/show`} /> : null
				}
				{ this.state.success && !this.state.id ?
					<Redirect to="/efforts" /> : null
				}
				<h3>{formState} Relief Effort Form</h3>
					<form onSubmit={this.handleSubmit}>
						<div className="pa2">
							<label style={labelStyle}>Name</label>
							<input value={this.state.name}
								onChange={this.handleChange('name')}
								type="text" />
						</div>
						<div className="pa2">
							<label style={labelStyle}>Organization</label>
							<input value={this.state.orgId}
									onChange={this.handleChange('orgId')}
									type="text" />
						</div>
						<div className="pa2">
							<label style={labelStyle}>Phase</label>
							<select onChange={this.handleChange('phase')}>
	              <option value selected="started">Planning</option>
	              <option value="in-progress">In Progress</option>
	              <option value="completed">Completed</option>
            	</select>
						</div>
						<div className="pa2">
							<label style={labelStyle}>Image</label>
							<input value={this.state.picture}
								onChange={this.handleChange('picture')}
								type="text" />
						</div>
						<button onClick={this.handleSubmit}><Link to="/efforts">Submit</Link></button>
						<button><Link to="/efforts">Cancel</Link></button>
						<button><Link to="/">Home</Link></button>

					</form>
			</div>
		)
	}
})


module.exports = EffortForm
