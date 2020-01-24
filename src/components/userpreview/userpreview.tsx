import React, {useState} from "react";
import { User } from "../../domain/model/user";
import { Workout } from "../../domain/model/workout";
import { connect } from "react-redux";
import "../../styles/output/index.css";
import { ListGroupItem, ListGroup } from "reactstrap";
import { TransitionGroup } from "react-transition-group";
import { getWorkouts, addWorkout, deleteWorkout} from "../../redux/actions/workoutActions";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
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
    workouts : Workout[];
    addWorkout : (workout : Workout)=>Void;
}

function UserPreview(userProps : UserPreviewProps) {
  /* Need to get props from the store state, will add later. */

    const classes = useStyles();
    const [workout] = useState("");
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
              News
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        <h1>{userProps.user.name}</h1>
            {userProps.workouts.map(({ workout_id, description }) => (
              <ListGroupItem>
                {workout_id} {description}
              </ListGroupItem>
            ))}
            
      </div>
    );
}

function mapDispatchToProps(dispatch : any) {
  const actions = {
    addWorkout : (workout : Workout) => dispatch(addWorkout(workout))
    // deleteWorkout : (workout_id : Workout) => dispatch(deleteWorkout(workout_id))
  }
  return actions;
}

/* Will be changed afterwards */
const mapStateToProps = (state : any , userProps : UserPreviewProps) => {
  userProps.workouts = state.workout.workouts
  return userProps
};

export default connect(mapStateToProps,mapDispatchToProps)(UserPreview);
