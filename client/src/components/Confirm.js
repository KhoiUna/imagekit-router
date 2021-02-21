import { Link, Redirect } from "react-router-dom";

export default function Confirm({ location }) {
  if (location.userData) {
    return (
      <>
        <h1>Confirm</h1>

        <Link to={{ pathname: "/login", userData: location.userData }}>
          <button>SUBMIT</button>
        </Link>
      </>
    );
  } else {
    return <Redirect from="/confirm" to="/" />;
  }
}
