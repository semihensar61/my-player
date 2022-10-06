import './App.css';
import Player from './components/Player/Player';
import TrackCard from './components/Player/TrackCard';
import AppStore from './store/appStore';

function App() {
  AppStore.setCurrentSong();
  return (
    <div className="">
      <div className='lg:mt-[8rem]'>
        <TrackCard />
      </div>
    </div>
  );
}

export default App;
