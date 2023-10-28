import React from 'react'
import List from '../List'
import Card from './Card'


const Shop = () => {
  return (
    <section>
      {List.map((item)=>{
       return <Card item = {item} key={item.id}/>

      })}
    </section>
  )
}

export default Shop
