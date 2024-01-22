import React, { useState } from 'react'
import { IoPlayBackSharp } from "react-icons/io5"
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";



const Mp3audio = () => {

    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState("");
    const audioRef = useRef();

    useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/sound/songs")
            .then((response) => {
                console.log(response)
                if (response.status === 404) throw new Error('Pagina no existe')
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setSongs(data.results)
            })
    }, [];

    const songUrl = "https://playground.4geeks.com/apis/fake/sound"

    


    return (
        <>
            <div className="control-players">
                <button onClick={ }><IoPlayBackSharp /></button>
                <button onClick={ }><IoPlaySharp /></button>
                <button onClick={ }><IoPlayForwardSharp /></button>
            </div>
        </>
    )

}

export default Mp3audio