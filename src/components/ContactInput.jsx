import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles"

const CustomizedInput = styled(TextField)`
        width: 50%;
        color: #C7EAEC;
`;

const ContactInput = props => {
        const {id, label, multiline} = props;
        return <CustomizedInput 
                id={id} 
                label={label} 
                variant='outlined' 
                margin='normal'
                multiline={multiline}/>
}

export default ContactInput;