import { combineReducers } from 'redux'; 

// Reducer는 실제 update나 기존 데이터 그대로 내보내기 등의 로직과 '실무'를 담당하는 역할임.
const songListReducer = () => {
    return [
        {
            title: 'I Love you',
            singer: 'Wonmi'
        },
        {
            title: 'Joshua Babo',
            singer: 'Luna'
        },
        {
            title: 'I love nature',
            singer: 'Shimkung'
        }
    ];
} // 이녀석은 업데이트 될 대상이 아니라서 이렇게 argument가 없다. 

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECT_SONG') {
        return action.payload // payload는 song object임
    }
    return selectedSong;
    
} // selectedSong은 old data 값임 (업데이가 없다면 return 되는 값.)
  // 어쨌든 data를 return하기위해 이렇게 작성은 해보았다.

 export default combineReducers({
     songList: songListReducer,
     selectedSong: selectedSongReducer
 });