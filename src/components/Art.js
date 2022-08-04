import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Art = ({
  id,
  artname,
  author,
  price,
  quantity,
  date,
  handleRemoveArt,
}) => {
  let navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="art">
      <Card.Body>
        <Card.Title className="art-title">{artname}</Card.Title>
        <div className="art-details">
          <div>Author:{author}</div>
          <div>Quantity:{quantity}</div>
          <div>Price:{price}</div>
          <div>Submitted:{new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </Button>
        {""}
        <Button variant="danger" onClick={() => handleRemoveArt(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Art;
