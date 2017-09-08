import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody />
			</table>
		)
	}
}

// hook it up to a redux state
// function mapStateToProps(state) {
// 	return {
// 		weather: state.weather
// 	}
// }

// following is same as above; just ES6 technique since we only have 1 argument and we're pulling off just one property: weather
// function mapStateToProps({weather}) is like saying const weather = state.weather
function mapStateToProps({ weather }) {
	return { weather } // {weather} === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
