import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    //como manejar el estado, 
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        // console.log( target.value);
        setInputValue ( target.value);
    }

    const onSubmit = (event) => {
        // consolog.log(event);
        //para que no se haga un refres del evento
        event.preventDefault();
        // console.log(inputValue);
        //para que inserte mas de letras 
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [ inputValue, ...categories ]);
        //inputValue.trim() = pone el valor sin espacio adelante ni atras
        onNewCategory(inputValue.trim());
        //limpia el cuadro de texto
        setInputValue('');
    }

  return (
    // <div>AddCategory</div>
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder = "Buscar Gifs"
            value = { inputValue }
            // onChange = { (event) =>onInputChange(event) }
            onChange = { onInputChange}
        />
    </form>
  )
}
