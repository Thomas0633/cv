import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hauteur: 0,
        }
    }

    componentDidMount() {
        let hauteur = window.innerHeight - 79;
        this.setState({
            hauteur: hauteur,
        }, () => console.log(this.state));
    }

    render() {
        return(
            <header style={{ minHeight: this.state.hauteur }} className='d-flex justify-content-center align-items-center header' id='header'>
                <h1 className='pt-5 pb-5 headTitle'>
                    <span className='display-2 headName'>Thomas BULLE</span>
                    <span className='display-2 mt-2 pl-3 pr-3 headJob'>Developpeur web front-end</span>
                </h1>
            </header>
        );
    }
}

export default Header;