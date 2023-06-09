import { useNavigate, useNavigation } from "react-router-dom";
import "./App.css";
import { info } from "./InfoApi";
import { Button, Icon, Card, Segment } from "semantic-ui-react";

function AllCards() {
  const navigate = useNavigate("/");
  return (
    <>
      <div className="navbar">
        <Segment>
          <Button secondary icon labelPosition="left">
            <Icon name="all users" />
            All User's
          </Button>
          <Button
            color="green"
            icon
            labelPosition="right"
            onClick={() => {
              navigate("/add");
            }}>
            Add User's
            <Icon name="add users" />
          </Button>
        </Segment>
      </div>

      <div className="card">
        <Card.Group>
          {info.map((ele) => {
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
