import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../libs/dbconnect";
import * as  restaurants from '../../../models/restaurants'


const Restaurant=async (req:NextApiRequest,res:NextApiResponse)=>{
    await dbConnect();
    try{
        const { method } =req;
        let data={
            method:'',
            result:{}
        }
        let restaurantModel:any=restaurants;
        console.log(method,req.query);
        switch(method){
            case 'GET':
                break;
            case 'PUT':
                const { body }=req;
                const id = req.query['oid'];
                data.method='PUT';
                data.result = await restaurantModel.findOneAndUpdate({_id:id},body);
                res.status(202).send(data);
                break;
            case 'PATCH':
                break;
            case 'DELETE':
                break;
        }
    }
    catch(err){
        res.status(400).send(err);
    }

}

export default Restaurant;