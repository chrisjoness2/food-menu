import EntireMenu from './components/entireMenu';
import StoreImg from './images/storeImg.jpeg';



function App() {
  return (
    <>
    <div className="storeImgDiv">
      <img className="storeImg" src={StoreImg} alt=''/>
    </div>
    <EntireMenu />
  

    
   </>
  );
}

export default App;
