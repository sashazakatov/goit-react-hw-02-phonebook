import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from './ContactList'
class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
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
    console.log(contacts);
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