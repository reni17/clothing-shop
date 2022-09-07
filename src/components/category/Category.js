import '../category/Category.scss'
const Category = ({id, imageUrl, title}) => {

    return (
        <div key={id} className="category-container">
        <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"></div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    )
}

export default Category