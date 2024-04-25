import { Dispatch } from "react"
import { ActivityActions } from "../reducers/activityReducer"

export type Category = {
  id: number
  name: string
}

export type Activity = {
  id: string
  category:  number
  name: string
  calories: number
}

export type ActivityState = {
  activities: Activity[];
  activeId: string
}

export type FormProps = {
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

export type ActivityListProps = {
  activities: Activity[],
  dispatch: React.Dispatch<ActivityActions>
}

export type CalorieTrackerProps = {
  activities: Activity[]
}

export type CalorieDisplayProps = {
  calories: number
  text: string
}

export type HeaderProps = {
  canRestartApp: () => boolean
  dispatch: Dispatch<ActivityActions>
}