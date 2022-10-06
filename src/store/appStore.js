
import { action, observable, makeObservable, toJS } from 'mobx';

class UserStore {
  currentSong = {};
  songDuraiton = {
    duration: 0,
    currentSec:0,
    percentage:0,
  }


  constructor() {
    makeObservable(this, {
      currentSong: observable,
      songDuraiton: observable
    });
  }

  setSongDuration = (change, duration) => {
    if (change) {
        this.songDuraiton = {
            duration: duration,
            currentSec:0,
            percentage:0,
        }
    } else {
        if(duration) this.songDuraiton.duration = duration
        this.songDuraiton.currentSec = this.songDuraiton.currentSec + 1
        this.songDuraiton.percentage = 100*this.songDuraiton.currentSec/duration
    }
  }

  setCurrentSong = (song, shuffle) => {
    if(!song) {
        this.currentSong = this.chillHop()[0]
    } else if (shuffle){
        this.currentSong = this.chillHop()[Math.floor(Math.random() * this.chillHop().length-1) -1]
    } else {
        if(song === "next") {
            const index = this.chillHop().findIndex((song) => song.id === this.currentSong.id)
            if(index === this.chillHop().length-1) {
                this.currentSong = this.chillHop()[0]
            } else {
                this.currentSong = this.chillHop()[index+1]
            }
        } else if(song === "previous"){
            const index = this.chillHop().findIndex((song) => song.id === this.currentSong.id)
            if(index === 0) {
                 this.currentSong = this.chillHop()[this.chillHop().length-1]
            } else {
                this.currentSong = this.chillHop()[index - 1]
            }
        } else {
            this.currentSong = song
            this.setSongDuration(true)
        }
    }
    console.log(this.currentSong)
  };

  chillHop = () => {
    return [
        {
        name: "Beaver Creek",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        color: ["#205950", "#2ab3bf"],
        id: 1,
        active: true,
        },
        {
        name: "Daylight",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: 2,
        active: false,
        },
        {
        name: "Keep Going",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", "#c94043"],
        id: 3,
        active: false,
        },
        {
        name: "Nightfall",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        color: ["#EF8EA9", "#ab417f"],
        id: 45,
        active: false,
        },
        {
        name: "Reflection",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        color: ["#CD607D", "#c94043"],
        id: 7,
        active: false,
        },
        {
        name: "Under the City Stars",
        cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: 12,
        active: false,
        },
        //ADD MORE HERE
    ];
  };
}

export default new UserStore();
