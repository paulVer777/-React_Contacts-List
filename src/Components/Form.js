import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style={
        h1:{
                textAlign:'center',
                letterSpacing:'5px'
        }
};

const Form = (props) => (

    <div>


        <h1 style={style.h1}>Contacts list</h1>


        <TextField id={'fn'}

                   value={props.newContactNameProp}
                   onChange={props.contactAdderProp1}
                   floatingLabelText={"Full name"}
        />
        <hr/>
        <TextField id={'phone'}

                   value={props.newContactPhoneProp}
                   onChange={props.contactAdderProp2}
                   floatingLabelText={"Phone"}
        />
        <hr/>
        <TextField id={'email'}

                   value={props.newContactEmailProp}
                   onChange={props.contactAdderProp3}
                   floatingLabelText={"Email adress"}
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