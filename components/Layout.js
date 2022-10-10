import React from 'react'
import styles from '../styles/Layout.module.css'
import Artist_List from './Artist_List'
const Layout = ({children}) => {
  // console.log(props)
  return (
    <div className= {styles.container}>
        <main className={styles.main}>
          {children}
        </main>
    </div>
  )
}

export default Layout