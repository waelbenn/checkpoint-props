import './App.css';
import Profile from './Profile/Profile';
import image from './imageInSrc.jpg';

function App() {
  const fullName='wael ben abdallah'
  const bio='studying fullstack js at gomycode'
  const profession='student'
  const nameAlert=()=>{alert(`Hello ${fullName}`)}
  const object={color:"gold",backgroundColor:"black",textAlign:"center"}
  return (
    <div>
      <Profile fn={fullName} bio={bio} prof={profession} alert={nameAlert} style={object}>
        <img src={image}/>
      </Profile>
    </div>
  );
}

export default App;
