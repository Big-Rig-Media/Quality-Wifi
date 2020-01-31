import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${props => props.backgroundColor};

  @media (min-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`

const Section = ({ backgroundColor, children }) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <Container>{children}</Container>
    </SectionWrapper>
  )
}

export default Section
