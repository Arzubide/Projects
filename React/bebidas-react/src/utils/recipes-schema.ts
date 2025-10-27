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

export const searchFilterSchema = z.object({
    ingredient : z.string,
    category: z.string
})

//Esquema para los datos de la peticion a la API con las bebidas
export const drinkSchema = z.object({
    idDrink : z.string(),
    strDrink : z.string(),
    strDrinkThumb : z.string()
})

export const bebidasEschema = z.object({
    drinks : z.array(drinkSchema)
})


export const ingredientsSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strInstructionsES : z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
})

export const ingredientsList = z.object({
    drinks : z.array(ingredientsSchema)
})