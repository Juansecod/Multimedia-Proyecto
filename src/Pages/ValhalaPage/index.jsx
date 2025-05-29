import error from "../../assets/404.png";
import "./Valhala.css"

function ValhalaPage() {

  return (
    <>
        <div className="errorContainer">
            <img className="error" src={error} alt="" />
        </div>
    </>
  );
}

export default ValhalaPage;
