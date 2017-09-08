import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term: '' }

		// take the existing function, bind it to 'this' and replace the existing function with it
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}

	onInputChange(event) {
		this.setState({ term: event.target.value })
	}

	onFormSubmit(event) {
		event.preventDefault()
		// go and fetch weather data, pass in the city as an arg
		this.props.fetchWeather(this.state.terms)
		// clear the search input
		this.setState({ term: '' })
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favourite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">
						Submit
					</button>
				</span>
			</form>
		)
	}
}

// goal is to hook up the ActionCreator FetchWeather to our SearchBar container
function mapDispatchToProps(dispatch) {
	// bind ActionCreator fetchWeather to dispatch
	return bindActionCreators({ fetchWeather }, dispatch)
}

// mapDispatchToProps is always the 2nd argument to connect
// will give us access to this.props.fetchWeather in our component SearchBar
export default connect(null, mapDispatchToProps)(SearchBar)
