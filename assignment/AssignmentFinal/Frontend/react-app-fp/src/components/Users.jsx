import { Card, Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  createUser,  getUsers,  updateUser,} from "../redux/Actions";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

export default function Users() {
  const initialUserState = {
    key: "",
    firstName: "",
    lastName: "",
  };
  const [User, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(true);
  const [IsAddMode, setIsAddMode] = useState(true);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const saveUser = () => {
    if (IsAddMode) {
      const { key, firstName, lastName } = User;

      dispatch(createUser(key, firstName, lastName));

      setSubmitted(true);
    } else {
      dispatch(updateUser(User.key, User));
      setSubmitted(true);
    }
    dispatch(getUsers());
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
    setIsAddMode(true);
  };

  const handleCancel = () => {
    setUser(initialUserState);
    setSubmitted(true);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!IsAddMode) {
      setSubmitted(false);
    }
  }, [IsAddMode]);

  return (
    <>
    <br/>
     <ToastContainer />
      <div className="row">
        <div className="col-2"></div> 
        <div className="col-8">
        <div className="mb-4"></div>
          <div className="submit-form">
            {submitted ? (
              <Card className="text-center">
                <Card.Header>Content</Card.Header>
                <Card.Body>
                <Card.Title>Try CRUD </Card.Title>                
                <Card.Text>
                <img src={logo} className="App-logo" alt="logo" /><br/>
                  Progrest React-app with CRUD + Flask python
                </Card.Text>
                <div>
                  <Link className="btn btn-primary " to="/Post">
                    Add User1
                  </Link>
                  &nbsp;
                  <Button
                    onClick={newUser}>
                    Add User2
                  </Button>
                  &nbsp;
                  <Link className="btn btn-primary" to="/userTables">
                    User Table
                  </Link>
                </div>
                </Card.Body>
                </Card>
                 
            ) : (
                <div>
                  <div>
                </div>
                <Card>
                <Card.Header  className="text-center">Content</Card.Header>
                <Card.Body>                
                  <h2>{IsAddMode ? "Add User" : "Edit Userr"}</h2>
                  <hr />
                  <form className="needs-validated" onSubmit={saveUser}>
                    <div className="form-group mb-2">
                      <Form.Group className="mb-3" controlId="formBasicEmail"  htmlFor="key">
                        <Form.Label>keys</Form.Label>
                        <Form.Control 
                          placeholder="Input keys"                       
                          type="text"
                          className="form-control"
                          id="key"
                          required={true}
                          value={User.key}
                          onChange={handleInputChange}
                          name="key"
                          disabled={!IsAddMode} />
                      </Form.Group>                  
                      <Form.Group className="mb-3" controlId="formBasicEmail"  htmlFor="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          placeholder="Input First Name"
                          type="text"
                          className="form-control"
                          id="firstName"
                          value={User.firstName}
                          onChange={handleInputChange}
                          name="firstName"
                          required={true} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail"  htmlFor="firstName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          placeholder="Input Last Name"
                          type="text"
                          className="form-control"
                          id="lastName"
                          value={User.lastName}
                          onChange={handleInputChange}
                          name="lastName"
                          required={true} />
                      </Form.Group>
                    </div>
                    <Button type="submit" className="btn btn-primary float">
                      save
                    </Button>
                    &nbsp;
                    <Button
                      onClick={handleCancel}
                      className="btn btn-primary float-end"
                    >
                      Go Home
                    </Button>
                  </form>
                  </Card.Body>
                </Card>
                </div>
            )}
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
 
}
