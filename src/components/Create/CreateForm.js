import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={sessionStorage.getItem('username')}
                        disabled={true}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Context:</label>
                    <textarea
                        className="form-control"
                        name="context"
                        value={this.props.context}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="dateofpublish"
                        value={this.props.dateofpublish}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit changes" disabled={this.props.submitDisabled}/>


            </form>
        );
    }
}