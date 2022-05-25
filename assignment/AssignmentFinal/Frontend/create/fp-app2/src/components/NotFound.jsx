import { Link } from "react-router-dom";
import { Card, Button} from "react-bootstrap"

export default function NotFound() {
  return (
    <>
      <br/><br/><br/>
      <div className="row">
        <div className="col-2"></div> 
        <div className="col-8">
        <div className="mb-4"></div>
          <Card className="text-center">
          <Card.Header>Content</Card.Header>
            <Card.Body>
            <Card.Title><h1>404</h1></Card.Title>
              <Card.Text>
                Page Not Found
              </Card.Text>
            <div>
              <Link className="btn btn-primary " to="/">
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
