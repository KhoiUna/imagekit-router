module.exports = {
  publicKey: "public_I3q/NHmLHXdRfx+LDlNIE2DLOqY=", //replace with your ImageKit public key
  urlEndpoint: "https://ik.imagekit.io/chekchat", //replace with your ImageKit url endpoint
  origin:
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://imgupload-api.herokuapp.com", //replace with your api
};
