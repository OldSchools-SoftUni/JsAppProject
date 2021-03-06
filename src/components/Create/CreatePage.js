import React, {Component} from 'react';
import CreateForm from '../Create/CreateForm';
import {create} from '../../models/post';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            context: '',
            dateofpublish: '',
            submitDisabled: false};
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        create(sessionStorage.getItem('username'), this.state.context, this.state.dateofpublish, this.onSubmitResponse);
    }

    onSubmitResponse(response, textStatus, xhr) {
        //console.dir(response);
        //console.log(textStatus);
        //console.log(xhr);
        if (textStatus === 'success') {
            // Navigate away from login page
            this.context.router.push('/catalog');
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: false});
        }
    }

    render() {
        return (
            <div>
                <h1>Create Page</h1>
                <CreateForm
                    author={this.state.author}
                    context={this.state.context}
                    dateofpublish={this.state.dateofpublish}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};