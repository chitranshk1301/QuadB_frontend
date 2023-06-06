import ShowsList from "./pages/showsList";
import Show from "./pages/show";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="flex justify-center sm:mx-[10em] sm:mt-16 sm:w-max text-6xl font-extrabold text-gray-400 overline">
        QuadB <span className="text-orange-400">TV-shows</span> collection
      </header>
      <hr
        className="border-1 border-black w-full mt-8"
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<ShowsList />} />
          <Route path="show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
