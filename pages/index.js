import Sidebar from "../src/components/Sidebar/Sidebar";
import Main from '../src/components/Main/Main';

function HomePage(props) {
  // const data = props;
  // console.log(data);
  return (
    <div className="templateLayout">
    <Sidebar />
    <div className="topStories">
      <h3>Top Stories</h3>
      <div>Story 1</div>
      <div>Story 2</div>
      <div>Story 3</div>
      <div>Story 4</div>
      <div>Story 5</div>
      
    </div>
    <div className="learn">
      <h3>Learn</h3>
    </div>

    </div>
  );
}

export default HomePage;


