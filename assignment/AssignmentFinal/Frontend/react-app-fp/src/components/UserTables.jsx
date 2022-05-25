import { Card, Table, Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  createUser,  deleteUser,  getUsers,  updateUser,} from "../redux/Actions";
import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";

export default function UserTables() {
  const initialUserState = {
    key: "",
    firstName: "",
    lastName: "",
  };
  const [User, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(true);
  const [IsAddMode, setIsAddMode] = useState(true);

  const users = useSelector((state) => state.userReducer);
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
  // router ke detail user
  const fetchUserDetails = (keys) => {
    window.location.assign(`/users/${keys}`);
  };
  
  const handleEdit = (keys) => {
    setSubmitted(false);
    setIsAddMode(false);
    const temp = { ...keys };

    setUser({ ...User, ...temp });
  };

  const handleRemove = (keys) => {
    dispatch(deleteUser(keys));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!IsAddMode) {
      setSubmitted(false);
    }
  }, [IsAddMode]);

  // untuk menampilkan Modal delete
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>      
    <br/>
    <ToastContainer />
      <div className="row">
        <div className="col-2"></div> 
          <div className="col-8">
            <div className="mb-4"></div>
                <Card>
                <Card.Header  className="text-center">Content</Card.Header>
                <Card.Body>
                {Object.keys(users).length === 0 ? (
                  <></>
                ) : (
                  <div>
                  <div className="p-3 mb-4 bg-body ">
                    <h2>User List</h2>              
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.keys(users).map((keys, i) => (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>
                              {users[keys].firstName}
                            </td>
                            <td>
                              {users[keys].lastName}
                            </td>
                            <td>
                            <a href="#adduser" >
                              <Button
                                onClick={() => handleEdit(users[keys])}
                                className="btn btn-primary"
                              > edit
                              </Button></a>
                              &nbsp;
                              <Button
                                onClick={() => fetchUserDetails(keys)}
                                className="btn btn-warning"
                              >detail
                              </Button>
                              &nbsp;
                                <Button variant="primary" onClick={handleShow} className="btn btn-danger">
                                  Delete
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Modal Deleting</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>Are you sure to delete User</Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                      Close
                                    </Button>
                                    <Button
                                      onClick={() => handleRemove(keys)}
                                      className="btn btn-danger"
                                    >delete
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                  </div>
                )}
              <Link className="btn btn-primary float-end" to="/">
                Go Home
              </Link>
              </Card.Body>
              </Card>
              <div className="submit-form">
                {submitted ? (
                  <></>
                ) : (
                  <div className=" p-3 mb-5 bg-body rounded">
                    <div>
                  </div>
                    <h2 id="adduser">{IsAddMode ? "Add User" : "Edit User"}</h2>
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
                      <Button type="submit" className="btn btn-primary float- center">
                        save
                      </Button>       
                    </form>
                  </div>
                )}              
              </div>
            </div>
          </div>
        <br/>
    </>
  );
}
