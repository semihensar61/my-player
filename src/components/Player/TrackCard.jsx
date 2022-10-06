import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const TrackCard = observer(() => {

  return (
    <div className="grid lg:grid-cols-12 gap-6 ">
        <img className='col-start-6 col-span-2 w-max border rounded-[5rem]' src={AppStore.currentSong.cover} alt="cover"/>
        <div className='col-span-12'>
            <h1 className='flex flex-col w-full text-center font-semibold lg:text-xl'>
                {AppStore.currentSong.name}
            </h1>
        </div>
    </div>
  );
})

export default TrackCard;