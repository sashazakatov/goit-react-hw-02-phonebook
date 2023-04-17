import { Component } from "react";
import PropTypes from "prop-types";
import css from './ContactList.module.css'

class ContactList extends Component{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        filter: PropTypes.string.isRequired,
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        onDelete: PropTypes.func.isRequired,
    }
    render(){
        const {contacts, filter, onDelete} = this.props;
        return(
            <ul>
            {
                contacts.filter(({name})=>name.includes(filter))
                .map(({id, name, number}) => 
                <li className={css.list} key={id}>
                    <p>{name}: {number}</p>
                    <button type="button" onClick={()=>{onDelete(id)}}>Delete</button>
                </li>)
            }
            </ul>
        )
    }
}
export default ContactList;