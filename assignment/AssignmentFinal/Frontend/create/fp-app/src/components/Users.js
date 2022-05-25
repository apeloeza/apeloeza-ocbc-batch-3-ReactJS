import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../redux/actions/userActions";
import { ToastContainer } from "react-toastify";

export default function Users() {
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

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
    setIsAddMode(true);
  };

  const handleCancel = () => {
    setUser(initialUserState);
    setSubmitted(true);
  };

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

  return (
    <>
      <ToastContainer />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="submit-form">
            {submitted ? (
              <div>
                <button
                  className="btn btn-outline-success mt-2 shadow p-2 mb-3 rounded"
                  onClick={newUser}
                >
                  <i className="bi bi-plus-square"></i> Add User
                </button>
              </div>
            ) : (
              <div className="shadow p-3 mb-5 bg-body rounded mt-2">
                <h2>{IsAddMode ? "Add User" : "Edit User"}</h2>
                <hr />
                <form className="needs-validated" onSubmit={saveUser}>
                  <div className="form-group mb-2">
                    <label htmlFor="key">
                      <strong>Key</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="key"
                      required={true}
                      value={User.key}
                      onChange={handleInputChange}
                      name="key"
                      disabled={!IsAddMode}
                    />
                    <div className="invalid-feedback">Key required.</div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="firstName">
                      <strong>First Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={User.firstName}
                      onChange={handleInputChange}
                      name="firstName"
                      required={true}
                    />
                    <div className="invalid-feedback">First Name required.</div>
                  </div>
                  <div className="form-group mb-2">
                    <label htmlFor="lastName">
                      <strong>Last Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={User.lastName}
                      onChange={handleInputChange}
                      name="lastName"
                      required={true}
                    />
                    <div className="invalid-feedback">Last Name required.</div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    <i className="bi bi-save"></i>
                  </button>
                  &nbsp;
                  <button
                    onClick={handleCancel}
                    className="btn btn-outline-danger"
                  >
                    <i className="bi bi-x-square"></i>
                  </button>
                </form>
              </div>
            )}
          </div>
          <div className="mb-3"></div>
          {Object.keys(users).length === 0 ? (
            <></>
          ) : (
            <div className="shadow p-3 mb-5 bg-body rounded">
              <h2>User List</h2>
              <Table striped bordered hover>
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
                      <td onClick={() => fetchUserDetails(keys)}>{i + 1}</td>
                      <td onClick={() => fetchUserDetails(keys)}>
                        {users[keys].firstName}
                      </td>
                      <td onClick={() => fetchUserDetails(keys)}>
                        {users[keys].lastName}
                      </td>
                      <td>
                        <button
                          onClick={() => handleEdit(users[keys])}
                          className="btn btn-outline-info"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => handleRemove(keys)}
                          className="btn btn-outline-danger"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
