import { Component } from "react";
import css from './ContactList.module.css'

class ContactList extends Component{
    render(){
        return(
            <ul>
            {
                this.props.contacts.filter(({name})=>name.includes(this.props.filter))
                .map(({id, name, number}) => 
                <li key={id}>
                    <p>{name}: {number}</p>
                    <button type="button" onClick={()=>{this.props.onDelete(id)}}>Delete</button>
                </li>)
            }
            </ul>
        )
    }
}

export default ContactList;