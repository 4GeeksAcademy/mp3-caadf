import React, { useState, useEffect, useRef } from 'react'
import { IoPlayBackSharp } from "react-icons/io5"
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";



const Mp3audio = () => {

    const [songs, setSongs] = useState([]);
    const [currentsong, setCurrentSong] = useState(null);
    const audioRef = useRef();

    useEffect(() => {
        obtenerCanciones()
    }, [])

    const obtenerCanciones = () => {
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
    }

    const songUrl = "https://playground.4geeks.com/apis/fake/sound"

    const playcancion = (cancionIndex) => {
        const cancion = songs[cancionIndex];
        setCurrentSong(cancionIndex);
        audioRef.current.src = songUrl + songUrl.url;
        audioRef.current.play();
    };

    const stopCancion = () => {
        audioRef.current.pause();
    };
 
    const siguienteCancion = () =>{
        const nextsong = (currentsong + 1) % songs.length;
        playcancion(nextsong);
    };
 
    const previaCancion = () => {
        const lastsong = (currentsong -1) % songs.length;
        playcancion(lastsong);
    };

    return (
        <>
            <div className="control-players">
                <button onClick={previaCancion }><IoPlayBackSharp /></button>
                <button onClick={stopCancion }><IoPlaySharp /></button>
                <button onClick={siguienteCancion }><IoPlayForwardSharp /></button>
            </div>
        </>
    )

}

export default Mp3audio