
import LoadingActionTypes from "../types/LoadingType"

const startLoading = ()=>({
    type: LoadingActionTypes.START,
})

const endLoading = ()=>({
    type: LoadingActionTypes.END,
})

export { startLoading ,endLoading }