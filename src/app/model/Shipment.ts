export class Shipment {
    id: string;
    customerId: string;
    createdDate: Date;
    carrier: string;
    location: string;
    status: string;
  
    constructor(id: string, customerId: string, createdDate: Date, carrier: string, location: string, status: string) {
      this.id = id;
      this.customerId = customerId;
      this.createdDate = createdDate;
      this.carrier = carrier;
      this.location = location;
      this.status = status;
    }
  }
  