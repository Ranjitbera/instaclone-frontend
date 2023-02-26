import dot from '../images/more_icon.svg'
import heart from "../images/heart/heart.png"
import share from "../images/share/share.png"
import Navigation from './Navigation'
import axios from 'axios'
import { useEffect, useState } from 'react'


function PostView() {
    const [item, setItem] = useState([])
    useEffect(() => {
        axios.get("https://ranjit-instaclone-backend.onrender.com/")
            .then((res) => {
                setItem(res.data)
            })
    }, [])
    return (<>
        <Navigation />
        <div>
            {item.reverse().map((e) => {
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(e.image.data.data))
                )
                return <div className='main'>
                    <div className='name'>{e.name}</div>
                    <img className='dot' src={dot} alt="" />
                    <div className='location'>{e.location}</div>
                    <div id="img1"><img src={`data:image/png;base64,${base64String}`} alt="" /></div>
                    <img className='heart' src={heart} alt="" />
                    <img className='heart' src={share} alt="" />
                    <span className='date'>{e.date}</span>
                    <div className='like'>{e.likes}</div>
                    <h1>{e.description}</h1>
                </div>
            })}
        </div>
    </>)
}

export default PostView;