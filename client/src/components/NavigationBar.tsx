import * as React from "react";
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


export const NavigationBar = ()=>(<Navbar>
    <Navbar.Header>
      <Navbar.Brand>Lost&Found</Navbar.Brand>
    </Navbar.Header>
    <Nav>
	  <LinkContainer to="Search">
		<NavItem eventKey={1}>חפש</NavItem>
	  </LinkContainer>
	  <LinkContainer to="Add">
		<NavItem eventKey={1}>פריט חדש</NavItem>
	  </LinkContainer>
    </Nav>
  </Navbar>)
