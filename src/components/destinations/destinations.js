import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Section from "../section/section"
import Destination from "./destination"

const H3 = styled.h3`
  text-align: center;
`

const H6 = styled.h6`
  text-align: center;
`

const DestinationsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 60px;
  margin-left: -15px;
  scroll-behavior: smooth;
  scroll-padding-left: 15px;
  overflow: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`

const Destinations = () => (
  <StaticQuery
    query={graphql`
      query GetListings {
        wpgraphql {
          listings {
            nodes {
              title
              id
              featuredImage {
                guid
              }
            }
          }
        }
      }
    `}
    render={({
      wpgraphql: {
        listings: { nodes },
      },
    }) => {
      return (
        <>
          <Section backgroundColor="#f3f6f9">
            <H3>Destinations</H3>
            <H6>
              With 13 Quality RV Resorts & Parks throughout Texas, there's one
              close to wherever your travels take you.
            </H6>
            {nodes && (
              <DestinationsWrapper>
                {nodes.map(destination => (
                  <Destination data={destination} key={destination.id} />
                ))}
              </DestinationsWrapper>
            )}
          </Section>
        </>
      )
    }}
  />
)

export default Destinations
