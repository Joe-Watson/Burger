import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Img from "../../../asset/Image/burger-logo.png"
const Logo = () => {
    return (<a className="navbar-brand">
        <img className="img-fluid" src={Img} alt="MyBuger" />
    </a>)
}
export default Logo