import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #d74234;
    padding: 10px 0;
`

const H1 = styled.h1`
    color: #fff;
    font-size: 4em;
`

const Banner = () => {
    return (
        <Section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <H1>BOGGLE</H1>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Banner