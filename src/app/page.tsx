import Image from 'next/image'
import { BasicTable } from './components/BasicTable'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <BasicTable></BasicTable>
      </div>
    </main>
  )
}
