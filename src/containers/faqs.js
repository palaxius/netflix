import React from 'react';
import faqsData from '../fixtures/faqs.json'
import {Accordion, OptForm} from "../components";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(item =>
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          )}

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Input placeholder='Email address' />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
          </OptForm>
    </Accordion>
  )
}
