import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FooterContainer} from "../containers/footer";
import {Form, Header} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function SignIn() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [learnMoreShow, setLearnMoreShow] = useState(false)

  const isInvalid = password === '' || emailAddress === ''
  const handleSignin = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE)
      }).catch(error => {
      setEmailAddress('')
      setPassword('')
      setError(error.message)
    })
  }

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo}/>
        </Header.Frame>

        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type='Password'
              autoComplete='off'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span style={{color: '#0061B1', cursor: 'pointer'}} onClick={() => setLearnMoreShow(!learnMoreShow)}>Learn more.</span>
          </Form.TextSmall>

          {learnMoreShow && (
            <Form.TextSmall>
              The information collected by Google reCAPTCHA is subject to the Google <a href='https://policies.google.com/privacy' style={{color: '#0061B1', textDecoration: 'none'}}>Privacy Policy</a> and <a href='https://policies.google.com/terms' style={{color: '#0061B1', textDecoration: 'none'}}>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
            </Form.TextSmall>
            )
          }
        </Form>
      </Header>

      <FooterContainer />
    </>
  )
}