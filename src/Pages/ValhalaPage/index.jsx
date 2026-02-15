import error from "../../assets/404.png";
import NavBar from "../../Components/NavBar";
import "./Valhala.css"

function ValhalaPage() {

  return (
    <>
      <NavBar backgroundColor="#771111"></NavBar>
        <div className="errorContainer">
            <img className="error" src={error} alt="" />
        </div>
    </>
  );
}

export default ValhalaPage;
