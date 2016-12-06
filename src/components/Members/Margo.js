import React, {Component} from 'react';
import './Members.css';
import {repos} from './getRepos';

export default class Margo extends Component {

    render() {
        return (
            <div className="div-members">
                <div >
                    <img src="https://softuni.bg/users/profile/showavatar/b5f2e3bd-c34d-4416-8fee-3c277c9b2d33"
                         width="170" role="presentation"/>
                </div>
                <div>
                    <p><h4>Маргарита Христова</h4></p>
                    <p>
                        <a target="_blank" href="https://softuni.bg/users/profile/show/margaritahristova">
                            <div className="div-link">
                                <img src="https://softuni.bg/content/images/softuni-mobile-logo.png" width="30" role="presentation"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/margarita.hristova.359?pnref=lhc.friends">
                            <div className="div-link">
                                <img
                                    src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"
                                    width="30" role="presentation"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://github.com/Margrette">
                            <div className="div-link">
                                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                                     width="30" role="presentation"/>
                            </div>
                        </a>

                        <div className="div-link">
                            <a href="skype:Margrette">
                                <img
                                    src="http://www.skypeassets.com/content/dam/skype/images/misc/Trademark/skype_logo_solid.jpg"
                                    width="30" role="presentation"/>
                            </a>
                        </div>
                    </p>
                </div>
                <button className="btn btn-block" onClick={() => repos('Margrette')}>Get Repos</button>
            </div>
        );
    }
}
