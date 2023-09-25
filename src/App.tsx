import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className=" mx-auto max-w-md bg-[#F7F9FB]">
        <Header />
        <div className=" h-[600vh] px-7 pt-5">
          <h1 className="text-xl font-semibold text-[#304985] ">
            ¡Bienvenido, Sam!
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
