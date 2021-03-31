import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import "./UserNav.scss";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Link to="/">
          <NavbarBrand href="#home">RemoteWork</NavbarBrand>
        </Link>
        <Nav className="mr-auto">
          <DropdownButton
            id="dropdown-basic-button"
            title="Find Jobs
        "
          >
            <Dropdown.Item href="#/action-1">Find Work</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Saved Jobs</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Proposals</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="My Jobs">
            <Dropdown.Item href="#/action-1">My Jobs</Dropdown.Item>
            <Dropdown.Item href="#/action-2">All Contracts</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Work Diary</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Reports">
            <Dropdown.Item href="#/action-1">Overview</Dropdown.Item>
            <Dropdown.Item href="#/action-2">My Reports</Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Lifetime Billing by clients
            </Dropdown.Item>
          </DropdownButton>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search Jobs..."
            className="mr-sm-2"
          />
          <Button className="mr-sm-2" variant="outline-light">
            Search
          </Button>
        </Form>
      </div>
    </Navbar>
  );
};

export default NavBar;
