import styled from "styled-components";
import stockImg from "../assets/stock.svg"

const Container = styled.div`
  width: 100%;
  padding: 2rem;
`
const Centered = styled.div`
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
const About = () => ( 
  <Container>
    <Centered>
      <h2>Welcome to RehabENG UNSW</h2>
    </Centered>
    <DescriptionContainer>
      <div>
        <h2>About us</h2>
        <p>The Rehabilitation Engineering Society (formerly EWH UNSW) runs projects where students co-design and prototype assistive technology with a real client with a disability. Feel free to message us if you are interested in our current projects.</p>
      </div>
      <div>
        <Image src={stockImg} alt="stock image" />
      </div>
    </DescriptionContainer>
    <Centered>
      <p>Copy
Our aim, focus, or a summary of our current projects?<br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    </Centered>
  </Container>
)

export default About;