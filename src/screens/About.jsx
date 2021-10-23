import stockImg from "../assets/stock.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`
const CenteredDiv = styled.div`
  text-align: center;
`
const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 4rem;
  > div {
    padding: 2rem;
  }
`
const Image = styled.img`
  width: 100%;
`
const About = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return ( 
    <Container>
      <CenteredDiv>
        <h2>Welcome to RehabENG UNSW</h2>
      </CenteredDiv>
      <DescriptionContainer>
        <div>
          <h2>About us</h2>
          <p>The Rehabilitation Engineering Society (formerly EWH UNSW) runs projects where students co-design and prototype assistive technology with a real client with a disability. Feel free to message us if you are interested in our current projects.</p>
        </div>
        <div>
          <Image src={stockImg} alt="stock image" />
        </div>
      </DescriptionContainer>
      <CenteredDiv>
        <p>
          Copy Our aim, focus, or a summary of our current projects?<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
      </CenteredDiv>
    </Container>
  )
}
export default About;