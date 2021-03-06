import React, { useEffect } from 'react'

import styled from 'styled-components'

import SEO from '../components/seo'
import { centerAlign } from '../assets/global'

const TextBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 4rem;

    p {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 4.2rem;
        position: relative;

        &:before {
            content: '';
            display: block;
            background: white;
            width: 120%;
            height: 50%;
            ${centerAlign};
            top: 75%;
            z-index: -1;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        padding-top: 9rem;

        p {
            font-size: 2rem;
        }
    }
`

const IndexPage = () => {
    useEffect(() => {
        document.body.classList.add('has-bg')

        return () => {
            document.body.classList.remove('has-bg')
        }
    }, [])

    return (
        <>
            <SEO title="Main" />
            <TextBox>
                <p>Hello, I'm Hyein</p>
                <p>Landscape designer</p>
            </TextBox>
        </>
    )
}

export default IndexPage
