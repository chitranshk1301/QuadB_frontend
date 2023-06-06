import ShowsList from "./pages/showsList";
import Show from "./pages/show";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <a href="/">
      <header className="flex justify-center ml-[6.5em] mt-10 text-xl sm:mx-[10em] md:mx-[4em] sm:mt-16 sm:w-max sm:text-6xl font-extrabold text-gray-400 overline">
        QuadB <span className="text-orange-400">TV-shows</span> collection
      </header>
      </a>
      <hr
        className="border-1 border-black w-[30em] sm:w-full md:w-[113em] mt-8"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="show/:id" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
