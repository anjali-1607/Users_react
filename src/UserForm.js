import React, { useState } from "react";
import "./App.css";
import { Button, Checkbox, Form, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const UserForm = ({ FormValues = () => {} }) => {
  const navigate = useNavigate("/");
  const [data, setData] = useState({});
  // console.log(data);

  const onsubmit = () => {
    FormValues(data);
    navigate("/");
  };
  return (
    <>
      <div className="form">
        <Segment className="form_segment">
          <Form>
            <Form.Field required>
              <label>Full Name</label>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                placeholder="Full Name"
              />
            </Form.Field>
            <Form.Field required>
              <label>Profession</label>
              <input
                placeholder="student,teacher,devloper,etc..."
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({
                    ...data,
                    profession: e.target.value,
                  });
                }}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <input
                placeholder="abc@gmail.com"
                onChange={(e) => {
                  console.log(e.target.value);
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Field>

            <Button
              secondary
              type="submit"
              onClick={() => {
                onsubmit();
              }}
            >
              Add
            </Button>
          </Form>
        </Segment>
      </div>
    </>
  );
};

export default UserForm;
