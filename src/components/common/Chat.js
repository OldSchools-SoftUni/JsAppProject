import React, {Component} from 'react';

export default class Chat extends Component {
    render() {
        return (
            <div>
                {this.props.children}

                <form position="left">
                    <textarea>
                        <p>here must apear the chat messages</p>
                    </textarea>
                    <input type="text"/>
                    <input/> type="button">

                </form>
            </div>
        );
    }
}