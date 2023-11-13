import { useNavigate } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <div>
      <div className="Button">
        <Link to="/seacrhcar">
          <button id="btn-banner" className="btn">
            Mulai Sewa mobil
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Button;
