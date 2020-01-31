import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`

const Portal = styled.div`
  padding: 40px 20px;
  text-align: center;
  background-color: #e9edf0;
`

const Portals = () => {
  return (
    <>
      <Grid>
        <Portal>
          <p>Browse the Web</p>
        </Portal>
        <Portal>
          <p>Quality Resorts Website</p>
        </Portal>
        <Portal>
          <p>Contact Us</p>
        </Portal>
        <Portal>
          <p>Take Our Guest Survey</p>
        </Portal>
      </Grid>
    </>
  )
}

export default Portals
