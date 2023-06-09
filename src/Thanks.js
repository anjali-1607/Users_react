import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Segment, Step } from "semantic-ui-react";

const Thanks = () => {
  const navigate = useNavigate("/");
  return (
    <>
      <div className="btn_great">
        <Segment>
          <Button
            positive
            onClick={() => {
              navigate("/thanks");
            }}>
            {" "}
            Okk Great !!!
          </Button>
        </Segment>
      </div>
    </>
  );
};

export default Thanks;
