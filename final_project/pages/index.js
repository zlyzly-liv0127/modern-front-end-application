import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import LeftBar from '../components/leftbar'
import Center from '../components/center'
import RightBar from '../components/rightbar'

export default function Home() {
  return (
    <div>
    <Head>
      <title>今日头条</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
       <div>
        <Header></Header>
         <div id={styles.main}>
           <LeftBar></LeftBar>
           <Center></Center>
           <RightBar></RightBar>
         </div>
      </div>
    </main>
  </div>
  )
}
