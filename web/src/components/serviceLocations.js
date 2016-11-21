const React = require('react')
const xhr = require('xhr')
const API_URL = process.env.REACT_APP_API

const ServiceLocations = Component => React.createClass({
	allDocs (callback) {
		xhr.get(API_URL + '/locations', {json: true}, (err, res, body) => {
			callback(err, body)
		})
	},
	get (id, callback) {
		xhr.get(`${API_URL}/locations/${id}`, {json: true}, (err, res, body) => {
			callback(err, body)
		})
	},
	remove (id, body, callback) {
		xhr.del(`${API_URL}/locations/${id}`, {json: body}, (err, res, body) => {
			callback(err, body)
		})
	},

	render () {
		return (
			<Component {...this.props}
				allDocs={this.allDocs}
				get={this.get}
				post={this.post}
				put={this.put}
				remove={this.remove}
			/>
		)
	}
})

module.exports = ServiceLocations
