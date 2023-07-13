

import React from "react";
import {Col, Container, Row, Card} from 'react-bootstrap';
import {useSelector} from 'react-redux';

export default function Profile() {
  const color = useSelector((state) => state.theme.value)

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="9" lg="8" xl="8" className="mt-5">
          <Card border={color} style={{borderRadius: '15px'}}>
            <Card.Body className="p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <Card.Img
                    style={{width: '180px', borderRadius: '10px', height: "200px"}}
                    src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'
                    alt='Generic placeholder image'
                    fluid />
                </div>
                <div className="flex-grow-1 ms-3">
                  <Card.Title>D.Dhinagaran</Card.Title>
                  <Card.Text>Senior Software Developer</Card.Text>

                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{backgroundColor: '#efefef'}}>
                    <div>
                      <p className="small text-muted mb-1">Age</p>
                      <p className="mb-0">25</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Gender</p>
                      <p className="mb-0">Male</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md="9" lg="8" xl="8" style={{marginTop: 15}}>
          <Card border={color} className="mb-4" style={{borderRadius: '15px'}}>
            <Card.Body>

              <Row>
                <Col sm="3">
                  <Card.Text>Email</Card.Text>
                </Col>
                <Col sm="9">
                  <Card.Text className="text-muted">dhinagaran@gmail.com</Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm="3">
                  <Card.Text>Phone</Card.Text>
                </Col>
                <Col sm="9">
                  <Card.Text className="text-muted">(+91) 9876543210 </Card.Text>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm="3">
                  <Card.Text>Address</Card.Text>
                </Col>
                <Col sm="9">
                  <Card.Text className="text-muted">Tambaram,Chennai 600127</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
