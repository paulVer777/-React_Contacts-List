import React from 'react'
import Paper from 'material-ui/Paper';

const styles = {

    margin: '20px',
    padding: '20px'
};
const Container = (props) => (

    <Paper style={styles}>
        {props.children}

    </Paper>
);

export default Container