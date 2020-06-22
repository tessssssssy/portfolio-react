import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <div class="Contact">
                <h2>Contact Me</h2>
                <h3>Send me a message</h3>
                <form action="https://formspree.io/xaybrrgy" method="POST">
                    <label for="email">Your email</label>
                    <input type="email" name="email"/>
                    <label for="name">Your name</label>
                    <input type="name" name="name"/>
                    <textarea rows="10" placeholder="your message here"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;
