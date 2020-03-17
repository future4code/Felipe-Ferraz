import React from 'react';
import { connect } from "react-redux";
import WrapperButtons from '../../components/WrapperButtons';
import TaskList from '../../components/TaskList';
import styled from 'styled-components';


const WrapperData = styled.div`
border: 10px solid green;
width: 50vw;
`
const InputTask = styled.input`
width: 90%;
`



class Wrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueInput: ''
        }
    }

    handleInput = (e) => {
        const newValue = e.target.value
        this.setState({valueInput : newValue})

    }
    render() {
        return (
            <WrapperData>
                <InputTask
                    placeholder='Aqui vai uma tarefa'
                    onChange={this.handleInput}
                    value={this.state.valueInput}
                />
                <TaskList />
                <button>Enviar Tarefa</button>
                <WrapperButtons />
            </WrapperData>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Wrapper)