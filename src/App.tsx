import { useEffect, useMemo, useReducer } from "react"
import { Form } from "./components/Form"
import { CalorieTracker } from './components/CalorieTracker';
import { activityReducer, initialState } from "./reducers/activityReducer";
import { ActivityList } from "./components/ActivityList";
import { Header } from "./components/Header";


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () => useMemo(() => state.activities.length > 0, [state.activities])

  return (
    <>
      <Header canRestartApp={canRestartApp} dispatch={dispatch} />
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-gray-800 py-10 text-white">
        <div className="max-w-4xl mx-auto">
          <CalorieTracker activities={state.activities} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList dispatch={dispatch} activities={state.activities} />
      </section>
    </>
  )
}

export default App
