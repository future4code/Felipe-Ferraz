import React from "react";
import { connect } from "react-redux";
import Tasks from "../../components/Tasks/index";
import NewTasks from "../../components/NewTask/index";
import { createTask } from "../../actions/createTask";
import { getTasks } from "../../actions/getAllTasks";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  componentDidMount() {
    this.props.getTasks();
  }

  createTask = (day, text) => {
    this.props.createTask(day, text);
  };

  separeDaysSeman = () => {
    const { allTasks } = this.props;
    const result = allTasks.map((task) => {
      return (
        <Tasks taskDay={task.day} key={task.id} taskText={task.text}></Tasks>
      );
    });
    console.log(result);
    return result;
  };

  render() {
    const { allTasks } = this.props;
    console.log(allTasks);
    return (
      <div>
        <h1>Lista de tarefas</h1>
        <NewTasks createTask={this.createTask} />
        {this.separeDaysSeman()}
        <button onClick={this.separeDaysSeman}>Executar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    createTask: (day, text) => dispath(createTask(day, text)),
    getTasks: () => dispath(getTasks()),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Planner);
