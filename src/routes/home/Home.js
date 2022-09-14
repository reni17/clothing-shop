import Category from '../../components/directory/DirectoryItem'

const Home = ({categories}) => {

    return (
        <div className="categories-container">
        {categories.map(({title, id, imageUrl}) => 
        <Category title = {title} key = {id} imageUrl = {imageUrl}/>  
        )}
       </div>
    )
}

export default Home