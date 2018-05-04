import React from 'react'
import Form from './Form'
import List from './List'
import Paper from './Paper'


class MainComponent extends React.Component {

    state = {
        contacts: [
            {fullname: 'Mads Mikkelsen', phone: '333 444 444', email: 'mads@onet.pl', uid: 'adasdaa'},
            {fullname: 'Clint Eastwood', phone: '111 444 444', email: 'good@onet.pl', uid: 'zxc'},
            {fullname: 'Vigo Mortensen', phone: '333 444 444', email: 'aragorn@onet.pl', uid: 'hgfh'}
        ],

        newContactfullname:"",
        newContactphone:"",
        newContactemail:"",


    };

    contactAdder1 = (event, newvalue) => {

        this.setState({
            newContactfullname: newvalue,
        })
    };

    contactAdder2 = (event, newvalue) => {

        this.setState({
            newContactphone: newvalue,

        })
    };

    contactAdder3 = (event, newvalue) => {


        this.setState({
            newContactemail:newvalue

        })
    };

    addContact = () => {

        if(!this.state.newContactfullname || !this.state.newContactphone || !this.state.newContactemail) {

            alert("Please fill all fields before add new contact");

            return;

        }

        const newContact = {

            fullname: this.state.newContactfullname,
            phone: this.state.newContactphone,
            email: this.state.newContactemail,
            uid: Date.now()
        };

        const newContacts = this.state.contacts.concat(newContact);


        this.setState({
            contacts: newContacts,
            newContactfullname:"",
            newContactphone: "",
            newContactemail: "",

        })

    };


    deleteContact = (contactuid) => {

        const newContacts = this.state.contacts.filter(contactv => contactuid !== contactv.uid);

        this.setState({
            contacts: newContacts
        })
    };

    render() {

        return (

            <div>

                <Paper>



                    <Form

                        contactAdderProp1={this.contactAdder1}
                        contactAdderProp2={this.contactAdder2}
                        contactAdderProp3={this.contactAdder3}
                        addContactProp={this.addContact}
                        newContactNameProp={this.state.newContactfullname}
                        newContactPhoneProp={this.state.newContactphone}
                        newContactEmailProp={this.state.newContactemail}

                    />

                </Paper>

                <Paper>
                    <List
                        contactProp={this.state.contacts}
                        deleteContactProp={this.deleteContact}
                    />
                </Paper>
            </div>
        )
    }
}

export default MainComponent