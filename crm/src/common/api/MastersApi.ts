import { IMaster } from '../interfaces/IOrder';
import { HttpService } from './../services/HttpService';


 
class CustomersApi extends HttpService {
    constructor(){
        super('/staff')
    }

    getAll(): Promise<IMaster[]> {
        return this.get('');
    }
} 

const customersApi = new CustomersApi()
 
export default customersApi;