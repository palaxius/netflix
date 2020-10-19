import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 100px);
  background: url(../images/misc/404.jpg) top / cover no-repeat;
  box-shadow: inset 0px 0px 277px 100px #4c3f37;
`


export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  margin-top: 10rem;
  text-align: center;
  font-weight: 600;
  font-size: 72px;
  color: #fff;
  margin-bottom: 1rem;
`

export const Text = styled.p`
  text-align: center;
  font-size: 26px;
  color: #fff;
  margin-bottom: 3rem;
`

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`

export const Button = styled.button`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  padding: 15px 25px;
  color: #000;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 3rem;
  position: relative;
  
  &:hover {
    opacity: 0.9;
 } 
`

export const Error = styled.p`
  text-align: center;
  letter-spacing: 2px;
  font-size: 29px;
  color: #fff;
  font-weight: 400;
  padding-left: 20px;
  line-height: 64px;
  border-left: 2px solid #E50914;
 
`