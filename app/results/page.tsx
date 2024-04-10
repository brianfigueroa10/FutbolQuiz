import Results from '@/components/results'
import { Users, getAllUsers } from '@/utils/getAllUsers'
import React from 'react'


export default async function page() {
    const user: Users[] | null = await getAllUsers()
    return (
      <Results users={user} />
  )
}
