import classNames from 'classnames';
import { observer } from 'mobx-react';
import { useState } from 'react';
import AppStore from "../../store/appStore";
const TrackCard = observer(({song}) => {

  return (
    <div className={classNames(" flex flex-row mt-2", {
        "bg-gray": song.id === AppStore.currentSong.id
    })}>
        <img className='w-[6rem] h-[6rem] ml-2 ' src={song.cover} alt="cover"/>
        <div className='flex flex-col'>
            <div className='text-lg font-semibold mt-2 ml-2 w-full whitespace-nowrap overflow-x-auto'>
                {song.name}
            </div>
            <div className='text-base w-full mt-2 ml-2 whitespace-nowrap overflow-x-auto'>
                {song.artist}
            </div>
        </div>
    </div>
  );
})

export default TrackCard;