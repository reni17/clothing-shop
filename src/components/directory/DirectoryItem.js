import './DirectoryItem.styles.js'
import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItem.styles.js'
const DirectoryItem = ({id, imageUrl, title}) => {

    return (
        <DirectoryItemContainer key={id} >
        <BackgroundImage imageUrl={imageUrl} ></BackgroundImage>
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem