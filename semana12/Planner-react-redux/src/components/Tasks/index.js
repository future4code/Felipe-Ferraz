import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Tasks = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.taskDay}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tasks;
