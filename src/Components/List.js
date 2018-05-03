import React from 'react'
import Contact from './Contact'

const List = (props) => (

    <div>

        {props.contactProp.map(contact => <Contact

            fullnameProp={contact.fullname}
            phoneProp={contact.phone}
            emailProp={contact.email}
            deleteTaskProp2={() => props.deleteTaskProp(contact.uid)}

        />)}

    </div>

);

export default List