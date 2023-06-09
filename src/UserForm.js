import React from "react";
import "./App.css";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate("/");
  return (
    <>
      <div className="form">
        <Segment className="form_segment">
          <Form onsubmit="return validateForm()" method="post">
            <Form.Field>
              <label>Full Name</label>
              <input placeholder="Full Name" />
            </Form.Field>
            <Form.Field>
              <label>Profession</label>
              <input placeholder="student,teacher,devloper,etc..." />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="abc@gmail.com" />
            </Form.Field>

            <Button
              secondary
              type="submit"
              onClick={() => {
                navigate("/form");
              }}>
              Add
            </Button>
          </Form>
        </Segment>
      </div>
    </>
  );
};

export default UserForm;
