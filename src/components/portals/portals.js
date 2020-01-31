import React from "react"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`

const Portals = () => {
  return (
    <Grid>
      <div>Portal 1</div>
      <div>Portal 2</div>
      <div>Portal 3</div>
      <div>Portal 4</div>
    </Grid>
  )
}

export default Portals
