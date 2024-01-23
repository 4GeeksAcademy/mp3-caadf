import React, { useState, useEffect, useRef } from 'react'
import { IoPlaySharp, IoPlayBackSharp, IoPlayForwardSharp } from "react-icons/io5";



const AudioPlayer = () => {

    const [songs, setSongs] = useState([]);
    const [currentsong, setCurrentSong] = useState();
    const audioRef = useRef(null);

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


    const cambiarCancion = (cancion, index) => {
        const songUrl = "https://playground.4geeks.com/apis/fake/sound/" + cancion.url
        console.log(songUrl)
        audioRef.current.src = songUrl
        setCurrentSong(index)
    }



    const siguienteCancion = () => {
        if (currentsong <= songs.length) {
            const nextsong = songs[currentsong + 1]
            const url = "https://playground.4geeks.com/apis/fake/sound/" + nextsong.url
            audioRef.current.src = url
            console.log(nextsong)
            setCurrentSong(currentsong + 1)
        }
        else {
            setCurrentSong(0)
            const urls = "https://playground.4geeks.com/apis/fake/sound/" + songs[currentsong].url
            audioRef.current.src = urls
        }

    };

    const previaCancion = () => {
        const lastsong = (currentsong - 1)
    };


    return (
        <>
            <audio controls ref={audioRef} />


            <div className="control-players">
                <button onClick={previaCancion}><IoPlayBackSharp /></button>
                <button onClick={siguienteCancion}><IoPlayForwardSharp /></button>
            </div>
            <ul>
                {
                    Array.isArray(songs) && songs.length > 0 &&
                    songs.map((cancion, index) => {
                        return <li key={index} onClick={() => cambiarCancion(cancion, index)}>{cancion.name}</li>
                    })
                }
            </ul>
        </>
    )

}

export default AudioPlayer