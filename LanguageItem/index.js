import {ButtonListContainer, Button} from './styledComponents'
import './index.css'

const LanguageItem = props => {
  const {itemDetails, isActive, clickLanguage} = props
  const {buttonText, id} = itemDetails
  const buttonClassName = isActive ? `button active` : `button`
  const onClickLanguage = () => {
    clickLanguage(id)
  }

  return (
    <ButtonListContainer>
      <Button
        type="button"
        className={buttonClassName}
        onClick={onClickLanguage}
      >
        {buttonText}
      </Button>
    </ButtonListContainer>
  )
}
export default LanguageItem
