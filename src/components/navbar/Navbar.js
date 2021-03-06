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

import "./Navbar.scss";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="container">
        <Link to="/">
          <NavbarBrand href="#home">RemoteWork</NavbarBrand>
        </Link>
        <Nav className="mr-auto">
          <DropdownButton id="dropdown-basic-button" title="Find Talent">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Find Work">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Why RemoteWork">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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

          <Link to="/login">
            <Button className="mr-sm-2" variant="outline-light">
              LogIn
            </Button>
          </Link>
          <Link to="/register">
            <Button className="mr-sm-2" variant="outline-light">
              Register
            </Button>
          </Link>
        </Form>
      </div>
    </Navbar>
  );
};

export default NavBar;
