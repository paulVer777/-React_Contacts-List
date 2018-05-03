import React from 'react'
import Form from './Form'
import List from './List'
import Paper from './Paper'


class MainComponent extends React.Component {

    state = {
        contacts: [
            {fullname: 'Mads Mikkelsen', phone: '333 444 444', email: 'mads@onet.pl',uid:'adasdaa'},
            {fullname: 'Clint Eastwood', phone: '111 444 444', email: 'good@onet.pl',uid:'zxc'},
            {fullname: 'Vigo Mortensen', phone: '333 444 444', email: 'aragorn@onet.pl',uid:'hgfh'}
        ]
    };

    render() {

        return (

            <div>

                <Paper>

                    <Form/>
                </Paper>

                <Paper>
                    <List

                    contactProp={this.state.contacts}
                    deleteTaskProp={(uid)=>alert(uid)}


                    />
                </Paper>


            </div>


        )


    }


}

export default MainComponent