import { useMemo } from "react";
import { ActivityListProps } from "../types";
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline';

export const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

  const isEmptyActivities = useMemo(() => activities.length === 0,[activities])

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y ejercicios</h2>
      {isEmptyActivities ? 
        <p className="text- font-bold text-slate-600 text-center mt-8">Aún no se han añadido actividades</p> :
        activities.map(activity => (
          <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
            <div className="space-y-2 relative">
              <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                {activity.category === 1 ? 'Comida' : 'Ejercicio'}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.name}</p>
              <p className="font-black text-4xl text-lime-500">{activity.calories} <span>calorías</span></p>
            </div>
            <div className="flex gap-5 items-center">
              <button onClick={() => dispatch({ type: 'SET_ACTIVEID', payload: { id: activity.id } })}>
                <PencilSquareIcon className="h-8 w-8 text-gray-800" />
              </button>
              <button onClick={() => dispatch({ type: 'DELETE_ACTIVITY', payload: { id: activity.id } })}>
                <XCircleIcon className="h-8 w-8 text-red-500" />
              </button>
            </div>
          </div>
        ))}
    </>
  )
}
