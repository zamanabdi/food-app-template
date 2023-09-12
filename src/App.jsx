import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FoodComponent from './components/foodComponent/FoodComponent'
import HeroBanner from './components/heroBanner/HeroBanner'


function App() {
  

  return (
    <div className='main-wrapper'>
      <HeroBanner/>
      <FoodComponent/>
    </div>
  )
}

export default App
