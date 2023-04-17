import { Component } from "react";
import PropTypes from "prop-types";
import css from './Filter.module.css'

class Filter extends Component{
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
  }
  render(){
    const {onFilter} = this.props
    return(
      <label className={css.lable}>
      Find contact by name
      <input
        className={css.input} 
        type="text"
        name="filter"
        onChange={onFilter}
      />
      </label>
      )
    }
}
export default Filter;