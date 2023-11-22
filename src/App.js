import './App.css';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './router/allRoutes';
import 'react-slideshow-image/dist/styles.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;