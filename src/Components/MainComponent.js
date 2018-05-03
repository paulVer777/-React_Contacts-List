import React from 'react'
import Form from './Form'
import List from './List'
import Paper from './Paper'


class MainComponent extends React.Component {

    render() {


        return (

            <div>

                <Paper>

                    <Form/>
                </Paper>

                <Paper>
                    <List/>
                </Paper>


            </div>


        )


    }


}

export default MainComponent