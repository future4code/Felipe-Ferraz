import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const WrapperList = styled.div`
border: 1px solid black;
`

const TaskList = (props) => {
    console.log(props.tasks)
    return (
        <WrapperList>
            {props.tasks.map(el => {
                return <li>{el.text}</li>
            })}
        </WrapperList>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)