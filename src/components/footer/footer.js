import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background-color: ${props => props.backgroundColor};
`

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterWrapper backgroundColor="#0b2943" role="contentinfo">
      <Container>
        <p>&copy; {year}</p>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
