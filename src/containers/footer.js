import React from 'react';
import {Footer} from "../components";
import * as ROUTES from '../constants/routes'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title><Footer.Link href='https://help.netflix.com/en/contactus' style={{fontSize: '16px'}}>Questions? Contact us.</Footer.Link> </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href='https://help.netflix.com/en/node/412'>FAQ</Footer.Link>
          <Footer.Link href='https://www.netflixinvestor.com/ir-overview/profile/default.aspx'>Investor Relations</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/privacy">Privacy</Footer.Link>
          <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/ru/">Help Centre</Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/notices">Legal Notices</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href={ROUTES.SIGH_IN}>Account</Footer.Link>
          <Footer.Link href='https://devices.netflix.com/en/'>Ways to watch</Footer.Link>
          <Footer.Link href='https://help.netflix.com/legal/corpinfo'>Corporate Information</Footer.Link>
          <Footer.Link href='https://www.netflix.com/ru-en/browse/genre/839338'>Netflix Originals</Footer.Link>
          {/*<Footer.Link href="#">Redeem gift cards</Footer.Link>*/}
          {/*<Footer.Link href="#">Speed Test</Footer.Link>*/}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://media.netflix.com/en/">Media Centre</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/termsofuse">Terms of Use</Footer.Link>
          <Footer.Link href="https://help.netflix.com/ru/contactus">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Kingdom</Footer.Text>
    </Footer>
  )
}