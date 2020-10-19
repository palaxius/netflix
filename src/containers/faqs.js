import React from 'react';
import faqsData from '../fixtures/faqs.json'
import {Accordion, OptForm} from "../components";

export function FaqsContainer({email, error, onSubmitHandler, setEmail}) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map(item =>
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          )}

          <OptForm onSubmit={onSubmitHandler}>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Input value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email address' />
            {
              error
                ? <OptForm.Error>The email address is badly formatted.</OptForm.Error>
                : <OptForm.Button disabled={!email}>Try it now</OptForm.Button>
            }
            <OptForm.Break />
          </OptForm>
    </Accordion>
  )
}
