import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const Form = (props) => (
    <div>
        <TextField id={'fn'}

           value={props.newContactName[0].fullname}
                   onChange={props.contactAdderProp}

        />
        <hr/>
        <TextField id={'phone'}

                   value={props.newContactName[1].phone}

        />
        <hr/>
        <TextField id={'email'}

                   value={props.newContactName[2].email}

        />
        <hr/>
        <RaisedButton

            onClick={props.addContactProp}
            label={"Add contact"}
            fullWidth={true}
            primary={true}
        />

    </div>
);
export default Form