import React from "react";
import { Form } from "react-bootstrap";

const Appointment = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const appointmentDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            data: event.target.date.value,
        }
        console.log(appointmentDetails)
    }
  return (
    <div className="row mx-auto gap-5 mt-5">
      <div className="col-5 border py-3 px-4 rounded-3">
        <h3 className="py-3 text-primary">Get an Appointment</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control name="phone" type="number" placeholder="Phone Number" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select a date</Form.Label>
            <Form.Control name="date" type="date" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <button className="btn btn-primary">Submit</button>
          </Form.Group>
        </Form>
      </div>
      <div className="col-6 border">
        <h3 className="text-center p-4 text-success">Your appointments list</h3>
      </div>
    </div>
  );
};

export default Appointment;
