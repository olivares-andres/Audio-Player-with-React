import React, { useState, useRef } from 'react';
import Songs from './Songs';
import '../index.css';
import Mario from "../img/marioCastle.jpg"


const MediaSong = (props) => {

    const napsterRef = useRef(null);
    const actual = useRef(null);

    const [state] = useState(
        [
            {
                name: "Mario Castle",
                wpt: "song1",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3",
            },
            {
                name: "Mario Star",
                wpt: "song2",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3"
            },
            {
                name: "Mario Overworld",
                wpt: "song3",
                url: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3"
            }
        ])

    const playSong = (index) => {
        napsterRef.current.src = state[index].url;
        setSource(index);
        actual.current.innerHTML = "Song: " + state[index].name;
        napsterRef.current.play();
    }

    const [source, setSource] = useState(0)

    const playForward = () => {
        if (source < state.length - 1) {
            napsterRef.current.src = state[source + 1].url;
            actual.current.innerHTML = "Song: " + state[source + 1].name;
            setSource(source + 1);
            napsterRef.current.play();
        }
    }

    const playBackward = () => {
        if (source < state.length && source > 0) {
            napsterRef.current.src = state[source - 1].url;
            actual.current.innerHTML = "Song: " + state[source - 1].name;
            setSource(source - 1);
            napsterRef.current.play();
        }
    }

    const randomSong = () => {
        let random = Math.floor(Math.random() * (state.length));
        napsterRef.current.src = state[random].url;
        napsterRef.current.play();
        actual.current.innerHTML = "Song: " + state[random].name;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="card cardStyle">
                    <img src={Mario} className="card-img-top" alt="..." />
                    <div className="card-body bg-white">
                        <h5 className="card-title fontType ">The MarioList classic songs</h5>
                        <ul>
                            {
                                state.map((s, i) => {
                                    return <Songs
                                        name={s.name}
                                        key={i}
                                        index={i}
                                        playSong={playSong}
                                    />
                                })
                            }
                        </ul>
                    </div>
                    <div className="card-footer bg-dark ">
                        <div>
                            <div ref={actual} className="actualSong">
                            </div>
                            <div className="row justify-content-center  ">
                                <audio ref={napsterRef} src="" name="napster"></audio> {/* pista de audio REF = napster */}
                                <span><i className="fas fa-step-backward" onClick={() => playBackward()
                                }></i></span>
                                <span><i className="fas fa-play " onClick={() => {
                                    napsterRef.current.play();
                                }}></i></span>
                                <span><i className="fas fa-pause " onClick={() => {
                                    napsterRef.current.pause();
                                }}></i></span>
                                <span><i className="fas fa-step-forward" onClick={() => playForward()
                                }></i></span>
                            </div>
                            <div className="row justify-content-center ">
                                <span className="" onClick={() => {
                                    if (napsterRef.current.volume > 0.1) { napsterRef.current.volume -= 0.1; console.log(napsterRef.current.volume) }
                                }}><i className="fas fa-volume-down "></i>
                                </span>
                                <span className="" onClick={() => {
                                    if (napsterRef.current.volume < 1) { napsterRef.current.volume += 0.1; console.log(napsterRef.current.volume) }
                                }}><i className="fas fa-volume-up "></i>
                                </span>
                                <span className=""><i className="fas fa-random " onClick={() => randomSong()
                                }></i></span>
                                <span className=""><i className="fas fa-redo-alt"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaSong;