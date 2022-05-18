
import React, { useRef } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddTask = () => {

  const [user] = useAuthState(auth)
  
   const nameref = useRef();
   const descref = useRef();






   const handleSubmit = (e) => {
     e.preventDefault();

       const taskname = nameref.current.value;
       const descrip = descref.current.value;
       const email = user.email;

       const task = {taskname,descrip,email};
          const url = "http://localhost:8000/todolist";
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(task),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));


       console.log(task);
  

   }

    return (
      <div>
        <Form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTask">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" ref={nameref} placeholder="Enter your task name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" ref={descref} rows={3} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};

export default AddTask;