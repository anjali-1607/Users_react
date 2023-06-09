import logo from "./logo.svg";
import "./App.css";
import { Button, Icon, Card } from "semantic-ui-react";

function App() {
  return (
    <>
      <div className="navbar">
        <Button primary icon labelPosition="left">
          <Icon name="all users" />
          All User's
        </Button>
        <Button secondary icon labelPosition="right">
          Add User's
          <Icon name="add users" />
        </Button>
      </div>

      <div className="card">
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header>Matthew Harris</Card.Header>
              <Card.Meta>Co-Worker</Card.Meta>
              <Card.Description>
                Matthew is a pianist living in Nashville.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header content="Jake Smith" />
              <Card.Meta content="Musicians" />
              <Card.Description content="Jake is a drummer living in New York." />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content
              header="Elliot Baker"
              meta="Friend"
              description="Elliot is a music producer living in Chicago."
            />
          </Card>

          <Card
            header="Jenny Hess"
            meta="Friend"
            description="Jenny is a student studying Media Management at the New School"
          />
        </Card.Group>
      </div>
    </>
  );
}

export default App;
