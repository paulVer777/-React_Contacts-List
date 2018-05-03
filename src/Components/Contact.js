import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';

const Contact=(props)=>(



    <ListItem

        primaryText={props.fullname}
        secondaryText={props.contact}
        rightIcon={<Delete onClick={()=>alert("klik")}/>}


    />





);

export default Contact