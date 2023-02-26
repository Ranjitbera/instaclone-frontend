import { useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            formData.append("location", location);
            formData.append("description", description);
            const res = await axios.post("https://ranjit-instaclone-backend.onrender.com/upload", formData);
           
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/postview")
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    return (<>
        <Navigation />
        <form  action="/postview" method="POST" onSubmit={handleSubmit}>
            <div id='first'>
                <input type="file" onChange={handleImageChange} />
            </div>
            <div>
                <input id='kkd' type="text" placeholder="Author" onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder="Location" onChange={(e)=>setLocation(e.target.value)}/>
            </div>
            <div>
                <input id='dis' type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <button id='submit' type="submit" >Post</button>
        </form>
    </>)
}
export default Form;