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

        newContactState:[

            {fullname:'Al Pacino'},
            {phone:'22'},
            {email:'al@onet.eu'}
]
    };

    contactAdder=(event,newvalue)=>{

        this.setState({

            newContactState:[0].fullname=newvalue,
             newContactState[1].phone=newvalue
             [2].email=newvalue
        })
    };

    addContact = () => {

        alert("Dodano kontakt")

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

                        contactAdderProp={this.contactAdder}
                        addContactProp={this.addContact}
                        newContactName={this.state.newContactState}

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