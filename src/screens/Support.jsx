import styled from "styled-components";
import merchImage1 from "../assets/rehabEng_merch.png";

const Container = styled.div`
        display: flex;
        > div {
          margin: 0 auto;
          text-align: center;
          > div {
          }
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
                    <td width="10"></td>
                    <td width="45%" align="left"><p>RehabEng Unisex Tshirt</p></td>
                </tr>
                <tr>
                    <td width="45%" align="right"><img src={merchImage1} alt="merchImageTshirt" width="33%" /></td>
                    <td width="10"></td>
                    <td width="45%" align="left"><p>RehabEng Unisex Tshirt</p></td>
                </tr>
            </table>
        </div>
    </div>
    </Container>
)

export default Support;
