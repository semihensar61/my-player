import Player from './components/Player/Player';
import TrackCard from './components/Player/TrackCard';
import AppStore from './store/appStore';
import SideBar from './components/SideBar/SideBar';

function App() {
  AppStore.setCurrentSong();
  return (
    <>
    <div className='w-[20rem] h-full hidden lg:block lg:fixed left-0 top-0'>
      <SideBar></SideBar>
    </div><div className="ml-0 lg:ml-[15rem]">
        <div className='mt-[2rem] lg:mt-[8rem]'>
          <TrackCard />
        </div>
        <div className='lg:mt-[6rem] '>
          <Player />
        </div>
      </div></>
  );
}

export default App;
