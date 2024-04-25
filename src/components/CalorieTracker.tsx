import { useMemo } from "react";
import { CalorieTrackerProps } from "../types";
import { CalorieDisplay } from "./CalorieDisplay";

export const CalorieTracker = ({ activities }: CalorieTrackerProps) => {

  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities]);
  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities]);
  const totalCalories = useMemo(() => caloriesConsumed - caloriesBurned, [activities]);
  const deficitOrSuper = totalCalories < 0 ? 'Déficit' : 'Superávit';

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen de Calorías</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="kcal consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="kcal quemadas"/>
        <CalorieDisplay calories={totalCalories} text={deficitOrSuper + ' calórico'}/>
      </div>
    </>
  )
}
