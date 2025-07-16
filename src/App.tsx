import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from "@/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
