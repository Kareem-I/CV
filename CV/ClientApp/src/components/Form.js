import React from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_NkRyLIUH5TrVcmvtupxvi");

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { testmailing: '', name: 'Name', email: 'kareemisse@gmail.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form style={{ marginTop: "20px" }} className="testmailing">
               
                <div>
                    <textarea
                        id="testmailing"
                        name="testmailing"
                        onChange={this.handleChange}
                        placeholder="Kontakta mig direkt!"
                        required
                        value={this.state.testmailing}
                       className="form-control"
                        
                        
                    />
                </div>
                
                <input type="button" value="Skicka" className="btn btn-primary" onClick={this.handleSubmit} style={{ marginTop: "20px" }}/>
            </form>
        )
    }

    handleChange(event) {
        this.setState({ testmailing: event.target.value })
    }

    handleSubmit(event) {
        const templateId = 'template_270ieqc';

        this.sendFeedback(templateId, { testmailing: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
    }

    sendFeedback(templateId, testmailing) {
        window.emailjs.send(
            'service_kzzrp3f', templateId,
            testmailing
        ).then(res => {
            console.log('Meddelandet har skickats!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Meddelandet har ej skickats!', err))
    }

}