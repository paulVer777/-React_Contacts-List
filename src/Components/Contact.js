import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';

const Contact = (props) => (

    <ListItem

        primaryText={props.fullnameProp}
        secondaryText={props.phoneProp + ", " + props.emailProp}
        rightIcon={<Delete onClick={props.deleteContactProp2}/>}


    />
);

export default Contact