// components/AudioPlayer.js

const AudioPlayer = () => {
    return (
      <div>
        <h3>Audio Player</h3>
        <audio controls>
          <source src="/check.mp3" type="audio/mp3" />
          
        </audio>
      </div>
    );
  };
  
  export default AudioPlayer;
  