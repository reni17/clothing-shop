import '../src/categories.styles.scss'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn'

function App() {

const categories =[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]


  return (
  <Routes>
    <Route path='/' element = {<Navigation/>}>
      <Route path='/' index element = {<Home categories = {categories}></Home>}></Route>
      <Route path='shop' index element = {<Home categories = {categories}></Home>}></Route>
      <Route path='sign-in' index element = {<SignIn categories = {categories}></SignIn>}></Route>

    </Route>
  </Routes>
  );
}

export default App;
