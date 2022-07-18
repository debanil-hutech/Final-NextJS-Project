
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
        
        switch(method){
            case 'GET':
                data.method='GET';
                data.result=await restaurantModel.find() ;
                res.status(200).json(data);
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