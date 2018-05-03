import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const Form = (props) => (
    <div>
        <TextField id={'fn'}

        value={props.newContactProp.fullname}

        />
        <hr/>
        <TextField id={'phone'}

                   value={props.newContactProp.phone}
        />
        <hr/>
        <TextField id={'email'}

                   value={props.newContactProp.email}

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