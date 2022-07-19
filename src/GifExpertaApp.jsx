import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertaApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ])

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory)) return;
    // console.log('Estamos dentro del boton')
    // // const [categories, setCategories] = useState([ 'Valorant' ])
    // setCategories( ['Valorant'] );
    // console.log(newCategory);
    //el push ya no se utiliza para ingresar objetos
    //sirve para mutar los objetos el react trata de no
    //mutarlos
    // categories.push('Valorant');
    //... <= cuando se utiliza estos puntos suspensivos se crea una copia 
    //de todo el listado que se trae
    setCategories( [ newCategory, ...categories] );
    // //otra forma de agregar
    // setCategories( cat => [...cat, 'Valorant']);



  }

  console.log(categories);

  return (
    <>
        {/*titulo*/ }
        <h1>GifExpertaApp</h1>

        {/* Input */}
        {/* category solo crea el input y se activa cuando se da enter */}
        <AddCategory 
          // setCategories = {setCategories}
          //el inicio el on - se utiliza para los eventos
          onNewCategory = { onAddCategory }
        />
        
                

        {/* Listado de Gif */}
          {
            categories.map( ( category ) => (
              <GifGrid 
                key={category} 
                category={ category }
              />
              // <div key={ category }> 
              //   <h3>{ category }</h3>
              //   <li>{ category }</li>
              // </div>                  
            ))            
          }
        
        {/* <button onClick={ onAddCategory }> Agregar </button> */}
        {/* <ol>
            {/* /* //map permite barrer cada cosa del arreglo y
            regresar algo nuevo */}
            
            {/* // categories.map( category => { */}
             {/* return <li key = { category }>{ category }</li> */}
            
          

          {/* <li>ABC</li>
          <li>123</li>
          <li>XYZ</li> */}

        {/* </ol>  */}
          {/* Gif Item */}
    </>
  )
}

