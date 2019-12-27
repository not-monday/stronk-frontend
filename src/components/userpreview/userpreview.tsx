import React, {useState} from "react";
import { User } from "../../domain/model/user";
import { connect } from "react-redux";
import "../../styles/output/index.css";
import { ListGroupItem, ListGroup } from "reactstrap";
import { TransitionGroup } from "react-transition-group";
import { getWorkouts, GetWorkoutAction } from "../../redux/actions/index";
import {
  WorkoutState,
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
import { string } from "prop-types";

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
  }

function UserPreview(x : UserPreviewProps , y: workoutState) {
  /**pull from interface */

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
      </div>
    );
}

/*refers to store's state */
const mapStateToProps = (state:string) => {
  return "1" 
};

export default connect(mapStateToProps, { getWorkouts })(UserPreview);
