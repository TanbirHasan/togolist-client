import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import auth from "../firebase.init"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailref = useRef();
  const passref = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = emailref.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>

      <div className="d-flex justify-content-center">
        <div className="w-50 mt-5" id="loginform">
          <Form
            className="w-50 mx-auto"
            style={{
              background: "grey",
              padding: "30px",
              marginBottom: "30px",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailref}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passref}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-center">
        Don't have an Account?Please{" "}
        <Link className="link" to="/register">
          Register
        </Link>
      </p>
      <p className="text-center">
        Forget Password?
        <button
          onClick={resetPassword}
          className="btn btn-link text-primary pe-auto text-decoration-none "
        >
          Reset Password
        </button>{" "}
      </p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
