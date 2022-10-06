import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const Bar = observer(() => {
    console.log("dasdsa", AppStore.songDuraiton.percentage)
    const format = (duration) =>
    {   
        // Hours, minutes and seconds
        var hrs = ~~(duration / 3600);
        var mins = ~~((duration % 3600) / 60);
        var secs = ~~duration % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
  return (
      <div className='w-full flex flex-row items-center justify-center'>
        <div className='mr-2'>
            {format(AppStore.songDuraiton.currentSec)}
        </div>
        <div className="w-[70%] bg-gray rounded-full h-2.5 dark:bg-gray-700 h-2.5 ">
            <div className={`bg-blue h-2.5 rounded-full w-[45%]`}></div>
        </div>
        <div className='ml-2'>
            {format(AppStore.songDuraiton.duration)}
        </div>
      </div>
  );
})

export default Bar;