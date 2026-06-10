// this component receives an "error" prop from App.jsx
// if error exists, show it. If not, show nothing
function ErrorMessage({ error }) {

  // if there is no error, return nothing
  if (!error) {
    return null; // null means "render nothing"
  }

  // if there is an error, display it.
  return (
    <div style={{ color: "red" }}>
      {error}
    </div>
  );
}

export default ErrorMessage;
