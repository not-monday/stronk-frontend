import React, {useState} from "react";
import { User } from "../../domain/model/user";
import { Workout } from "../../domain/model/workout";
import { connect } from "react-redux";
import "../../styles/output/index.css";
import { ListGroupItem, ListGroup } from "reactstrap";
import { TransitionGroup } from "react-transition-group";
import { getWorkouts, GetWorkoutAction } from "../../redux/actions/index";
import {
  workoutState
} from "../../redux/reducers/workoutReducer";
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
}

function UserPreview(userProps : UserPreviewProps) {
  /* Need to get props from the store state, will add later. */

    const classes = useStyles();
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
            <Button color="inherit">Login</Button>
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

/* Will be changed afterwards */
const mapStateToProps = (state : any , userProps : UserPreviewProps) => {
  userProps.workouts = state.workout.workouts
  return userProps
};

export default connect(mapStateToProps, { getWorkouts })(UserPreview);
