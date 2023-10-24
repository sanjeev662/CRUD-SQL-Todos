import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import {connect} from 'react-redux';

function DisplayCount({count}) {
  return (
    <>
      <Card className="shadow-sm border-0 mb-2">
        <Card.Body>
          <h3>Total number of todos is {count}</h3>
        </Card.Body>
      </Card>
    </>
  );
}

const mapStateToProps = (state) =>{
  return {count:state.todoReducer.length}
}

export default connect(mapStateToProps)(DisplayCount);
