import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [isAdded, setIsAdded] = useState({});

  useEffect(() => {
    fetch("https://appointment-booking-az.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [isAdded]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
    };
    console.log(appointmentDetails);
    fetch("https://appointment-booking-az.herokuapp.com/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Your are appointed");
          setIsAdded(data);
        }
        event.target.reset();
      });
  };
  return (
    <div className="row mx-auto gap-5 mt-5 pb-5">
      <ToastContainer />
      <div className="col-md-5 border py-3 px-4 rounded-3">
        <h3 className="py-3 text-primary">Get an Appointment</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Your Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              name="phone"
              type="number"
              placeholder="Phone Number"
              required
            />
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
      <div className="col-md-6">
        <h3 className="text-center p-4 text-success">Your appointments list</h3>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(({ name, email, date }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
