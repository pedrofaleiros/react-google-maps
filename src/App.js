import { useLoadScript } from "@react-google-maps/api";
import { Map } from './components/Map/Map';
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <div>Erro</div>;
  }

  return <div className="all">
    <Map />
    <SideBar />
  </div>
}

export default App;
