import React from "react"
import styled from "styled-components"

const DestinationWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    min-width: calc(1 / 4 * 100% - 15px);
  }
`

const Destination = ({ data: { title, featuredImage } }) => {
  return (
    <DestinationWrapper>
      <img src={featuredImage.guid} alt={title} />
      <h6>{title}</h6>
    </DestinationWrapper>
  )
}

export default Destination
