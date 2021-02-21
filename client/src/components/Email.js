import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Form({ location }) {
  const [email, setEmail] = useState("");

  const handleChange = ({ target }) => {
    setEmail(target.value);
  };

  if (location.userData) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={email}
          name="name"
          required
        />
        <br />

        {email.length !== 0 ? (
          <Link
            to={{
              pathname: "/confirm",
              userData: { ...location.userData, email },
            }}
          >
            <button>Confirm</button>
          </Link>
        ) : (
          <button>Confirm</button>
        )}
      </form>
    );
  } else {
    return <Redirect from="/email" to="/" />;
  }
}
