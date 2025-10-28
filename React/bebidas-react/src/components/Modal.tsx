import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import React from 'react';
import { useAppStore } from '../store/useAppStore';
import type { DetailsDrink } from '../types';

export default function Modal() {
    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipie = useAppStore((state) => state.selectedRecipie)

    const renderIngredients = () => { // Funcion para los ingredientes
        const ingredients: React.ReactElement[] = [] // Indicamos que sera de tipo elemento de html
        for (let i = 1; i<= 6 ; i++){
            const ingredient = selectedRecipie[`strIngredient${i}` as keyof DetailsDrink] // lo timpamos con as keyof
            const mesure = selectedRecipie[`strMeasure${i}` as keyof DetailsDrink]

            if(ingredient && mesure) {
                ingredients.push(
                    // almacenamos un elemento HTML junto con su informacion
                    <li key={i}>
                      {ingredient} - {mesure}
                    </li>
                )
            }
        }
        return ingredients
    }


  return (
    <>
        <Transition appear show={modal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-70" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                        <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                            {selectedRecipie.strDrink}
                            <img 
                              src={selectedRecipie.strDrinkThumb} 
                              alt="Imagen de la bebida"
                              className='w-96 mx-auto p-4 rounded-2xl'  
                            />
                        </Dialog.Title>
                        <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                            Ingredients
                        </Dialog.Title>
                          {/* Mostramos la lista de elementos HTML que tiene los ingredientes y las mediciones */}
                          {renderIngredients()} 
                        <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                          Instrucciones
                        </Dialog.Title>
                          <p>{selectedRecipie.strInstructionsES}</p>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}