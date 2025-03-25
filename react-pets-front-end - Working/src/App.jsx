import { NavLink, Route, Routes } from "react-router";
import AllPetsPage from "./pages/AllPetsPage";
import EditPetPage from "./pages/EditPetPage";
import NewPetPage from "./pages/NewPetPage";
import OnePetPage from "./pages/OnePetPage";

const App = () => {
  return (
    <>
      <NavLink to="/pets">
        <h1>Pet Store</h1>
      </NavLink>

      <Routes>
        <Route path="/pets" element={<AllPetsPage />}></Route>
        <Route path="/pets/new" element={<NewPetPage />} />
        <Route path="/pets/:petId" element={<OnePetPage />} />
        <Route path="/pets/:petId/edit" element={<EditPetPage />} />
      </Routes>
    </>
  );
};

export default App;
