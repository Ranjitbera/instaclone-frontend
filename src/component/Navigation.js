import icon from '../images/icon.svg'
import camera from '../images/camera/camera.png'
import { useNavigate } from 'react-router-dom'
import "../landing.css"

function Navigation() {
    const navigate = useNavigate();
    return (<>
        <nav>
            <span><img className='one' src={icon} alt="" /></span>
            <span className='content'>Instaclone</span>
            <img className='two' onClick={() => {
                navigate('/post')
            }} src={camera} alt="" />
        </nav>
        <hr />
    </>)
}
export default Navigation;