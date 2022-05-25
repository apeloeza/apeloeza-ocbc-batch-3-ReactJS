import { Link } from "react-router-dom";
import { Card} from "react-bootstrap"
import React from "react";

function FAQs() {
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
            <Card.Title><h1>FAQs</h1></Card.Title>
              <Card.Text>
                Nothinks
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

export default FAQs