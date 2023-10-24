import React, { useState } from "react";
import { Form, Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch,connect } from "react-redux";
import {addTodo} from "../redux/actions/todo"

function AddToDo({addTodo}) {

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add To Do List Item Here!!</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label for="exampleInputEmail">Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={todo.title}
                    onChange={(e) =>
                      setTodo({ ...todo, title: e.target.value })
                    }
                    placeholder="enter here"
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label for="exampleInputEmail">
                    Todo Do Description
                  </Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="enter here"
                    value={todo.description}
                    onChange={(e) =>
                      setTodo({ ...todo, description: e.target.value })
                    }
                  ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Add Todo
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddToDo);
