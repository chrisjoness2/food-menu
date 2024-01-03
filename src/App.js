import EntireMenu from './components/entireMenu';
import StoreImg from './images/storeImg.jpeg';



function App() {
  return (
    <>
    <div className="storeImgDiv">
      <img className="storeImg" src={StoreImg} alt=''/>
      <h1> We are committed in serving you the best overall food you can think of in the metroplex!</h1>
    </div>
    <EntireMenu />
  

    
   </>
  );
}

export default App;
