import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Container, Col, Row, Spinner } from 'reactstrap'
import SEO from '../components/seo'
import Input from '../components/input'
import Textarea from '../components/textarea'
import Button from '../components/button'
import FlexBox from '../components/flexbox'
import { toast } from 'react-toastify'
import ownerImg from '../images/owner.jpg'

const config = {
    script:
        'https://script.google.com/macros/s/AKfycbxpAdVHU8UEqe-9C71vEHqlBmNcE_Q6XNB_jP8U/exec',
    sheet: 'responses',
    // email: '',
}

function devideBgDeco() {
    let styles = ''

    for (let i = 2; i < 6; i += 1) {
        styles += `
            &:nth-child(${i}) {
                left: ${25 * (i - 1)}%;
            }
        `
    }

    return css`
        ${styles}
    `
}

const ContentWrapper = styled.div`
    padding: 2rem 0;
    position: relative;

    .bg-deco {
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4.8rem 0;
        min-height: calc(100vh - ${props => props.theme.size.headerPc});

        .bg-deco {
            display: block;
            background: ${({ theme }) => theme.color.grey5};
            width: 0.1rem;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;

            ${devideBgDeco()}
        }
    }
`

const ImgWrapper = styled.div`
    position: relative;
    margin: 1.5rem 0 3rem 1.5rem;
    display: flex;
    justify-content: center;

    .owner-deco {
        position: relative;

        img {
            box-shadow: 2px 2px 12px rgba(175, 180, 172, 0.74);
            width: 100%;
            max-width: 30rem;
            position: relative;
        }

        &:before {
            content: '';
            display: block;
            background: ${({ theme }) => theme.color.dustGreen};
            width: 100%;
            max-width: 30rem;
            height: 100%;
            position: absolute;
            left: -1.5rem;
            top: -1.5rem;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        margin-top: 3.5rem;
        .owner-deco {
            display: table;
        }
    }
`

const InfoTextWrapper = styled.div`
    color: ${({ theme }) => theme.color.grey1};
    text-align: center;

    .description {
        font-size: 1.2rem;
        line-height: 2.4rem;
        font-weight: bold;
        margin-bottom: 1.2rem;
    }

    .sns-box {
        font-size: 1.2rem;
        line-height: 2.4rem;

        b {
            margin-left: 1rem;
        }

        a {
            text-decoration: underline;
        }
    }

    .deco-line {
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
        margin: 3.2rem 0;
    }

    input {
        margin-bottom: 2rem;
    }

    textarea {
        margin-bottom: 3.2rem;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        text-align: left;
        h1 {
            margin: 0;
        }

        .sns-box {
            & ~ .sns-box {
                margin-left: 3rem;
            }
        }

        .input-flexbox {
            input {
                ~ input {
                    margin-left: 2.8rem;
                }
            }
        }
    }
`

const InfoPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSending, setLoader] = useState(false)

    const handleForm = e => {
        e.preventDefault()
        setLoader(true)
        const xhr = new XMLHttpRequest()
        xhr.open('POST', config.script)
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        )

        xhr.onload = function () {
            setLoader(false)
            if (xhr.status === 200 || xhr.status === 201) {
                toast.dark('Thank you!', {
                    position: 'top-center',
                    autoClose: 2000,
                })
            } else {
                toast.error('Failed...', {
                    position: 'top-center',
                    autoClose: 2000,
                })
            }
        }

        const encoded = Object.keys(form)
            .map(k => {
                return `${encodeURIComponent(k)}=${encodeURIComponent(form[k])}`
            })
            .join('&')

        xhr.send(encoded)
        return true
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <SEO title="Info" />
            <ContentWrapper>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <Container>
                    <Row>
                        <Col className="m-pl-pr-none pl-none" xs="12" md="6">
                            <ImgWrapper>
                                <span className="owner-deco">
                                    <img
                                        src={ownerImg}
                                        alt="site owner profile, holding plants, smiling"
                                    />
                                </span>
                            </ImgWrapper>
                        </Col>
                        <Col className="pl-pr-none" xs="12" md="6">
                            <InfoTextWrapper>
                                <h1>Hyein Jeong</h1>
                                <p className="description">
                                    currently working as a landscape designer in
                                    Seoul, South Korea
                                </p>
                                <Row>
                                    <Col xs="12" md="6">
                                        <p className="sns-box">
                                            Contact
                                            <b>
                                                <a href="mailto:contacthyein@gmail.com">
                                                    contacthyein@gmail.com
                                                </a>
                                            </b>
                                        </p>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <p className="sns-box">
                                            Blog
                                            <b>
                                                <a
                                                    href="https://blog.naver.com/invely20"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    blog.naver.com/invely20
                                                </a>
                                            </b>
                                        </p>
                                    </Col>
                                </Row>
                                <span className="deco-line"></span>
                                <form
                                    className="gform"
                                    data-email="contacthyein@gmail.com"
                                    onSubmit={handleForm}
                                >
                                    <Row>
                                        <Col xs="12" md="6">
                                            <Input
                                                placeholder="Name"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col xs="12" md="6">
                                            <Input
                                                placeholder="Email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                    <Input
                                        placeholder="Subject"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Textarea
                                        minHeight={'15.6rem'}
                                        placeholder="Message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                    <FlexBox
                                        flexStyles={{
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button>
                                            {isSending ? (
                                                <Spinner color="light" />
                                            ) : (
                                                'send'
                                            )}
                                        </Button>
                                    </FlexBox>
                                </form>
                            </InfoTextWrapper>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
        </>
    )
}

export default InfoPage
