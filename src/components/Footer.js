import styled from "styled-components";
import facebookLogo from "../assets/facebook.png";
import linkedinLogo from "../assets/linkedin.png";
import useMediaQuery from "@mui/material/useMediaQuery";


const Container = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;
        bottom: 0;
        > div {
                width: 90%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-top: 1px solid #C7EAEC;
                > div {
                        color: #686868;
                        padding: ${props => props.mobile ? '0.5em' : '1em'};
                        display: flex;
                        align-items: center;
                        > a {
                              margin: 1rem;
                              > img {
                                width: ${props => props.mobile ? '27px' : '35px'};
                              }
                        }
                }
        }
`

const Footer = () => {
	const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		<Container mobile={isMobile}>
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
}

export default Footer;