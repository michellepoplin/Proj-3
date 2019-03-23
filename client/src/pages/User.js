import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Usercard from '../components/Usercard';
import Usercover from "../components/Usercover";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Tiers from '../components/Tiers';
import Container from 'react-bootstrap/Container';
import Post from '../components/Post';
import Postform from "../components/Postform";
import Followcard from '../components/Followcard';
import Aboutuser from '../components/Aboutuser';

class User extends Component {
    //   state = {

    //   };


    render() {
        return (
            <Wrapper>

                <Nav />
                <Usercover>
                    <Row>
                        <Col md={6}>
                            <Usercard />
                        </Col>
                        <Col md={3}></Col>
                        <Col md={3}>
                            <Followcard />
                        </Col>
                    </Row>
                </Usercover>
                <Grid fluid>
                    <Container divStyle={"margin-bottom: 50px;"}>
                        <Row>
                            <Col md={3}>
                            <Aboutuser />
                            </Col>
                            <Col md={6}>
                                <Postform />
                                <Post>Why are bees in trouble?
Many pollinators are disappearing at alarming rates, especially native bees (such as bumble bees and solitary bees). Honey bees are also in trouble these days, with beekeepers reporting heavy winter and even summer losses.

</Post>
                                
                                <Post>Help bees in your garden, community plot… 
even a balcony Plant native wildflowers and flowering shrubs in your backyards.</Post>
                                
                                <Post>Offer more than just food for bees
Provide homes for native bees. Did you know that most bees nest in wood, dried stems, or in the ground? Provide bare, sunny soil for mining, sweat, and other ground-dwelling solitary bees. Offer wooden bee blocks, paper straws, or bundles of bamboo for mason, leaf-cutter, and other wood-cavity nesting solitary bees. For mason bees, make sure there’s a source of mud nearby in early spring.

</Post>
                            </Col>
                            <Col md={3}>
                                <Tiers>This is a Tier</Tiers>
                                <Tiers>This is a Tier</Tiers>
                                <Tiers>This is a Tier</Tiers>
                                <Tiers>This is a Tier</Tiers></Col>
                        </Row>

                    </Container>
                </Grid>
                <Footer />
            </Wrapper>

        )
    }


}

export default User;