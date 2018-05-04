import React from 'react'
import Contact from './Contact'


const List = (props) => (

    <div>




        {props.contactProp.map(contact => <Contact

            fullnameProp={contact.fullname}
            phoneProp={contact.phone}
            emailProp={contact.email}
            deleteContactProp2={() => props.deleteContactProp(contact.uid)}

        />)}



    </div>

);

export default List