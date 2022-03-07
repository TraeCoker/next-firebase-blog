import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'

export default function Home() {
  return (
    <div>
      <Loader show />
    </div>
  )
}
