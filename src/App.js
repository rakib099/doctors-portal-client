import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes/Routes";


function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
