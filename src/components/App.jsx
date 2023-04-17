import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from './ContactList'
class App extends Component{
  static propType = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
    isContactExists: PropTypes.func.isRequired,
    hendelSubmit: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
  }
  state = {
    contacts: [],
    filter: '',
  }
  deleteContact = (id) =>{
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  }
  isContactExists = (value) => {
    return this.state.contacts.find(({name}) => name === value);
  }
  hendelSubmit = (e) =>{
    e.preventDefault();
    const {name, number} = e.target;
    if(this.isContactExists(name.value)){
      alert(`${name.value} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({contacts: [...prevState.contacts, {id:nanoid(), name: name.value, number: number.value}]}))
  }
  setFilter = (e) =>{
    this.setState({filter: e.target.value.toLowerCase()})
  }
  render(){
    const {filter, contacts} = this.state;
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.hendelSubmit}/>
      <h1>Contacts</h1>
      <Filter onFilter={this.setFilter} />
      <ContactList filter={filter} contacts={contacts} onDelete={this.deleteContact}/>
      </div>
    );
  }
};

export default App