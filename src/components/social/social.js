import React from "react"
import styled from "styled-components"
import Section from "../section/section"

const H3 = styled.h3`
  color: white;
  text-align: center;
`

const H6 = styled.h6`
  color: white;
  text-align: center;
`

const Social = () => {
  return (
    <Section backgroundColor="#4476a6">
      <H3>We're Social</H3>
      <H6>
        Follow Quality RV Resorts on Facebook and Instagram and stay up to date
        on all of our events happening!
      </H6>
    </Section>
  )
}

export default Social
