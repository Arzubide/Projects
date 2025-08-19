import type { ReactNode } from "react"

type ErrorMesageProps = {
  children : ReactNode // Tipado exclusiva para children
}


export default function ErrorMesage({children} : ErrorMesageProps) { {/* agregando children podemos incluso rederizar otros componentes */}
  return (
    <>
      <p
        className="bg-red-500 p-2 text-white font-bold text-sm text-center"
      >{children}</p> {/* Renderizamos lo que le pasamos desde ExpenseForm*/}
    </>
  )
}
