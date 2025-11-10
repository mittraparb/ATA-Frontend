import React, { useState } from 'react';
import { Table, Collapse, Alert } from 'react-bootstrap';
import type { OrderTableProps } from '../types/order';
import OrderDetail from './OrderDetail';
import './OrderTable.css'; 
import { formatEpochToDateTime } from '../utils/time-converter';

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const [openRow, setOpenRow] = useState<string | null>(null);

  const toggleDetail = (orderNo: string) => {
    setOpenRow(openRow === orderNo ? null : orderNo);
  };

  if (orders.length === 0) {
    return <Alert variant="info" className="mt-4">No orders found for this date range.</Alert>;
  }

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="order-table w-100">
        <thead>
          <tr>
            <th className="mobile-visible">Account</th>
            <th className="mobile-visible">Operation</th>
            <th className="mobile-visible">Symbol</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Filled Qty</th>
            <th>Price</th>
            <th className="mobile-visible">Status</th>
            <th>Date</th>
            <th>Expiration</th>
            <th>No. Ref.</th>
            <th>Ext. Ref.</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <React.Fragment key={order.no}>
              <tr onClick={() => toggleDetail(order.no)} style={{ cursor: 'pointer' }}>
                <td className="mobile-visible">{order.account}</td>
                <td className="mobile-visible">{order.operation}</td>
                <td className="mobile-visible">{order.symbol}</td>
                <td>{order.description}</td>
                <td>{order.quantity}</td>
                <td>{order.filledQuantity}</td>
                <td>{order.price}</td>
                <td className="mobile-visible">{order.status}</td>
                <td>{ formatEpochToDateTime(order.date) }</td>
                <td>{ formatEpochToDateTime(order.expiration) }</td>
                <td>{order.no}</td>
                <td>{order.extRef}</td>
              </tr>
              <tr>
                <td colSpan={12} className="p-0 border-0">
                  <Collapse in={openRow === order.no}>
                    <div>
                      <OrderDetail order={order} />
                    </div>
                  </Collapse>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderTable;