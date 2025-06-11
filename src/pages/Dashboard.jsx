import React from 'react'
import HomeButton from '../components/HomeButton'
import Table from '../components/Table'
import UnverifiedUsersTable from '../components/UnverifiedUsersTable'


const Dashboard = () => {
  return (
    <div className=' flex flex-col mx-auto justify-center' id='dashboard'>
     <HomeButton />
      <Table />
      <UnverifiedUsersTable />
    </div>
  )
}

export default Dashboard