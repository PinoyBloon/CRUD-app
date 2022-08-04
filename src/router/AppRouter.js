import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import AddArt from "../components/AddArt";
import ArtList from "../components/ArtLists";
import useLocalStorage from "../hooks/LocalStorage";
import EditArt from "../components/EditArts";

const AppRouter = () => {
  const [arts, setArts] = useLocalStorage("arts", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ArtList arts={arts} setArts={setArts} />}
            />
            <Route
              path="/add"
              element={<AddArt arts={arts} setArts={setArts} />}
            />
            <Route
              path="/edit/:id"
              element={<EditArt arts={arts} setArts={setArts} />}
            />
            <Route path="/" render={() => <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
