import { Dispatch } from "react"
import { ActivityActions } from "../reducers/activityReducer"

export type Category = {
  id: number
  name: string
}

export type Activity = {
  category:  number
  name: string
  calories: number
}

export type FormProps = {
  dispatch: Dispatch<ActivityActions>
}