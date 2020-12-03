import ReactPlayer from "react-player";


function VideoBar() {
    return (
        <div>
    <table className="tableStyles">
        <tr>
            <td >
       <ReactPlayer
        url="https://www.youtube.com/watch?v=lTIX98HpdZY" width="95%" height="350px"/>
        <h4>Desktop app electron.js</h4></td>
        <td><ReactPlayer
        url="https://youtu.be/98JRThInBQ8" width="95%" height="350px" /><h4>Frontend | Tailwind.css</h4></td><td><ReactPlayer
        url="https://youtu.be/p8KbhbG4FnI" width="95%" height="350px"/><h4>React| Redux socket.io</h4></td>
              </tr>
       </table>
      </div>
    );
  }
  
  export default VideoBar;
  