import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="shadow p-3 mb-5 rounded mt-5 pb-5">
        <h1 className="text-center">404</h1>
        <h2 className="text-center">Page Not Found</h2>
        <Link className="btn btn-outline-primary float-end" to="/">
          Go Home
        </Link>
      </div>
    </>
  );
}
