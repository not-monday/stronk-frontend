import React, { useState, useEffect } from "react";
import { User } from "../../domain/model/user";
import { Workout } from "../../domain/model/workout";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/output/index.css";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import {
  getWorkouts,
  addWorkout,
  deleteWorkout
} from "../../redux/actions/workoutActions";
import {
  AppBar,
  Input,
  InputLabel,
  FormGroup,
  Toolbar,
  IconButton,
  Typography,
  FormControl
} from "../../../node_modules/@material-ui/core/";

import {
  createStyles,
  makeStyles,
  Theme
} from "../../../node_modules/@material-ui/core/styles";
import MenuIcon from "../../../node_modules/@material-ui/icons/Menu";
import SelectInput from "@material-ui/core/Select/SelectInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

export interface UserPreviewProps {
  user: User;
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  deleteWorkout: (workout_id : string) => void;
}

function UserPreview(userProps: UserPreviewProps) {
  /* Need to get props from the store state, will add later. */

  const classes = useStyles();

  const [workout, setWorkout] = useState([""]);
  const [description, setDescription] = useState("");
  const [projectedTime, setProjectedTime] = useState("");

  useEffect(() => {
    console.log(userProps.workouts)
  });


  console.log(description);
  console.log(workout);
  console.log(projectedTime);
  console.log(userProps.workouts);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Stronk
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <ListGroup>
          <TransitionGroup>
            {userProps.workouts.map(({ workout_id, description }) => (
              <CSSTransition key={workout_id} timeout={500}>
                <ListGroupItem>
                  <Button
                  onClick={() => {userProps.deleteWorkout(workout_id)
                  console.log("clicked")}}
                  >
                  &times;
                  </Button>
                  {workout_id} {description}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>

      <h1>{userProps.user.name}</h1>

      <form>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <input
          type="text"
          value={projectedTime}
          onChange={(e: any) => setProjectedTime(e.target.value)}
          placeholder="Completion time"
        />
        <input
          value={workout}
          type="text"
          placeholder="exercises"
          onChange={(e: any) => setWorkout([e.target.value])}
        ></input>
        <button
          onClick={() =>
            userProps.addWorkout(
              new Workout("3", description, projectedTime, workout)
            )
          }
        >
          test
        </button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch: any) {
  const actions = {
    addWorkout: (workout: Workout) => dispatch(addWorkout(workout)),
    deleteWorkout : (workout_id : string) => dispatch(deleteWorkout(workout_id))
  };
  return actions;
}

/* Will be changed afterwards */
const mapStateToProps = (state: any, userProps: UserPreviewProps) => {
  userProps.workouts = state.workout.workouts;
  return userProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPreview);
