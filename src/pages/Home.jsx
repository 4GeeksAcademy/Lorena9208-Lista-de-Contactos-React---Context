import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Agendas from "../components/Agendas.jsx";
import { Link } from "react-router-dom";

export const Home = () => {


  return (


    <div className="text-center mt-5">
      <div className="container text-end mt-4">
        <Link to="/add" className="btn btn-success">
          Add new contact
        </Link>
      </div>
      <Agendas />
    </div >
  );
};


