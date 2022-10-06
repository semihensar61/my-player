
import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const Player = observer(() => {

    const playSong = () => {
          let audio = new Audio(AppStore.currentSong.audio)
          audio.pause();
    }
  return (
    <div className="grid  lg:grid-cols-12 gap-6 ">
        <div className='col-span-12 w-full flex flex-col text-center text-2xl font-bold'>
            Player
        </div>
        <button onClick={playSong}>
        </button>
    </div>
  );
})

export default Player;
