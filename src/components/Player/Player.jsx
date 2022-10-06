
import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
import { ReactSVG } from 'react-svg'
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Bar from './bar';
const Player = observer(() => {

    const [paused, setPaused] = useState(true)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState()

    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();
    let audio = new Audio(AppStore.currentSong.audio)

    useEffect(() => {
        if(!paused) {
            const interval = setInterval(() => {
                AppStore.setSongDuration(false, duration)
            }, 1000);

            return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
        }
    },[paused])


    const playSong = () => {
        setPaused(false)
        myRef.current.play();

        changeAudioStatus(true);
    }
    const pauseSong = () => {
        setPaused(true)
        myRef.current.pause();
        changeAudioStatus(false);
    }

    const next =  () => {
        pauseSong()
        AppStore.setCurrentSong("next", shuffle)
        AppStore.setSongDuration(true, duration)
    }

    const previous =  () => {
        pauseSong()
        AppStore.setCurrentSong("previous", shuffle)
        AppStore.setSongDuration(true, duration)
    }

    const shuffleFunc = () => {
        setShuffle(!shuffle)
    }

    audio.addEventListener('loadedmetadata', (e) => {
        setDuration(e.target.duration)
    });

  return (
    <>
    <audio
        ref={myRef}
        src={AppStore.currentSong.audio}
      />
    <div className='col-span-12 w-full flex flex-col text-center text-2xl font-bold mb-5'>
              Player
    </div>
    <Bar></Bar>
    <div className="grid  lg:grid-cols-12 gap-6 mt-5">
          <div className='col-span-8 col-start-1 lg:col-start-3 grid grid-cols-9 '>
              <div className='col-span-1'>
                  <ReactSVG className='cursor-pointer' onClick={previous} src="/assets/chevron-l.svg" />
              </div>
              <div className='col-span-1 col-start-5 '>
                  {paused ? <ReactSVG className='cursor-pointer' onClick={playSong} src="/assets/play.svg" /> : <ReactSVG onClick={pauseSong} src="/assets/pause.svg" />}
              </div>
              <div className='col-span-1 col-start-9'>
                  <ReactSVG className='cursor-pointer' onClick={next} src="/assets/chevron-r.svg" />
              </div>
          </div>
      </div>
      <div className='flex flex-col text-center w-full mt-2'>
        <ReactSVG onClick={shuffleFunc} className={classNames("w-10 self-center cursor-pointer",{
            "text-success": !shuffle
        })} src='/assets/shuffle.svg' />
      </div></>
  );
})

export default Player;
