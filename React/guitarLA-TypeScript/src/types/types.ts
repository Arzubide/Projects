// Debido a que se repite un tipo de dato en distintos modulos, lo colocamos aqui y solamente los importamos

export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type cartItem = Guitar & { // Agregando Guitar & podemos heredar lo que tine Guitar y en amperson es para indicar el nuevo tipo de dato que se agregara
    quantity : number
}

// LoockUp, extraemos unicamente el atributo que deamos de otro tipo de dato
export type guitarId = Guitar['id'] // Solo extraemos el id del tipo Guitarra


/*
Es importante mencionar que existen los utilitys para typescript
Estos son utilizado par unir, omitir, etc distitos tipos de datos.
Existe Pick, ommit, etc.
*/