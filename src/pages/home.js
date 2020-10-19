import React, {useEffect, useState} from 'react'
import {HeaderContainer} from "../containers/header";
import {OptForm, Feature, Form} from "../components";
import {JumbotronContainer} from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faqs";
import {FooterContainer} from "../containers/footer";
import {useHistory} from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Home() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory()

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const onInputChangeHandler = (event) => {
    setEmail(event.target.value)
    setError(false)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (validateEmail(email)) {
      history.push(ROUTES.SIGH_UP)
      localStorage.setItem('form-email', email)
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    localStorage.removeItem('form-email')
  }, [])

  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm onSubmit={onSubmitHandler}>
              <OptForm.Input value={email} onChange={onInputChangeHandler} placeholder='Email address' />
            {
              error
                ? <OptForm.Error>The email address is badly formatted.</OptForm.Error>
                : <OptForm.Button disabled={!email}>Try it now</OptForm.Button>
            }
              <OptForm.Break />
              <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer onSubmitHandler={onSubmitHandler} email={email} setEmail={setEmail} error={error}/>
      <FooterContainer />
    </>
  )
}