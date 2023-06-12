import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

// GET ALL SHIPMENTS
export async function fetchShipmentData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/shipmentTracking`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch shipment data:', error);
    throw error;
  }
}
