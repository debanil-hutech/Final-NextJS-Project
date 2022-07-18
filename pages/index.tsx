import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RestaurantsPlatform from '../components/RestaurantsPlatform';
import APICallClass from '../handlers/baseFetch';
import { GenericResponse } from '../interfaces/generic.model';

const Home: NextPage = (props:any) => {
  
  const restaurants= JSON.parse(props.restaurants);
  return (<>
    <div>
      <RestaurantsPlatform key='1' restaurant={restaurants} />
    </div>
  </>
    
  )
}

export async function getStaticProps(context:GetStaticPropsContext ){
  const apiCall= new APICallClass();
  const response:Partial<GenericResponse> =await apiCall.get('/api/restaurant');


  return { 
      props:{
          restaurants:JSON.stringify(response['result'])
      }
  }
}
export default Home
