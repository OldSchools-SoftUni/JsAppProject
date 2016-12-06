import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RepoList from './RepoList';
import Vasil from '../Members/Vasil';
import Veso from '../Members/Veso';
import Pavel from '../Members/Pavel';
import Margo from '../Members/Margo';
import Stan from '../Members/Stan';

export default class AboutPage extends Component {

    render() {
        return (
            <div>
                <h1>OldSchool Team Memebers</h1>
                <Vasil/>
                <Veso/>
                <Pavel/>
                <Margo/>
                <Stan/>
                <RepoList/>
            </div>

        );

    }
}