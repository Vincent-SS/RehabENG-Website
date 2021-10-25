import styled from 'styled-components';
import { Button, useMediaQuery } from "@mui/material";
import ContactInput from '../components/ContactInput';

const ContactInputContainer = styled.div`
        padding: 2rem;
        margin: 1rem;
        width: ${props => props.mobile ? '100%' : '60%'};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
`;

const ContactBox = () => {
        const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
        return (
        <ContactInputContainer mobile={isMobile}>
                <ContactInput id='name' label='Name' multiline={false}/>
                <ContactInput id='email' label='Email' multiline={false}/>
                <ContactInput id='unsw' label='UNSW Student?' multiline={false}/>
                <ContactInput id='message' label='Message' multiline={true}/>
                <Button 
                        variant='contained'
                        style={{marginTop: '1rem'}}
                >Submit</Button>
        </ContactInputContainer>
        )
        }
export default ContactBox;