import React from 'react';
import {User} from '../../domain/model/user';
import {connect} from "react-redux"
import "../../styles/output/index.css";


export interface UserPreviewProps {
    user : User
}

class UserPreview extends React.PureComponent <UserPreviewProps> {

    render() {
        return <div className="bg-blue-100">
            <h1>{this.props.user.name}</h1>



        </div>;
    }
}

function mapStateToProps(state : any) {
    return state.user;
}

export default connect(
    mapStateToProps
)(UserPreview)