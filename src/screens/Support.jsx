import styled from "styled-components";
import logistics from "../assets/logistics.svg"
import { useMediaQuery } from "@mui/material";


const Container = styled.div`
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: ${props => props.mobile ? '6em 2em' : '6em'};
        > div {
          text-align: center;
          display: flex;
          flex-direction: ${props => props.mobile ? 'column' : 'row'};
          align-items: center;
          justify-content: space-between;
          > * {
              width: ${props => props.mobile ? '100%' : '50%'};
          }
        }
`

const Support = () => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <Container mobile={isMobile}>
            <div>
                <h1>Merchandise coming soon.</h1>
                <img src={logistics} alt="logistics stock img" />
            </div>
        </Container>
    )
}

export default Support;
