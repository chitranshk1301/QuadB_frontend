import ShowsList from "./components/showsList";

function App() {
  return (
    <div className="App">
      <header className="flex justify-center sm:mx-[10em] sm:mt-16 sm:w-max text-6xl font-extrabold text-gray-400 overline">
        QuadB <span className="text-orange-400"> TV-shows </span>  collection
      </header>
        <hr 
          className="border-1 border-black w-full mt-8"
        />

      <ShowsList />
    </div>
  );
}

export default App;
