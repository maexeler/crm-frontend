import { createStore, createTypedHooks } from 'easy-peasy'
// import { CrmModel, crmModel } from '../model/crm_model'
import { CrmModel, crmModel } from '../model/crm_model_service'

// StoreModel may contain several Models
interface StoreModel {
    crmModel: CrmModel;
}

// Create the store 
const store = createStore<StoreModel>({
    crmModel: crmModel 
})

export default store

// Create typed hooks to interact with the store
// This is boilerplate code to create typescript information
const { 
    useStoreActions,
    useStoreDispatch,
    useStoreState,
} = createTypedHooks<StoreModel>()

export { useStoreActions, useStoreDispatch, useStoreState }