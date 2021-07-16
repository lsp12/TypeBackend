import {Router} from 'express';
import { PutInvetory, getInventary, postInvetory, DeleteInvetory } from '../controllers/inventory';

const route = Router();

route.route ('/inventory').get(getInventary).post(postInvetory);
route.route ('/inventory/:id').put(PutInvetory).delete(DeleteInvetory);




export default route;