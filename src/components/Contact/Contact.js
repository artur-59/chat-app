import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {online: props.online};
  }
  render(){
    return(
      <div>
         <figure class="Contact">
             <img  class="avatar" src={avatar} alt={name} />
       <figcaption>
         <blockquote class="name">
           {name}
         </blockquote>
         <div class="status">
         <div class={online ? "status-online" : "status-offline"}
         onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}></div>
         <p class="status-text">{online ? "online" : "offline"}</p></div>
       </figcaption>
     </figure>
     </div>
    );
  }
}


// function Contact(props) {
//   const { name, avatar, online } = props;
//   return (
//     <div>
//         <figure class="Contact">
//             <img  class="avatar" src={avatar} alt={name} />
//       <figcaption>
//         <blockquote class="name">
//           {name}
//         </blockquote>
//         <div class="status">
//         <div class={online ? "status-online" : "status-offline"}></div>
//         <p class="status-text">{online ? "online" : "offline"}</p></div>
//       </figcaption>
//     </figure>
//     </div>
//   );
// }


export default Contact;