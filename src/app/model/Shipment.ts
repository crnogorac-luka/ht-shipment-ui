export class Shipment {
    _id: string;
    customerId: string;
    createdDate: Date;
    carrier: string;
    location: string;
    status: string;
  
    constructor(_id: string, customerId: string, createdDate: Date, carrier: string, location: string, status: string) {
      this._id = _id;
      this.customerId = customerId;
      this.createdDate = createdDate;
      this.carrier = carrier;
      this.location = location;
      this.status = status;
    }
  }
  