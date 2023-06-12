'use client';
import { useEffect, useState } from 'react';
import { Table } from "@nextui-org/react";
import { fetchShipmentData } from '../api/api';
import { Shipment } from '../model/Shipment';

export const BasicTable = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShipmentData();
        setShipments(data);
      } catch (error) {
        console.error('Failed to fetch shipments:', error);
      }
    };
  
    fetchData();
    }, [])

    return (
      <Table aria-label="Shipments tracking table" selectionMode="single">
        <Table.Header>
          <Table.Column>SHIPMENT ID</Table.Column>
          <Table.Column>CUSTOMER ID</Table.Column>
          <Table.Column>DATE</Table.Column>
          <Table.Column>CARRIER ID</Table.Column>
          <Table.Column>LOCATION</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          {shipments.map((shipment: Shipment) => (
            <Table.Row key={shipment._id}>
              <Table.Cell>{shipment._id}</Table.Cell>
              <Table.Cell>{shipment.customerId}</Table.Cell>
              <Table.Cell>{shipment.createdDate.toString()}</Table.Cell>
              <Table.Cell>{shipment.carrier}</Table.Cell>
              <Table.Cell>{shipment.location}</Table.Cell>
              <Table.Cell>{shipment.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  
}