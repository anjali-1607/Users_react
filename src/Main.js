import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "./UserForm";
import AllCards from "./Card";
import { info } from "./InfoApi";
import { Button, Icon, Segment } from "semantic-ui-react";
export default function Main() {
  const navigate = useNavigate("/");

  return (
    <>
      <div
        className="navbar"
        style={{
          margin: "2em",
        }}
      >
        <Segment style={{ width: "100%" }}>
          <Button
            secondary
            icon
            labelPosition="left"
            onClick={() => {
              navigate("/");
            }}
          >
            <Icon name="all users" />
            All User's
          </Button>
          <Button
            style={{ marginLeft: "10em" }}
            floated="right"
            color="green"
            icon
            labelPosition="right"
            onClick={() => {
              navigate("/add");
            }}
          >
            Add User's
            <Icon name="add users" />
          </Button>
        </Segment>
      </div>
      <Components />
    </>
  );
}

const Components = () => {
  const { name } = useParams();
  const [userdata, setUserData] = useState(info);

  const userValues = (data) => {
    // console.log(data);
    setUserData([...userdata, data]);
  };

  if (name === "add") {
    return (
      <>
        <UserForm FormValues={userValues} />
      </>
    );
  } else {
    return (
      <>
        <AllCards infodata={userdata} />
      </>
    );
  }
};
