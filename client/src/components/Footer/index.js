import React from "react";
import "./Footer.scss";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from '../../../src/logo.svg';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Help Save the World - Help Save Bees</h5>
            <p>
            Learn More About Bees - Support Current Bills
            </p>
          </MDBCol>
          <MDBCol md="4">
          <MDBRow>
            <img
              src={Logo}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="Bee The Change Logo"
            />
            </MDBRow>
            <MDBRow>
               <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Bee The Change
        </MDBContainer>
      </div>
      </MDBRow>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
   
    </MDBFooter>
  );
}

export default Footer;