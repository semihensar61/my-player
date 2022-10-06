
import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
import { ReactSVG } from 'react-svg'
import { useRef, useState } from 'react';
import classNames from 'classnames';
import Bar from './bar';
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
        AppStore.setCurrentSong("next", shuffle)
    }

    const previous =  () => {
        AppStore.setCurrentSong("previous", shuffle)
    }

    const shuffleFunc = () => {
        setShuffle(!shuffle)
    }

  return (
    <>
    <div className='col-span-12 w-full flex flex-col text-center text-2xl font-bold mb-5'>
              Player
    </div>
    <Bar></Bar>
    <div className="grid  lg:grid-cols-12 gap-6 mt-5">
          <div className='col-span-8 col-start-3 grid grid-cols-9 '>
              <div className='col-span-1'>
                  <ReactSVG onClick={previous} src="/assets/chevron-l.svg" />
              </div>
              <div className='col-span-1 col-start-5 '>
                  {paused ? <ReactSVG onClick={playSong} src="/assets/play.svg" /> : <ReactSVG onClick={pauseSong} src="/assets/pause.svg" />}
              </div>
              <div className='col-span-1 col-start-9'>
                  <ReactSVG onClick={next} src="/assets/chevron-r.svg" />
              </div>
          </div>
      </div>
      <div className='flex flex-col text-center w-full mt-2'>
        <ReactSVG onClick={shuffleFunc} className={classNames("w-10 self-center",{
            "text-success": !shuffle
        })} src='/assets/shuffle.svg' />
      </div></>
  );
})

export default Player;
