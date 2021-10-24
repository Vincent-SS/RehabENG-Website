import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles"
import useMediaQuery from '@mui/material/useMediaQuery';


const CustomizedInput = styled(TextField)`
        width: ${props => props.mobile ? '100%' : '70%'};
        color: #C7EAEC;
`;

const ContactInput = props => {
        const {id, label, multiline} = props;
        const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
        return <CustomizedInput 
                mobile={isMobile}
                id={id} 
                label={label} 
                variant='outlined' 
                margin='normal'
                multiline={multiline}/>
}

export default ContactInput;