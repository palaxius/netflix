import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {FooterContainer} from "../containers/footer";
import {Form, Header} from "../components";
import {FirebaseContext} from "../context/firebase";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export default function SignUp() {
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isInvalid = firstName === '' || password === '' || emailAddress === ''
  const [learnMoreShow, setLearnMoreShow] = useState(false)

  const handleSignup = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          }).then(() => {
            history.push(ROUTES.BROWSE)
        })
      })
      .catch(error => {
      setFirstName('')
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
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              placeholder='First Name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
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