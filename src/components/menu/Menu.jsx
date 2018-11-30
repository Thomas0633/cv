import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import './menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className='pt-2 pb-2 navMenu'>
                <Navbar light expand="lg">
                    <NavbarToggler onClick={this.toggle} className='bg-light text-right' />
                    <Collapse className="justify-content-center" isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idAabout">A propos</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idCompetences">Compétences</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idFormations">Formations</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idExperiences">Expériences</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idProjets">Projets</NavLink>
                            </NavItem>
                            <NavItem className='ml-4 mr-4 d-flex justify-content-center align-items-center itemNav'>
                                <NavLink className='text-white font-weight-light text-uppercase linkNav' href="#idContact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Menu;