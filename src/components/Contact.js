import React from 'react';
import './Contact.css';

const avatar = <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Judy Herrera picture" />;

const name = 'Judy Herrera';

const online = {props.online};


function Contact(props) {
  return (
    <div>
        <figure class="Contact">
            <img  class="avatar" src={props.avatar} alt={props.name} />
      <figcaption>
        <blockquote class="name">
          {props.name}
        </blockquote>
        <div class="status" {props.online ? "Online" : "Offline"}>
        <div class="status-online" {props.online ? "Online" : "Offline"}></div>
        <p class="status-text">{props.online}</p></div>
      </figcaption>
    </figure>
    </div>
  );
}


export default Contact;