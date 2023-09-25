import Slider from "@mui/material/Slider";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Slider defaultValue={30} />
        <Slider
          defaultValue={30}
          className="text-teal-600"
          slotProps={{ thumb: { className: "rounded-sm" } }}
        />
      </div>
    </>
  );
}

export default App;
