import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import { Card } from "react-bootstrap"
import logo from '../logo.svg';

export default function UserDetail() {
  const { id } = useParams();

  const [User, setUser] = useState({});

  const getUserId = (id) => {
    UserService.getById(id).then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    getUserId(id);
  }, [id]);

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
                <div className="p-3 mb-5 bg-body rounded mt-2 pb-5">
                  <h2>User {id}</h2>
                  <hr></hr>
                  <img src={logo} className="App-logo2" alt="logo" /><br/><br/>
                  <h4>Full Name</h4><br/>
                  <h4>{User.firstName} {User.lastName}</h4>
                </div>
                <Link className="btn btn-primary float-end" to="/">
                    Go Home
                  </Link>
                </Card.Body>
              </Card>
              <div className="col-2"></div>
        </div>
      </div>
      <br/>
    </>
  );
}
