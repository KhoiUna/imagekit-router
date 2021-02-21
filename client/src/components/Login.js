import { Redirect } from "react-router-dom";

export default function Login({ location }) {
  if (location.userData) {
    return (
      <>
        <h1>Finish!</h1>
        <p>{JSON.stringify(location.userData)}</p>
      </>
    );
  } else {
    return <Redirect from="/login" to="/" />;
  }
}
