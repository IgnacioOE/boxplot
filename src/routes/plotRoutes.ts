import express from 'express';
import {PlotHandler} from '../handler/plotHandler';

const router = express.Router();

const handler=new PlotHandler();

router.get('/', handler.handleData.bind(handler));

export default router;