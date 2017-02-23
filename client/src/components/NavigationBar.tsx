import * as React from "react";
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

export const NavigationBar = ()=>(<Navbar>
    <Navbar.Header>
      <Navbar.Brand>Lost&Found</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1}><Link to="/Search">חפש</Link></NavItem>
      <NavItem eventKey={2}><Link to="Other">פריט חדש</Link></NavItem>
    </Nav>
  </Navbar>)
