import { NextApiResponse } from 'next';
import dbConnect from '../libs/dbconnect';
export default class APICallClass{
    apiUrl='http://localhost:4500';
    constructor(){
        this.apiUrl='http://localhost:4500';
    }

    public async post(appendurl:string,bodyobj:object){
        return new Promise((resolve,reject)=>{
            try{
                fetch(`${this.apiUrl}${appendurl}`,{
                    body:JSON.stringify(bodyobj),
                    mode: 'no-cors',
                    headers:{
                        Accept: 'application/json',
                    },
                    method:'POST'
                }).then((response)=>response.json())
                .then((data)=>resolve(data))
                .catch((err)=>{throw err;})
            }catch(err){
                console.error(err);
                reject(err);
            }

        });
    }

    public async put(appendurl:string,bodyobj:BodyInit):Promise<object>{
        return new Promise((resolve,reject)=>{
            try{
                fetch(`${this.apiUrl}${appendurl}`,{
                    body:JSON.stringify(bodyobj),
                    mode: 'no-cors',
                    headers:{
                        Accept: 'application/json',
                    },
                    method:'PUT'
                }).then((response)=>response.json())
                .then((data)=>resolve(data))
                .catch((err)=>{throw err;})
            }catch(err){
                console.error(err);
                reject(err);
            }

        });
    }

    public  get(appendurl:string):Promise<object>{
        return new Promise((resolve,reject)=>{
            try{
                console.log(`Append URL`,appendurl);
                 fetch(`${this.apiUrl}${appendurl}`,{
                    mode: 'no-cors',
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                    },
                  }).then((response)=>response.json()).then((data)=>{
                    console.log(`Data --->`,data);  
                    resolve(data);
                  }).catch((err)=>{throw err})
            }catch(err){
                console.error(err);
                return null;
            }

        })
    }
    public async delete(appendurl:string):Promise<object>{
        return new Promise((resolve,reject)=>{
            try{
                fetch(`${this.apiUrl}${appendurl}`,{
                    mode: 'no-cors',
                    method: 'DELETE',
                    headers: {
                      Accept: 'application/json',
                    },
                  }).then((response)=>response.json()).then(data=>{
                      resolve(data);
                  }).catch((err)=>{throw err})
            }catch(err){
                console.error(err);
                return null;
            }

        })
    }
}