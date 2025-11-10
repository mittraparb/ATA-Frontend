import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import type { SearchFormProps } from '../types/order';
import FormSelect from 'react-bootstrap/FormSelect';

const OrderSearch: React.FC<SearchFormProps> = ({ onSearch, total }) => {

  const defaultStartDate = '2023-01-01';
  const defaultExpireDate = '2023-01-31';
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultExpireDate);

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(startDate, endDate);
  };

  return (
    <Card className="mb-4 p-3 shadow-sm">
      <Form onSubmit={handleSearchClick}>
        <Row className="align-items-end">
          <Col xs={12} md={2} className="mb-3 d-flex align-items-end">
            <h5 className="fw-bold mb-0">Search results: {total}</h5>
          </Col>
          <Col xs={12} md={2} className="mb-3 d-flex align-items-center">
            <Form.Label className="fw-bold me-2 mb-0">Period</Form.Label>
            <FormSelect
              value={'Transmission'}
              style={{ width: 'auto' }}
            >
              <option>Transmission</option>
            </FormSelect>
          </Col>
          <Col xs={12} md={2} className="mb-3 d-flex align-items-center">
            <Form.Label className="fw-bold me-2 mb-0">Status</Form.Label>
            <FormSelect
              value={'Waiting'}
              style={{ width: 'auto' }}
            >
              <option>Waiting</option>
            </FormSelect>
          </Col>
          <Col xs={12} md={2} className="mb-3">
            <Form.Label className="fw-bold">From</Form.Label>
            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Col>
          <Col xs={12} md={2} className="mb-3">
            <Form.Label className="fw-bold">To</Form.Label>
            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Col>
          <Col xs={12} md={2} className="mb-3">
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default OrderSearch;