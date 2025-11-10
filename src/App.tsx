// src/App.tsx
import React, { useState, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import type { Order } from './types/order';
import { mockOrders } from './mockData';
import OrderSearch from './components/OrderSearch';
import OrderTable from './components/OrderTable';
import './App.css';

const filterOrders = (orders: Order[], startDate: string, expireDate: string): Order[] => {
  if (!startDate || !expireDate) return orders;
  const startDayTimestap = new Date(startDate).getTime();
  
  const endOfExpireDate = new Date(expireDate);
  endOfExpireDate.setHours(23, 59, 59, 999);
  const expireDateTimestamp = endOfExpireDate.getTime();

  return orders.filter(order => {
    return order.date >= startDayTimestap && order.date <= expireDateTimestamp;
  });
};

const App: React.FC = () => {
  const [orders] = useState<Order[]>(mockOrders);
  const [defaultFilterDates, setFilterDates] = useState<{ start: string, end: string }>({
    start: '2023-01-01', 
    end: '2023-01-31',   
  });

  const filteredOrders = useMemo(() => {
    return filterOrders(orders, defaultFilterDates.start, defaultFilterDates.end);
  }, [orders, defaultFilterDates.start, defaultFilterDates.end]);

  const handleSearch = (startDate: string, endDate: string) => {
    setFilterDates({ start: startDate, end: endDate });
  };

  return (
    <Container fluid className="my-1">
      <OrderSearch onSearch={handleSearch} total={filteredOrders.length}/>
      <OrderTable orders={filteredOrders} />
    </Container>
  );
};

export default App;