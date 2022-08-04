import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ArtForm = (props) => {
  const [art, setArt] = useState(() => {
    return {
      artname: props.art ? props.art.artname : "",
      author: props.art ? props.art.author : "",
      quantity: props.art ? props.art.quantity : "",
      price: props.art ? props.art.price : "",
      date: props.art ? props.art.date : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { artname, author, quantity, price } = art;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [artname, price, quantity, author];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim;
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const art = {
        id: uuidv4(),
        artname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(art);
    } else {
      errorMsg = "Please fill out the fields!";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setArt((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setArt((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setArt((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Art Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="artname"
            value={artname}
            placeholder="Enter your Art's name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter your Art's available stock"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price of the Art</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter your Art's price"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ArtForm;
