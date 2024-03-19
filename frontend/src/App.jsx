import { Route, Routes } from "react-router-dom";
import CreateCode from "./pages/CreateCode";
import DisplayCode from "./pages/DisplayCode";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    language: "c++",
    input: "",
    snippet: "",
  });

  return (
    <Routes>
      <Route
        path="/"
        element={<CreateCode formData={formData} setFormData={setFormData} />}
      />
      <Route path="/displayall" element={<DisplayCode />} />
    </Routes>
  );
};

export default App;
