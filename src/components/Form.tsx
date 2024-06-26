import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { categories } from "../data/categories"
import { Activity, FormProps } from "../types";


const INITIAL_STATE: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: 0
}

export const Form = ({dispatch, state}: FormProps) => {
  

  const [activity, setActivity] = useState<Activity>(INITIAL_STATE);

  useEffect(() => {
    if(state.activeId ) {
      const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
      
      setActivity(selectedActivity);      
    }
  }, [state.activeId]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {

    const isNumberField = ['category', 'calories'].includes(e.target.id);

    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value
    })
  }

  const isValidActivity = () => {
    const { name, calories } = activity
    return name.trim() !== '' && calories > 0;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: 'SAVE_ACTIVITY',
      payload: {
        newActivity: activity 
      }
    })
    setActivity({
      ...INITIAL_STATE,
      id: uuidv4()
      //Llamamos nuevamente al id y la función de uuid para que se ejecute nuevamente la función y  y genere un id distinto y único.
    })
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría</label>
        <select className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        <input type="text" id="name" className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Zumo de naranja, Ensalada, Ejercicio, Pesas..."
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorías:</label>
        <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorías Ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        type="submit"
        value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
        disabled={!isValidActivity()} />
    </form>
  )
}
