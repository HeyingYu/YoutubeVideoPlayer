import React from 'react';

/*
controlled form: hook up with the state of searchBar class
*/


class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			term : ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	//take value from event object and assign it to state property
	handleChange(event){
		this.setState({
			term : event.target.value
		});
	}

	onFormSubmit(event){
		event.preventDefault();
		//callback from parent component, so parent component is told what current search term is
		this.props.onFormSubmit(this.state.term);
	}

	render(){
		return (
			<div className="search-bar ui segment">
			  <form onSubmit = {this.onFormSubmit} className="ui form">
			    <div className = "field">
			     <label>Video Search</label>
			     <input 
			     type = "text"  
			     value={this.state.term}
			     onChange = {this.handleChange}
			     />
			    </div>
			  </form>
			</div>
			);
	}
}
export default SearchBar;