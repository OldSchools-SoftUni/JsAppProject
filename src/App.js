import React, {Component} from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar';
import Infobox from  './components/common/Infobox';
import {Link} from 'react-router';
import observer from './models/observer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, username: '' };
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                    <Navbar>
                        <Link to="/" className="btn btn-primary" activeClassName="btn btn-primary active" onlyActiveOnIndex={true}>Home</Link>
                        <Link to="/login" className="btn btn-primary" activeClassName="btn btn-primary active">Login</Link>
                        <Link to="/register" className="btn btn-primary" activeClassName="btn btn-primary active">Register</Link>
                        <Link to="/about" className="btn btn-primary" activeClassName="btn btn-primary active">About</Link>
                    </Navbar>
                );
        } else {
            navbar = (
                <Navbar>
                    <Link to="/" className="btn btn-primary" activeClassName="btn btn-primary primary" onlyActiveOnIndex={true}>Home</Link>
                    <Link to="/catalog" className="btn btn-primary" activeClassName="btn btn-primary active">List Posts</Link>
                    <Link to="/create" className="btn btn-primary" activeClassName="btn btn-primary active">Create</Link>
                    <Link to="/logout" className="btn btn-primary" activeClassName="btn btn-primary active">Logout</Link>
                    <Link to="/about" className="btn btn-primary" activeClassName="btn btn-primary active">About</Link>
                </Navbar>
            );
        }

        return (
            <div className="container">
                <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                    {navbar}
                </Header>
                {this.props.children}
                <Footer/>
                <Infobox/>

            </div>
        )
    }
}

export default App;
