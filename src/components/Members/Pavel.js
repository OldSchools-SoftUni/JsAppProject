import React, {Component} from 'react';
import './Members.css';
import {repos} from './getRepos';

export default class Pavel extends Component {

    render() {
        return (
            <div className="div-members">
                <div >
                    <img src="https://softuni.bg/users/profile/showavatar/2dc7cfd1-eb1f-4984-acf9-def660aa4310"
                         width="170" role="presentation"/>
                </div>
                <div>
                    <p><h4>Павел Анчев</h4></p>
                    <p>
                        <a target="_blank" href="https://softuni.bg/users/profile/show/masive">
                            <div className="div-link">
                                <img src="https://softuni.bg/content/images/softuni-mobile-logo.png" width="30" role="presentation"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/pavel.anchev">
                            <div className="div-link">
                                <img
                                    src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"
                                    width="30" role="presentation"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://github.com/masive">
                            <div className="div-link">
                                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                                     width="30" role="presentation"/>
                            </div>
                        </a>

                        <div className="div-link">
                            <a href="skype:p_anchev">
                                <img
                                    src="http://www.skypeassets.com/content/dam/skype/images/misc/Trademark/skype_logo_solid.jpg"
                                    width="30" role="presentation"/>
                            </a>
                        </div>
                    </p>
                </div>
                <button className="btn btn-block" onClick={() => repos('masive')}>Get Repos</button>
            </div>
        );
    }
}
