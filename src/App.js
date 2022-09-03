import '../src/categories.styles.scss'
function App() {

const categories = [
  {title: 'Hats', id: 0},
  {title: 'Jackets',  id: 1},
  {title: 'Sneakers',  id: 2},
  {title: 'Women', id: 3},
  {title: 'Men',  id: 4},
]

  return (
    <div className="categories-container">
     {categories.map(({title, id}) => 
        <div key={id} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
       
     )}
    </div>
  );
}

export default App;
