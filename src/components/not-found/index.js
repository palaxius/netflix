import React from 'react'

import {Container, Title, Text, Inner, Button, Error, Link} from "./styles/not-found";

export default function NotFound({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

NotFound.Inner = function HeaderInner({children, ...restProps}) {
  return <Inner {...restProps}>{children}</Inner>
}

NotFound.Title = function HeaderTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

NotFound.Text = function HeaderText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

NotFound.Button = function HeaderButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}

NotFound.Error = function HeaderError({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}

NotFound.Link = function HeaderLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

