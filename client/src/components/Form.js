import defaultAvatar from "../img/default.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IKContext, IKUpload } from "imagekitio-react";
import { origin, publicKey, urlEndpoint } from "../config";

const authenticationEndpoint = `${origin}/auth`;
const backendApiToSaveImg = `${origin}/saveFile`;

export default function Form() {
  const [obj, setObj] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onError = (err) => {
    console.log("Error", err);
    setImgURL("");
  };

  const [imgURL, setImgURL] = useState("");
  const onSuccess = async (res) => {
    console.log("Success", res);

    const path = res.url;
    if (res.fileType === "image") {
      setImgURL(path);
    } else {
      setImgURL("");
    }

    const result = await fetch(backendApiToSaveImg, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ address: path }),
    });
    console.log(await result.text());
  };

  const { name, age } = obj;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {imgURL ? (
        <img
          src={imgURL + "?tr=w-300,h-300"}
          width="20%"
          alt="user_upload"
          style={{ borderRadius: "100%" }}
        />
      ) : (
        <img
          src={defaultAvatar}
          width="20%"
          alt="user_upload"
          style={{ borderRadius: "100%" }}
        />
      )}
      <br />

      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
      >
        <h2>File upload</h2>
        <IKUpload
          fileName="user_avatar.png"
          onError={onError}
          onSuccess={onSuccess}
        />
      </IKContext>
      <br />
      <br />

      <input
        placeholder="name"
        type="text"
        onChange={handleChange}
        value={obj.name || ""}
        name="name"
        required
      />
      <br />
      <input
        placeholder="age"
        type="number"
        onChange={handleChange}
        value={obj.age || ""}
        name="age"
        required
      />
      <br />

      {name && age && imgURL ? (
        <Link to={{ pathname: "/email", userData: { ...obj, imgURL } }}>
          <button>Next</button>
        </Link>
      ) : (
        <button>Next</button>
      )}
    </form>
  );
}
