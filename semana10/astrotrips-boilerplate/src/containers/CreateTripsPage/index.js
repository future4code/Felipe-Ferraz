import React from "react"
import { connect } from "react-redux"
import { routes } from "../Router"
import { push } from 'connected-react-router'
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import styled from "styled-components"

const WrapperForm = styled.form`
display: flex;
flex-direction: column;
`
const planets = [
    { name: "planet", value: "Mercúrio", required: true, },
    { name: "planet", value: "Vênus", required: true, },
    { name: "planet", value: "Terra", required: true, },
    { name: "planet", value: "Marte", required: true, },
    { name: "planet", value: "Júpiter", required: true, },
    { name: "planet", value: "Saturno", required: true, },
    { name: "planet", value: "Urano", required: true, },
    { name: "planet", value: "Netuno", required: true, }

]

const dataForm = [
    {
        name: "name", label: "Nome da viagem",
        type: "text", required: true,
        pattern: "[A-z]{3}",
        title: 'Tenha pelo menos 3 letras'
    },
    {
        name: "date", label: "Data da viagem"
        , type: "date", required: true,
        //pattern: new Date()
    },
    {
        name: "description", label: "Descrição",
        type: "text", required: true,
        min: 30,
    },
    {
        name: "durationInDays", label: "Duração da viagem",
        type: "number", required: true, min: "50",
    },

]
class CreateTripsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        }
    }

    handleFieldChange = e => {
        const { name, value } = e.target;
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.form)
    }

    render() {
        return (
            <div>
                <WrapperForm onSubmit={this.handleSubmit}>
                    {dataForm.map(field => {
                        return (<TextField
                            key={field.name}
                            label={field.label}
                            type={field.type}
                            value={this.state.form[field.name]}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            onChange={this.handleFieldChange}
                            inputProps={{
                                pattern: field.pattern,
                                title: field.title,
                                min: field.min
                            }}
                        />)
                    })}

                    <select onChange={this.handleFieldChange}
                    name= 'planet'
                     >
                        {planets.map(planet => {
                            return (
                                <option
                                    key={planet.value}
                                    name={planet.name}
                                    value={planet.value}
                                    required={planet.required}
                                >
                                    {planet.value}
                                </option>
                            )
                        })}
                    </select>

                    <Button type="submit"> Enviar </Button>
                </WrapperForm>

            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToAdmScreen: () => dispatch(push(routes.admPage))
    }
}
export default connect(null, mapDispatchToProps)(CreateTripsPage)