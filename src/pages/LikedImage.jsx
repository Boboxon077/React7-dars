import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Galery from "../components/Galery"



function LikedImage() {
    const { likedImages } = useContext(GlobalContext)
    console.log(likedImages)
    return ( 
        <>
            <Galery />
        </>
    )
}

export default LikedImage