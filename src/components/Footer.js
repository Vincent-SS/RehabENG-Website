import styled from "styled-components"


const Container = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        bottom: 0;
        > div {
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-top: 1px solid #C7EAEC;
                > div {
                        color: #686868;
                        padding: 1em;
                }
        }
`

const Footer = () => (
        <Container>
                <div>
                        <div>
                                RehabENG UNSW Ⓒ 2021
                        </div>
                        <div>
                                Connect with us!
                                <a href="#">fb icon</a>
                                <a href="#">linkin icon</a>
                        </div>
                </div>
        </Container>

)

export default Footer;