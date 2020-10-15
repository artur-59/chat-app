import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = { online: this.props.online }
  }
  statusReverse = () => {
      this.setState({online: !this.state.online})
    };
  render(){
    return(
      <div>
        <figure class="Contact">
            <img  class="avatar" src={this.props.avatar} alt={this.props.name} />
      <figcaption>
         <blockquote class="name">
           {this.props.name}
         </blockquote>
         <div class="status" onClick={this.statusReverse}>
         <div class={this.state.online ? "status-online" : "status-offline"} onClick={this.statusReverse}></div>
        <p onClick={this.statusReverse} class="status-text">{this.state.online ? "online" : "offline"}</p></div>
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