import React from 'react'

type Data = {
    name: string
}

function Home(props: Data) {
  return (
    <div>{props.name} to lesson!!! </div>
  )
}

export default Home