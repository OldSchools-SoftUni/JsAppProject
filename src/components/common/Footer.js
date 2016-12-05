import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p>(c) This project was made by the <i><strong>OldSchool</strong></i></p>
                </div>
            </footer>
        );
    }
}