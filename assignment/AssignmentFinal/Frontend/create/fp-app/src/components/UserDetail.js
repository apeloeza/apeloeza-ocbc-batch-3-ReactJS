import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";

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
      <div className="row">
        <div className="col-2">
          
        </div>
        <div className="col-8">
          <div className="shadow p-3 mb-5 bg-body rounded mt-2 pb-5">
            <h2>User {id}</h2>
            <hr />
            <h2>First Name : {User.firstName}</h2>
            <h2>Last Name  : {User.lastName}</h2>
            <Link className="btn btn-outline-primary float-end" to="/">
              Back
            </Link>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}
