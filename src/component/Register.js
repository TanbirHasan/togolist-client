import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import React, { useRef, useState } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";





import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";


import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";


const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();


const [signInWithGoogle, guser, gloading,gerror] = useSignInWithGoogle(auth);
 
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  if (user) {
    navigate("/");
  }

  const nameref = useRef(" ");
  const emailref = useRef(" ");
  const passref = useRef(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passref.current.value;
    const agree = e.target.terms.checked;
    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log("Updated profile");
    }

    console.log(email);
    console.log(password);
  };
  return (
    <div>


      <div className="d-flex justify-content-center">
        <div className="w-50 mt-5" id="resigterform">
            <Button className="mb-3" onClick={() => signInWithGoogle()}>Google Sing In</Button>
          <Form
            className="w-100 mx-auto"
            style={{
              background: "grey",
              padding: "30px",
              marginBottom: "30px",
            }}
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="fw-bold">Full-Name</Form.Label>
              <Form.Control
                type="text"
                ref={nameref}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label  className="fw-bold">Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailref}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label  className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passref}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                onClick={() => setAgree(!agree)}
                name="terms"
                id="terms"
                label="Accept Terms and Conditions"
                className={agree ? "text-primary" : "text-dark"}
              />
            </Form.Group>
            <Button variant="primary" disabled={!agree} type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-center fw-bold">
        Already have an Account?Please{" "}
        <Link className="link" to="/login">
          Login
        </Link>
      </p>

      <span className="error" style={{ color: "red", fontWeight: "500" }}>
        {error}
      </span>

      <div className="react-boot-form"></div>
    </div>
  );
};

export default Register;
