import React from 'react';
import {User} from '../../domain/model/user';
import {connect} from "react-redux"
import "../../styles/output/index.css";
import {ListGroupItem, ListGroup} from 'reactstrap';
import {TransitionGroup} from 'react-transition-group';
import {getWorkouts, GetWorkoutAction} from '../../redux/actions/index';
import {WorkoutState, workoutState} from '../../redux/reducers/workoutReducer';

export interface UserPreviewProps {
    user : User
}

class UserPreview extends React.PureComponent <UserPreviewProps, workoutState> {

    /**pull from interface */

    render() {
      
        return <div className="bg-blue-100">
            <h1>Welcome {this.props.user.name} </h1>
            <ListGroup>
                <TransitionGroup >
                {WorkoutState.workouts.map(({workout_id, description}) => (
                        <ListGroupItem>
                            {workout_id} {description}
                        </ListGroupItem>
                ))}
                </TransitionGroup>
            </ListGroup>

        </div>;
    }
}


/*refers to store's state */
function mapStateToProps(state : workoutState) {
    return state.workouts
}

export default connect(
    mapStateToProps, {getWorkouts}
)(UserPreview)