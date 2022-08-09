export default function Login(props) {
  return (
    <div id="loginContainer">
      <button
        id="loginBtn"
        onClick={() => {
          props.toggleLgn(true);
        }}
      >
        Login
      </button>
    </div>
  );
}
