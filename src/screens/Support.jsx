import styled from "styled-components";
import merchImage1 from "../assets/rehabEng_merch.png";
import Button from '@mui/material/Button';

const Container = styled.div`
        display: flex;
        > div {
          margin: 0 auto;
          text-align: center;
        }
`

const Support = () => (
    <Container>
    <div>
        <h1> RehabEng Merchandise</h1>
        <p>All proceeds go directly into providing our members with more exciting projects.</p>
        <div>
            <table width="100%">
                <tr>
                    <td width="45%" align="right"><img src={merchImage1} alt="merchImageTshirt" width="33%" /></td>
                    <td width="10%"></td>
                    <td width="10%" align="center">
                        <p>RehabEng Unisex Tshirt</p>
                        <Button variant="contained" style={{backgroundColor:"#C7EAEC", color:"#000"}} >Click to buy</Button>
                    </td>
                    <td width="35%"></td>
                </tr>
                <tr>
                    <td width="45%" align="right"><img src={merchImage1} alt="merchImageTshirt" width="33%" /></td>
                    <td width="15%"></td>
                    <td width="10%" align="center">
                        <p>RehabEng Unisex Tshirt</p>
                        <Button variant="contained">Click to buy</Button>
                    </td>
                    <td width="30%"></td>
                </tr>
            </table>
        </div>
    </div>
    </Container>
)

export default Support;
