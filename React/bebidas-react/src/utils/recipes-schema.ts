import {z} from 'zod'
// Zod es una biblioteca de typeScript para validacion de datos y definicion de esquemas, verifica que los datos que se reciben de una API sean correctos

export const CategoriesAPIREsponseSchema = z.object({
    // Defines el esquema
    drinks : z.array(
        z.object({
            strCategory : z.string()
        })
    )
    /*
        El esquema tiene esa forma debido que los datos que extraemos, la api los tiene de la siguiente forma. Cada api tiene un squema diferente
        {
            "drinks": [
                {
                "strCategory": "Cocktail"
                },
                .
                .
                .
            ]
        }
    */


})