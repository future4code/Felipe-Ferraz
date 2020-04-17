import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class NewTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  saveNewTask = (event) => {
    event.preventDefault();
    const { day, text } = this.state;
    if (day === undefined || day === "") {
      alert("Preencha o campo de dia");
    } else {
      this.props.createTask(day, text);
      alert("Tarefa criada");
      this.setState({ day: "", text: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.saveNewTask}>
          <FormControl>
            <InputLabel htmlFor="demo-controlled-open-select">Dia</InputLabel>
            <Select
              required={true}
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.day}
              onChange={this.handleChange}
              inputProps={{
                name: "day",
                required: true,
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Segunda"}>Segunda</MenuItem>
              <MenuItem value={"Terça"}>Terça</MenuItem>
              <MenuItem value={"Quarta"}>Quarta</MenuItem>
              <MenuItem value={"Quinta"}>Quinta</MenuItem>
              <MenuItem value={"Sexta"}>Sexta</MenuItem>
              <MenuItem value={"Sábado"}>Sábado</MenuItem>
              <MenuItem value={"Domingo"}>Domingo</MenuItem>
            </Select>
          </FormControl>
          <Input
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Digite uma tarefa nova"
            required
          />
          <Button type="onSubmit"> Criar tarefa</Button>
        </form>
      </div>
    );
  }
}
export default NewTasks;
