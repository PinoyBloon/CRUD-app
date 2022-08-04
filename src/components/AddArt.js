import React from "react";
import { useNavigate } from "react-router-dom";

import ArtForm from "./ArtForm";

const AddArt = ({ arts, setArts }) => {
  let navigate = useNavigate();

  const handleOnSubmit = (art) => {
    setArts([art, ...arts]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <ArtForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddArt;
