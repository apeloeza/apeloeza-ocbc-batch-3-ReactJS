import { Link } from "react-router-dom";
import { Card} from "react-bootstrap"
import React from "react";

function Features() {
  return (
    <>
      <br/>
      <div className="row">
        <div className="col-2"></div> 
        <div className="col-8">
        <div className="mb-4"></div>
          <Card className="text-center">
          <Card.Header>Content</Card.Header>
            <Card.Body>
            <Card.Title><h1>Features</h1></Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Card.Text>
            <div>
              <Link className="btn btn-primary float-end " to="/">
                Go Home
              </Link>
            </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Features