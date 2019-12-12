import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #d74234;
    min-height: 200px;
    padding: 50px 0;    
`

const H1 = styled.h1`
    color: #fff;
    font-size: 8em;
    font-family: courier;
`

const Banner = () => {
    return (
        <Section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <H1>Boggle</H1>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Banner