import React, {Component} from 'react';
import './Members.css';
import $ from 'jquery';

export default class Stan extends Component {

    render() {
        return (
            <div className="div-members">
                <div >
                    <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/c50.50.620.620/s160x160/377442_2823444703239_1685529243_n.jpg?oh=2a45427477a5fb257caba3b417f9e577&oe=58F022D0"
                         width="170"/>
                </div>
                <div>
                    <p><h4>Станислав Ботев</h4></p>
                    <p>
                        <a target="_blank" href="https://softuni.bg/users/profile/show/stanbotev">
                            <div className="div-link">
                                <img src="https://softuni.bg/content/images/softuni-mobile-logo.png" width="30"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/Darkonya">
                            <div className="div-link">
                                <img
                                    src="https://en.facebookbrand.com/wp-content/uploads/2016/05/FB-fLogo-Blue-broadcast-2.png"
                                    width="30"/>
                            </div>
                        </a>
                        <a target="_blank" href="https://github.com/StanBotev">
                            <div className="div-link">
                                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                                     width="30"/>
                            </div>
                        </a>

                        <div className="div-link">
                            <a href="skype:stanbotev">
                                <img
                                    src="http://www.skypeassets.com/content/dam/skype/images/misc/Trademark/skype_logo_solid.jpg"
                                    width="30"/>
                            </a>
                        </div>
                    </p>
                </div>
                <button className="btn btn-block" onClick={() => repos('StanBotev')}>Get Repos</button>
            </div>
        );

        function repos(name) {
            $("#repos").empty();
            let username = name;
            let url = "https://api.github.com/users/" + username + "/repos";
            $.ajax(url)
                .then(displayData)
                .catch(displayError);

            function displayData(repos) {
                console.log(repos);
                for (let repo of repos) {
                    let link = $('<a>').text(repo.full_name);
                    link.attr('href', repo.html_url);
                    $('#repos').append($('<li>').append(link));
                }
            }

            function displayError(error) {
                console.log(error);
            }
        }
    }
}
