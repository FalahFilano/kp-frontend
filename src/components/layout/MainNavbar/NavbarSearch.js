import React from "react";
import { Nav } from "shards-react";

export default () => (
  // <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
  //   <InputGroup seamless className="ml-3">
  //     <InputGroupAddon type="prepend">
  //       <InputGroupText>
  //         <i className="material-icons">search</i>
  //       </InputGroupText>
  //     </InputGroupAddon>
  //     <FormInput
  //       className="navbar-search"
  //       placeholder="Search for something..."
  //     />
  //   </InputGroup>
  // </Form>
  <Nav className="main-navbar w-100 d-none d-md-flex d-lg-flex">
    <div className="ml-3" style={{paddingTop: "1.2rem" , paddingBottom: "1.2rem"}}>
      <h6>Test</h6>
    </div>
  </Nav>
);
