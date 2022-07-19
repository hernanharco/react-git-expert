import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs ( category );

    // console.log({ isLoading});
    
    

    // //console.log('aqui:', images.id);
    // // const gifs = [1,2,3,4,5]  
  
  
    return (
        <>
            <h3> { category }</h3> 
            {/* para cargar un texto */}
            {/* {
                isLoading 
                ?(<h2> Cargando... </h2>)
                : null
            } */}
            {
                isLoading && (<h2> Cargando... </h2>)
            }
           
            
            
            <div className = "card-grid">
                {
                    images.map( (image) => 
                    <GifItem 
                        key={image.id}
                        { ...image } //se utiliza cuando se tiene muchas propertys
                    />
                    )
                }
                {/* {
                    images.map( (image) => 
                    <GifItem 
                    key={ image.id }
                    image={ image.title }
                    url = { image.url }
                    />
                    
                    )
                }*/}
                
            </div>

            {/* <ol>  
            
            {/* {
                    images.map( ({id, title}) => 
                        <li key={ id }>{title}</li>
                    )
                } */}
                {/* <li>titulo</li>
                <li>titulo</li>
                <li>titulo</li>
            </ol> */} 
        
        </>
  )
}
