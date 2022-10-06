
import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
import { ReactSVG } from 'react-svg'
import { useRef, useState } from 'react';
const Player = observer(() => {

    const [paused, setPaused] = useState(true)
    const [shuffle, setShuffle] = useState(false)
    let audio = new Audio(AppStore.currentSong.audio)
    const playSong = () => {
        setPaused(false)
        audio.play();
    }
    const pauseSong = () => {
        setPaused(true)
        audio.pause();
    }

    const next =  () => {
        AppStore.setCurrentSong("next", false)
    }

    const previous =  () => {
        AppStore.setCurrentSong("previous", false)
    }
  return (
    <div className="grid  lg:grid-cols-12 gap-6 ">
        <div className='col-span-12 w-full flex flex-col text-center text-2xl font-bold'>
            Player
        </div>
        <div className='col-span-8 col-start-3 grid grid-cols-9 '>
            <div className='col-span-1'>
                <ReactSVG onClick={previous}  src="/assets/chevron-l.svg" />
            </div>
            <div className='col-span-1 col-start-5 '>
                {paused ? <ReactSVG onClick={playSong}  src="/assets/play.svg" /> : <ReactSVG onClick={pauseSong} src="/assets/pause.svg" />}
            </div>
            <div className='col-span-1 col-start-9'>
                <ReactSVG onClick={next}  src="/assets/chevron-r.svg" />
            </div>
        </div>
    </div>
  );
})

export default Player;
