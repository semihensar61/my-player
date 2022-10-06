import { observer } from 'mobx-react';
import AppStore from "../../store/appStore";
const Bar = observer(() => {

  return (
      <div className='w-full flex flex-col items-center'>
        <div className="w-[70%] bg-gray rounded-full h-2.5 dark:bg-gray-700 h-2.5 ">
            <div className="bg-blue h-2.5 rounded-full w-[45%]"></div>
        </div>
      </div>
  );
})

export default Bar;