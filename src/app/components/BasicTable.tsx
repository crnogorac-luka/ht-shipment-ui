'use client';
import { useEffect, useState } from 'react';
import { Table } from "@nextui-org/react";
import { Badge, Grid } from "@nextui-org/react";
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


    const isItemNew = (date: Date) => {
      const currentDate = new Date()
      const twentyFourHoursAgo = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000)
      const itemDate = new Date(date)

      if(itemDate > twentyFourHoursAgo) {
        return true;
      } else {
        return false;
      }
    }

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
              <Table.Cell>{shipment._id} {isItemNew(shipment.createdDate) ? (
        <Badge color="primary">NOVO</Badge>
      ) : null}</Table.Cell>
              <Table.Cell>{shipment.customerId}</Table.Cell>
              <Table.Cell>{shipment.createdDate.toLocaleString()}</Table.Cell>
              <Table.Cell>{shipment.carrier}</Table.Cell>
              <Table.Cell>{shipment.location}</Table.Cell>
              <Table.Cell>{shipment.status}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  
}