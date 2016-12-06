import React, {Component} from 'react';
import {loadPost, loadUsersDetails} from '../../models/post';
import {joinTeam, leaveTeam} from '../../models/user';
import PostControls from './PostControls';
import './Details.css';
import {deleted} from '../../models/requester';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            description: '',
            members: [],
            canEdit: false,
            ownTeam: sessionStorage.getItem('teamId') === this.props.params.teamId
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
        this.onJoin = this.onJoin.bind(this);
        //this.onLeave = this.onLeave.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    onJoin(event) {
        event.preventDefault();
        joinTeam(this.props.params.teamId, this.statusChange);
    }

    onLeave(event) {
        console.log(event)
        event.preventDefault();
        deleted(this.statusChange);
    }

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
        loadPost(this.props.params.teamId, this.onLoadSuccess);
        loadUsersDetails(this.props.params.teamId, this.onUsersSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            name: response.name,
            description: response.comment
        };
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    onUsersSuccess(response) {
        this.setState({
            members: response
        });
    }

    render() {
        let title = 'Team details';
        if (this.state.name !== '') {
            title = this.state.name + ' details';
        }

        let members = <p>No member info</p>;
        if (this.state.members.length > 0) {
            members = (
            <div>
                {this.state.members.map((e, i) => <span key={i} className="member">{e.username}</span>)}
            </div>
            );
        }

        return (
            <div className="details-box">
                <span className="titlebar">{title}</span>
                <span className="spanner">Team members</span>
                {members}
                <span className="spanner">Description</span>
                <p>{this.state.description || 'No description'}</p>
                <span className="spanner">Team management</span>
                <PostControls
                    teamId={this.props.params.teamId}
                    onJoin={this.onJoin}
                    onLeave={this.onLeave}
                    canEdit={this.state.canEdit}
                    ownTeam={this.state.ownTeam}
                />
            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};