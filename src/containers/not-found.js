import React from 'react'
import {Header, NotFound} from '../components'
import * as ROUTES from "../constants/routes";
import logo from '../logo.svg'

export function NotFoundContainer() {
  return (
    <>
      <Header src='404' dontShowOnSmallViewPort>
        <Header bg={false}>
          <Header.Frame style={{background: '#000'}}>
              <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'/>
          </Header.Frame>
        </Header>
      </Header>
      <NotFound>
        <NotFound.Inner>
          <NotFound.Title>Lost your way?</NotFound.Title>
          <NotFound.Text>Sorry, we can't find that page. You'll find lots to explore on the home page. </NotFound.Text>
          <NotFound.Button>
            <NotFound.Link href={ROUTES.HOME}>Netflix Home</NotFound.Link>
          </NotFound.Button>
          <NotFound.Error>Error Code <strong>NSES-404</strong></NotFound.Error>
        </NotFound.Inner>
      </NotFound>
    </>
  )
}