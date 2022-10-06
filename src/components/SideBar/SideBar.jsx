import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
import TrackCard from './TrackCard';
const SideBar = observer(() => {

  return (
    <div className="lg:h-full w-full border">
        {AppStore.chillHop().map((song) => {
          return <TrackCard song={song}></TrackCard>
        })}
    </div>
  );
})

export default SideBar;