import type { orderItem } from "../types"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type functionProps = {
    order : orderItem[]
    setTip: React.Dispatch<React.SetStateAction<number>>
}


export default function TipPercentageForm({order, setTip}:functionProps) {
  return (
    <>
        {order.length !== 0 ?
            <form>
                
                    {tipOptions.map(
                        tip =>
                            <div key={tip.id} className="flex gap-2">
                                <label htmlFor={tip.id}>{tip.label}</label>
                                <input 
                                    type="radio"
                                    name="tip"
                                    id={tip.id}
                                    value={tip.value}
                                    onChange={e => setTip(+e.target.value)} 
                                    /* 
                                    usas onChange para capturar el valor seleccionado
                                    e es el evento que se dispara cuando el valor cambia.
                                    e.target.value es el valor del input seleccionado (en este caso, "0.10", como string).
                                    +e.target.value lo convierte de string a number (por ejemplo "0.10" → 0.10).
                                    */
                                />
                            </div> 
                    )}
                
            </form>

        :
            <p></p>
        }
    </>
  )
}
