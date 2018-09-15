import * as React from "react";
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () =>
{
    return (
        // Navbar is a react component from react-bootstrap
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <Link to= "/"> Alan's News </Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <IndexLinkContainer to="/AboutComponent">
                    <NavItem> About App </NavItem>
                </IndexLinkContainer>    
            </Nav>
        </Navbar>
    );
};