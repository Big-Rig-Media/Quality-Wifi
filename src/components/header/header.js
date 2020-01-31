import React from "react"
import styled from "styled-components"
import Image from "../image/image"

const HeaderWrapper = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #c3c8cc;
`

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`

const Header = () => {
  return (
    <HeaderWrapper role="banner">
      <Container>
        <Image />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
