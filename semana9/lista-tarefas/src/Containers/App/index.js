import React from 'react'
import Wrapper from '../WrapperList/Wrapper'
import { connect } from 'react-redux'

const App = (props) =>{
    console.log(props.tasks)
    return(
        <div>
            <Wrapper/>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps)(App)