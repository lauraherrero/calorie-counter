import { ActivityList } from './../components/ActivityList';
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

export type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

export type ActivityListProps = {
  activities: Activity[]
}