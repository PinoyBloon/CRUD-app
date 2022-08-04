import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import ArtForm from "./ArtForm";

const EditArt = ({ arts, setArts }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  let artToEdit = arts.find((art) => art.id === id);

  const handleOnSubmit = (art) => {
    const filteredArts = arts.filter((art) => art.id !== id);
    setArts([art, ...filteredArts]);
    navigate("/");
  };

  return (
    <div>
      <ArtForm art={artToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditArt;
