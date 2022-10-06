
import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const Player = observer(() => {

  return (
    <div className="grid  lg:grid-cols-12 gap-6 ">
        <img className='col-start-5 col-span-4 w-max border rounded-[5rem]' src={AppStore.currentSong.cover} alt="cover"/>
    </div>
  );
})

export default Player;
