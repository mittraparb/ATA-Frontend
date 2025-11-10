import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import type { Order } from '../types/order'; 
import { formatEpochToDateTime } from '../utils/time-converter';

const OrderDetail: React.FC<{ order: Order }> = ({ order }) => (
  <Card className="my-2 p-3 border-0 bg-light"> 
    <Row className="mb-3 align-items-center">
      <Col xs={12} md={6} className="d-flex align-items-center">
        <h6 className="mb-0 me-3 fw-bold text-primary">
          {order.firstName} {order.lastName} ({order.accountType}) 
        </h6>
        <Button variant="outline-secondary" size="sm">
          Full review details
        </Button>
      </Col>
      <Col xs={0} md={3}></Col> 
      <Col xs={12} md={3} className="d-flex justify-content-end mt-2 mt-md-0">
        <Button variant="primary" size="sm" className="me-2">ACCEPT</Button>
        <Button variant="danger" size="sm">Reject</Button>
      </Col>
    </Row>
    
    <div className="border-top pt-3">
        <Row className="mb-2 small">
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Net Amount:</div>
            {order.netAmount} USD
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Price:</div>
            {order.price}
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Exchange Rate:</div>
            {order.exchangeRate}
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">O/S Limit:</div>
            {order.osLimit}
          </Col>
        </Row>

        <Row className="mb-3 small">
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Reference Number:</div>
            {order.referenceNumber}
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Date/Time:</div>
            { formatEpochToDateTime(order.dateTime) }
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">Telephone:</div>
            {order.telephone}
          </Col>
          <Col xs={6} md={3} className="mb-2">
            <div className="fw-bold">User ID:</div>
            {order.userId}
          </Col>
        </Row>
    </div>

    <Row className="mt-2 pt-2 border-top">
      <Col>
        <p className="mb-1 fw-bold text-danger">Warning(s):</p>
        {order.warnings && order.warnings.length > 0 ? (
          <ul className="list-unstyled small mb-0"> 
            {order.warnings.map((warning, index) => (
              <li key={index} className="mb-1">
                • {warning}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted small mb-0">No warnings.</p>
        )}
      </Col>
    </Row>

  </Card>
);

export default OrderDetail;
