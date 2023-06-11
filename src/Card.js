import { useNavigate, useNavigation } from "react-router-dom";
import "./App.css";

import { Button, Icon, Card, Segment } from "semantic-ui-react";
import { useState } from "react";

function AllCards({ infodata }) {
  const navigate = useNavigate("/");

  return (
    <>
      <div
        style={{
          display: "flex",
          // margin: "1em 1em 1em 5em",
          margin: "2em",
          alignItems: "center",
          justifyContent: "center",
          // display: "flex",
        }}
      >
        <Card.Group>
          {infodata?.map((ele) => {
            return (
              <Card>
                <Card.Content>
                  <Card.Header>{ele.name}</Card.Header>
                  <Card.Meta>{ele.profession}</Card.Meta>
                  <Card.Description>{ele.email}</Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    </>
  );
}

export default AllCards;
