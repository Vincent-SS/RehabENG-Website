import styled from "styled-components";
import facebookLogo from "../assets/facebook.png";
import linkedinLogo from "../assets/linkedin.png";


const Container = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
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
                        display: flex;
                        align-items: center;
                        > a {
                              margin: 1rem;
                              > img {
                                width: 35px;
                              }
                        }
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
                                <a href="https://www.facebook.com/groups/EWHUNSW/" target="_blank" rel="noreferrer"><img src={facebookLogo} alt="facebook logo"></img></a>
                                <a href="https://www.linkedin.com/company/rehabengunsw/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="linkedin logo"/></a>
                        </div>
                </div>
        </Container>

)

export default Footer;