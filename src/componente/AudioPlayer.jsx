import React, { useState, useEffect, useRef } from 'react'
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";



const AudioPlayer = () => {

    const [songs, setSongs] = useState([]);
    const [currentsong, setCurrentSong] = useState();
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
                setSongs(data)
            })
    }

    const cambiarCancion = (cancion) =>{
setCurrentSong (`https://assets.breatheco.de/apis/sound/${cancion.url}`)   
} 
  /*   const songUrl = "https://playground.4geeks.com/apis/fake/sound" */

   /*  const playcancion = (cancionIndex) => {
        const cancion = songs[cancionIndex];
        setCurrentSong(cancionIndex);
        audioRef.current.src = songUrl + cancion.url;
        audioRef.current.play();
    }; */

    /* const stopCancion = () => {
        audioRef.current.pause();
    }; */
 
   /*  const siguienteCancion = () =>{
        const nextsong = (currentsong + 1);
        playcancion(nextsong);
    };
 
    const previaCancion = () => {
        const lastsong = (currentsong -1)};
        playcancion(lastsong);
    };
 */
    return (
        <> 
     <audio src= {currentsong} controls></audio>

    
           {/*  <div className="control-players">
                <button onClick={previaCancion }><IoPlayBackSharp /></button>
                <button onClick={stopCancion }><IoPlaySharp /></button>
                <button onClick={siguienteCancion }><IoPlayForwardSharp /></button>
            </div> */}
            <ul>
            {
                Array.isArray(songs) && songs.length > 0 &&
                songs.map((cancion, id) => {
                    return <li key={id} onClick={()=>cambiarCancion(cancion)}>{cancion.name}</li>
                })
            }
            </ul>
        </>
    )

}

export default AudioPlayer