import styled from "styled-components";
import surgicalLamp1 from "../assets/surgical1.svg";
import surgicalLamp2 from "../assets/surgical2.svg";
import surgicalLamp3 from "../assets/surgical3.png";
import surgicalLamp4 from "../assets/surgical4.png";
import rowingProsthesis1 from "../assets/rowingProsthesis.png";
import rowingProsthesis2 from "../assets/rowingProsthesis2.png";
import mouthStick1 from "../assets/mouthStick1.png";
import prostheticHand1 from "../assets/prostheticHand1.png";


const Container = styled.div`
        @font-face {
          font-family: 'roboto';
          src: url('../assets/font/Roboto-Regular.ttf') format('truetype');
          font-weight: 300;
          font-style: normal;
          font-display: auto;
        }

        display: flex;
        > div {
          font-family: verdana;
          margin: 0 auto;
          > div {
            padding: 40px;
            border-bottom: 20px solid lightblue;
            border-radius: 20px;
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
                > p {
                  font-family: roboto;
                }
                > img {
                  margin: 1rem;
                  width: 600px;
                }
                @media (max-width: 800px) {
                  > img {
                    margin: 1rem;
                    width: 80%;
                  }
                }
              }
              > ul {
                text-align: start;
              }
            }
          }
        }
`

const CurrentProject = () => (
  <Container>
    <div>
      <div>
        <h2>Low-cost Surgical Lamp Project</h2>
        <div>
          <p>In less-developed countries, power can be unreliable leading to surgeons operating under torchlight. This project aimed to design a low-cost surgical lamp with an uninterruptible power supply, building upon the lamp built by an Engineering World Health UNSW team in 2016. In 2020, modifications such as a sterile lamp handle and lamp cover, and the ability for the lamp to be flat-packed were completed. In 2021, our team is designing and prototyping the electrical circuits in collaboration with the University College Dublin.</p>
          <div>
            <img src={surgicalLamp1} alt="surgical lamp" />
            <img src={surgicalLamp2} alt="surgical lamp" />
            <img src={surgicalLamp3} alt="surgical lamp team" />
            <img src={surgicalLamp4} alt="surgical lamp team" />
          </div>
        </div>
      </div>
      <div>
        <h2>Rowing Prosthesis Project</h2>
        <div>
          <p>The Balmain Para Rowing Club supports people with disability through rowing. One of the rowers at the club, Jack, wanted the ability to flick his wrist while gripping the oar to scull more efficiently. The team behind this project has designed a custom rowing prosthesis through 3D scanning and moulding of his hand. Currently Jack and the team are codesigning a third iteration of the prosthesis.</p>
          <div>
            <img src={rowingProsthesis2} alt="rowing prosthesis teammate" />
            <img src={rowingProsthesis1} alt="rowing prosthesis" />
          </div>
        </div>
      </div>
      <div>
        <h2>Adjustable Mouth Stick Project</h2>
        <div>
          <p>Some quadriplegics use mouth sticks to assist in daily activities such as turning pages of a book, pressing elevator buttons, and typing on keyboards. Currently most activities require changing to a mouth stick of an appropriate length. This project aims to develop a mouth stick which quadriplegics can adjust the length and change mouth stick tips independently. The team behind this project is working with a NSW Health rehabilitation engineer to refine their prototype.</p>
          <div>
            <img src={mouthStick1} alt="mouth stick" />
          </div>
        </div>
      </div>
      <div>
        <h2>Partial Hand Prosthesis Project</h2>
        <div>
          <p>This is a new project where students are designing a partial hand prosthesis in collaboration with a paediatric rehabilitation physician at Sydney Children’s Hospital. The project is split by its two goals:</p>
          <ul>
            <li>To design a test rig to incorporate different tests outlined in the NIST Performance Metrics and Test Methods for Robotic Hands focusing on grasp and slip testing.</li>
            <li>To design a thumb to integrate with the current hand design to allow for 3-jaw chuck and lateral key pinch grips.</li>
          </ul>
          <div>
            <img src={prostheticHand1} alt="prosthetic hand" />
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default CurrentProject;
