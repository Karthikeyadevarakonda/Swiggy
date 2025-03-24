import React from 'react'
import { Link } from 'react-router'
import Notfound from "./Notfound";
import Card from "./Card";

const RestaurantList = ({filteredList}) => {
  return (
    <>
    {filteredList.length === 0 ? (<Notfound />) : 
        (filteredList.map((obj) =>{
          return ( <Link to={"/restaurant/"+obj.info.id} key={obj.info.id}>
                    <Card obj={obj} />
                   </Link>)
        }))}
    </>
  )
}

export default RestaurantList
