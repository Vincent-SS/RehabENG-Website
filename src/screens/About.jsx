import stockImg from "../assets/stock.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: ${props => props.mobile ? '1rem' : '2rem'};
`
const CenteredDiv = styled.div`
  text-align: center;
`
const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.mobile ? '100%' : '1fr 1fr'};
  grid-template-rows: ${props => props.mobile ? '1fr 1fr' : '100%'};
  padding: ${props => props.mobile ? '0rem' : '1rem'};
  > div {
    padding: ${props => props.mobile ? '0rem' : '2rem'};
    text-align: ${props => props.mobile ? 'center' : 'left'}
  }
`
const Image = styled.img`
  width: 100%;
`
const About = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return ( 
    <Container mobile={isMobile}>
      <CenteredDiv>
        <h2>Welcome to RehabENG UNSW</h2>
      </CenteredDiv>
      <DescriptionContainer mobile={isMobile}>
        <div mobile={isMobile}>
          <h2>About us</h2>
          <p>The Rehabilitation Engineering Society (formerly EWH UNSW) runs projects where students co-design and prototype assistive technology with a real client with a disability. Feel free to message us if you are interested in our current projects.</p>
        </div>
        <div mobile={isMobile}>
          <Image src={stockImg} alt="stock image" />
        </div>
      </DescriptionContainer>
    </Container>
  )
}
export default About;