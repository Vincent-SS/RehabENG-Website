import { ContainerDiv } from '../components/Container';
import ContactBox from '../components/ContactBox';
import styled from 'styled-components';

const ContactHeading = styled.h3`
  margin: 0.5rem;
  font-family: 'SpaceMono';
  font-size: ${props => props.primary ? '1.5em' : '1.3em'};
  text-align: center;
`

const Contact = () => (
  <ContainerDiv>
    <ContactHeading>Got any ideas with rehabilitation?</ContactHeading>
    <ContactHeading primary>Contact us</ContactHeading>
    <ContactBox/>
  </ContainerDiv>
)

export default Contact;
