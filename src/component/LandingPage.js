import Icon from "../images/lens-1418954/lens-1418954.png"
import { useNavigate } from "react-router-dom"
import "../landing.css"
const alt = "Icon Images"
function LandingPage() {
    const navigate = useNavigate();
    return (<div className="landing">
        <div id="img">
            <img src={Icon} alt={alt} />
        </div>
        <div id="button">
            <h1>10x Team 04</h1>
            <button onClick={() => {
                navigate('/postview') 
            }}>Enter</button>
        </div>

    </div>)
}

export default LandingPage;