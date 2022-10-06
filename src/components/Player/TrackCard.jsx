import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const TrackCard = observer(() => {

  return (
    <div className="grid grid-cols-12 gap-6 ">
        <img className=' col-span-10 col-start-2 lg:col-start-6 lg:col-span-2 w-max border rounded-md rounded-[5rem]' src={AppStore.currentSong.cover} alt="cover"/>
        <div className='col-span-12'>
            <h1 className='flex flex-col w-full text-center font-semibold lg:text-xl'>
                {AppStore.currentSong.name}
            </h1>
        </div>
    </div>
  );
})

export default TrackCard;