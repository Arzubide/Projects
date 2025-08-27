import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {

    const {dispatch} = useBudget()
    const handelChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type : 'add-filter-category', payload : {id : e.target.value}}) // e.target.value devuelve el id
    }
    
    return (
        <>
            <div className="bg-white shadow-2xl  p-10">
                <form>
                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <label htmlFor="gastos">Filtrar gastos</label>
                        <select 
                            name="gastos" 
                            id="gastos" 
                            className="rounded-2xl bg-slate-100 flex-1 p-3"
                            onChange={handelChange}    
                        >
                            <option value="">-- Todas las categorias --</option>
                            {categories.map(category => (
                                <option value={category.id} key={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}
