import './App.scss';
import MessageBody from './MessageBody/MessageBody';
import SideBar from './SideBar/SideBar';
import TopNavBar from './TopNavBar/TopNavBar';
function App() {
  return (
    <div className="app">
      <TopNavBar />
      <div className="app__body">
        <SideBar />
        <MessageBody />
      </div>
    </div>
  );
}

export default App;
