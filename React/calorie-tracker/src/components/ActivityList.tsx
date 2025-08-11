import type { Activity } from "../types"
import { categories } from "../data/categories"
import { act, useMemo } from "react"

type ActivityProps = {
    state : Activity[]
}


export default function ActivityList({state} : ActivityProps ) {

    const categoryName = useMemo(() => (category : Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [state]) // Comparamos el ID de cotegory con el que reccibimos del formulario y accedemos al name de la categoria

  return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">
            Comida y actividades
        </h2>

        {state.map( activity => (
            <div key={activity.id} className="px-5 py-10 bg-gray-500 mt-5 flex justify-between">
                <div className="space-y-2 relative">
                    <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                        ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                        {categoryName(+activity.category)}
                    </p> {/* Recibimos 1 u dos */}
                    <p className="text-2xl font-bold pt-5">
                        {activity.name}
                    </p>
                    <p className="font-black text-4xl text-lime-500">
                        {activity.calories} 
                        <span> Calorias</span>
                    </p>
                </div>

                <div>

                </div>
            </div>
        ))}
    </>
 )
}
