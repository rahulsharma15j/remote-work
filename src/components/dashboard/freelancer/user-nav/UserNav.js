import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavbarBrand,
  NavLink,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import "./UserNav.scss";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <NavbarBrand href="/">RemoteWork</NavbarBrand>

      <Form inline>
        <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
        <Button className="mr-sm-2" variant="outline-light">
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default NavBar;
