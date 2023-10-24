import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Form,
} from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { connect } from "react-redux";
import { deleteTodo, updateTodo, getTodo } from "../redux/actions/todo";

function DisplayToDos({ todos, deleteTodo, updateTodo, getTodo }) {
  const [editableId, setEditableId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id, currentTitle, currentDescription) => {
    setEditableId(id);
    setEditedTitle(currentTitle);
    setEditedDescription(currentDescription);
  };

  const handleSave = async(id) => {
    await updateTodo({
      id: id,
      title: editedTitle,
      description: editedDescription,
    });
    setEditableId(null);
    setEditedTitle("");
    setEditedDescription("");
    getTodo();
  };

  useEffect(() => {
    getTodo();
  }, [getTodo]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <DisplayCount />
              <ListGroup>
                {!todos ? (
                  <p>Loading...</p>
                ) : (
                  todos.map((todo, index) => (
                    <ListGroup.Item key={index}>
                      {editableId === todo.id ? (
                        <Form.Group>
                          <Form.Control
                            type="text"
                            className="mt-2"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                          />
                          <Form.Control
                            as="textarea"
                            className="mt-1"
                            value={editedDescription}
                            onChange={(e) =>
                              setEditedDescription(e.target.value)
                            }
                          />
                          <Button
                            variant="success"
                            className="my-1"
                            onClick={() => handleSave(todo.id)}
                          >
                            Save
                          </Button>
                        </Form.Group>
                      ) : (
                        <>
                          <h4>{todo.title}</h4>
                          <h5>{todo.description}</h5>
                          <Button
                            variant="primary"
                            className="me-2 px-4 py-1"
                            onClick={() =>
                              handleEdit(todo.id, todo.title, todo.description)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(todo.id)}
                            className="ml-2 py-1"
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { todos: state.todoReducer };
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  getTodo: () => dispatch(getTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayToDos);
