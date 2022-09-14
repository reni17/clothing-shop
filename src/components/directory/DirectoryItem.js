import './DirectoryItem.styles.js'
import { useNavigate } from 'react-router-dom'
import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItem.styles.js'
const DirectoryItem = ({id, imageUrl, title, route}) => {
const navigate = useNavigate()
const NavigateHandler = () => {
navigate(route)
}

    return (
        <DirectoryItemContainer key={id} >
        <BackgroundImage imageUrl={imageUrl} ></BackgroundImage>
        <Body onClick={NavigateHandler}>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem