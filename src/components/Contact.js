import React from 'react';
import './Contact.css';
import ContactList from './ContactList'


function Contact(props) {
  return (
    <div>
        <figure class="Contact">
            <img  class="avatar" src={props.avatar} alt={props.name} />
      <figcaption>
        <blockquote class="name">
          {props.name}
        </blockquote>
        <div class="status">
        <div class="status-online"></div>
        <p class="status-text">{props.online}</p></div>
      </figcaption>
    </figure>
    </div>
  );
}


export default Contact;