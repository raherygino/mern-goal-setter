import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboad = () => {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => { 
        if (!user) {
            navigate('/login')
        }
    })
    
    return(
        <>
            <h1>Dashboard</h1>
        </>
    )
}

export default Dashboad;