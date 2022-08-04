import React from "react";
import _ from "lodash";

import Art from "./Art";

const ArtList = ({ arts, setArts }) => {
  const handleRemoveArt = (id) => {
    setArts(arts.filter((art) => art.id !== id));
  };

  return (
    <React.Fragment>
      <div className="art-list">
        {!_.isEmpty(arts) ? (
          arts.map((art) => (
            <Art key={art.id} {...art} handleRemoveArt={handleRemoveArt} />
          ))
        ) : (
          <p className="message">No Arts available. Please add some</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ArtList;
