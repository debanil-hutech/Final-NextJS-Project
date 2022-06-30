import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dbConnect from '../libs/dbconnect'

const Home: NextPage = () => {
  dbConnect();
  return (
    <div className={styles.container}>
      <p>Hello</p>
    </div>
  )
}

export default Home
