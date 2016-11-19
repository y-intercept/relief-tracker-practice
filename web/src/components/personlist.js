const React = require('react')

const listPerson = (person) =>
	<li key={person.id} className="dt w-100 bb b--black-05 pb2 mt2">
		<div className="dtc w2 w3-ns v-mid">
			<img src={`${person.picture}`} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
		</div>
		<div className="dtc v-mid pl3">
			<h1 className="f6 f5-ns fw6 lh-title black mv0">{person.firstName + ' ' + person.lastName}</h1>
			<h2 className="f6 fw4 mt0 mb0 black-60">{person.email}</h2>
		</div>
		<div className="dtc v-mid">
			<form className="w-100 tr">
				<button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">
					<Link to={`/persons/${person.id}/edit`}>Edit</Link>
				</button>
			</form>
		</div>
	</li>


	module.exports = listPerson

	{/* <h2>TODO: Persons List</h2>
	<Link to="/persons/new">Add New Person</Link>
	<ul>
		{this.state.persons.map(listPerson)}
	</ul>
	<Link to="/">Home</Link> */}


			 {/* const listPerson = person =>
			 	<li key={person.id}>
				<Link to={`persons/${person.id}/show`}> {/* template string format
		 			{person.firstName + ' ' + person.lastName}
			 		</Link>
				</li> */}
