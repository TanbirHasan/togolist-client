import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Todo-List</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/" className="link">
                  Home
                </Link>
                {user ? (
                  <Link to="/addtask" className="link">
                    Add-Task
                  </Link>
                ) : (
                  <span></span>
                )}
                {user ? (
                  <Link to="/mytask" className="link">
                    My-Task
                  </Link>
                ) : (
                  <span></span>
                )}
                {!user ? (
                  <Link to="/register" className="link">
                    Register
                  </Link>
                ) : (
                  <span></span>
                )}

                {!user ? (
                  <Link to="/login" className="link">
                    Login
                  </Link>
                ) : (
                  <button className="mx-3" onClick={() => signOut(auth)}>
                    Logout
                  </button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;