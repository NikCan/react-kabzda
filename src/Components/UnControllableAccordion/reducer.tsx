import {StateType} from "./UnControllableAccordion";

type ActionType = {
    type: string
}
export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return {...state, collapsed: !state.collapsed}
    }
throw new Error("Bad action type")
}