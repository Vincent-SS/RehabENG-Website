import styled from "styled-components";
import projectImage1 from "../assets/surgical1.svg";
import projectImage2 from "../assets/surgical2.svg";
import projectImage3 from "../assets/surgical3.png";
// import surgicalLamp4 from "../assets/surgical4.png";

const Container = styled.div`
        display: flex;
        > div {
          margin: 0 auto;
          > div {
            > h2 {
              text-align: center;
            }
            > div {
              // border: 1px solid red;
              display: grid;
              align-items: center;
              justify-content: center;
              text-align: center;
              > div {
                > img {
                  margin: 1rem;
                  width: 600px;
                }
              }
            }
          }
        }
`

const PastProject = () => (
  <Container>
    <div>
      <div>
        <h2>Low-cost Surgical Lamp Project</h2>
        <div>
          <div>
            <p>An Uninterruptible Surgical Lamp was designed by the Graduate School of Biomedical Engineering, UNSW in 2016.</p>
            <p>The project has now been officially recognised by UNSW, and it is now one of the Student Projects Stream under The ChallENG Program, UNSW Engineering.</p>
          </div>
          <div>
            <img src={projectImage1} alt="sampleImage1" />
            <img src={projectImage2} alt="sampleImage2" />
            <img src={projectImage3} alt="sampleImage3" />
          </div>
        </div>
      </div>
      <div>
        <h2>Another Project</h2>
        <div>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
          <p>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
          <div>
            <img src={projectImage1} alt="sampleImage1" />
            <img src={projectImage2} alt="sampleImage2" />
            <img src={projectImage3} alt="sampleImage3" />
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default PastProject;
