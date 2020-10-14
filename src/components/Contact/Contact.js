import React from 'react';
import './Contact.css';


function Contact(props) {
  const { name, avatar, online } = props;
  return (
    <div>
        <figure class="Contact">
            <img  class="avatar" src={avatar} alt={name} />
      <figcaption>
        <blockquote class="name">
          {name}
        </blockquote>
        <div class="status">
        <div class={online ? "status-online" : "status-offline"}></div>
        <p class="status-text">{online ? "online" : "offline"}</p></div>
      </figcaption>
    </figure>
    </div>
  );
}


export default Contact;