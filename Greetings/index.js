import {Component} from 'react'

import LanguageItem from '../LanguageItem'

import {
  Image,
  MainContainer,
  Heading,
  ButtonsContainer,
  ButtonsList,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',

    buttonText: 'English',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',

    buttonText: 'Tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',

    buttonText: 'Telugu',
  },
]

class Greetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  clickLanguage = id => {
    this.setState({
      activeLanguageId: id,
    })
  }

  renderSelectedLanguage = () => {
    const {activeLanguageId} = this.state
    const {imageUrl} = languageGreetingsList[
      languageGreetingsList.findIndex(each => each.id === activeLanguageId)
    ]

    return <Image src={imageUrl} alt="imageAltText" />
  }

  render() {
    const {activeLanguageId} = this.state

    return (
      <MainContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsContainer>
          <ButtonsList>
            {languageGreetingsList.map(eachItem => (
              <LanguageItem
                key={eachItem.id}
                itemDetails={eachItem}
                isActive={activeLanguageId === eachItem.id}
                clickLanguage={this.clickLanguage}
              />
            ))}
          </ButtonsList>
        </ButtonsContainer>
        {this.renderSelectedLanguage()}
      </MainContainer>
    )
  }
}

export default Greetings
