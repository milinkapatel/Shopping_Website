import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItem";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
