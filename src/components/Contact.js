import React from 'react';
import './Contact.css';

const avatar = <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Judy Herrera picture" />;

const name = 'Judy Herrera';

const isAvailable = true;

const status = isAvailable ? "Online" : "Offline";


function Contact() {
  return (
    <div>
        <figure class="Contact">
            <img  class="avatar" src="https://randomuser.me/api/portraits/women/54.jpg" alt="Judy Herrera picture" />
      <figcaption>
        <blockquote class="name">
          {name}
        </blockquote>
        <div class="status">
        <div class="status-online"></div>
        <p class="status-text">{status}</p></div>
      </figcaption>
    </figure>
    </div>
  );
}


export default Contact;