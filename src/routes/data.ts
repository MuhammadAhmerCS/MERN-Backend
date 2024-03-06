import * as express from 'express';
const routes = express.Router();
import { getData, postData ,hi} from '../controllers/data';
 
routes.get('/get', getData);
routes.post('/post', postData);
routes.get('/', hi);
export { routes };