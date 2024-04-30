import React from 'react'
import Hero from '../../Components/Hero/Hero'

type Props = {}

const HomePage = (props: Props) => {
  console.log('🚀 ~ HomePage ~ Props:', props)
  return (
    <>
      <Hero />
    </>
  )
}

export default HomePage
