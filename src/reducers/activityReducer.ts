import { Activity, ActivityState } from './../types/index';
export type ActivityActions = 
{
  type: 'SAVE_ACTIVITY', payload: { newActivity: Activity } 
} | {
  type: 'SET_ACTIVEID', payload: {  id: string },
} | {
  type: 'DELETE_ACTIVITY', payload: { id: string }
} | {
  type: 'RESET_APP',
}

const localStorageActivities = () : Activity[] => {
  const activities = localStorage.getItem('activities')
  return activities ? JSON.parse(activities) : [];
}

export const initialState : ActivityState = {
  activities: localStorageActivities(),
  activeId: ''
}

export const activityReducer = (state : ActivityState = initialState, action : ActivityActions) => {
  if(action.type === 'SAVE_ACTIVITY') {
    //Este código maneja la lógica para actualizar el state

    let updatedActivities: Activity[] = [];

    if(state.activeId) {
      updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity]
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: ''
    }
  }

  if(action.type === 'SET_ACTIVEID') {
    return {
      ...state,
      activeId: action.payload.id
    }
  }

  if(action.type === 'DELETE_ACTIVITY') {
    return {
      ...state,
      activities: state.activities.filter(activity => activity.id !== action.payload.id )
    }
  }

  if(action.type === 'RESET_APP') {
    return{
      activities: [],
      activeId: ''
    }
  }
  return state;
}