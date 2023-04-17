import { Component } from "react";

class Filter extends Component{
    render(){
        return(
            <label>
            Find contact by name
            <input 
              type="text"
              name="filter"
              onChange={this.props.onFilter}
            />
          </label>
        )
    }
}
export default Filter;