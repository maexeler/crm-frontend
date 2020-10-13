import {Thunk, Action, Computed, thunk, action, computed } from 'easy-peasy'

import {Customer, Memo} from './crm'
import crmService from '../service/customer_service'

export interface CrmModel {
    customers: Customer[]
    memos: Memo[]

    // Thunks
    initData:      Thunk<CrmModel>

    addCustomer:    Thunk<CrmModel, Customer>
    modifyCustomer: Thunk<CrmModel, Customer>
    deleteCustomer: Thunk<CrmModel, Customer>

    addMemo:        Thunk<CrmModel, Memo>
    modifyMemo:     Thunk<CrmModel, Memo>
    deleteMemo:     Thunk<CrmModel, Memo>

    setSelectedCustomer: Thunk<CrmModel, Customer>

    // Actions
    _initCustomers:  Action<CrmModel, Customer[]>

    _addCustomer:    Action<CrmModel, Customer>
    _modifyCustomer: Action<CrmModel, Customer>
    _deleteCustomer: Action<CrmModel, Customer>

    _initMemos:      Action<CrmModel, Memo[]>

    _addMemo:        Action<CrmModel, Memo>
    _modifyMemo:     Action<CrmModel, Memo>
    _deleteMemo:     Action<CrmModel, Memo>

    // Display State & Actions
    selectedCustomer: Customer | null
    _setSelectedCustomer: Action<CrmModel, Customer>

    selectedMemo: Memo | null
    setSelectedMemo: Action<CrmModel, Memo>

    memosForCustomer: Computed<CrmModel, Memo[]>

    _getMemosForCustomer(state:any): Memo[]

}

export const crmModel: CrmModel = {
    customers: [],
    memos: [],

    initData: thunk((actions) => {
        crmService.getCustomerList().then(
            (customers: Customer[]) => { actions._initCustomers(customers) }
        )
    }),

    setSelectedCustomer: thunk((actions, customer) => {
        crmService.getMemosForCustomer(customer).then(
            (memos: Memo[]) => {
                actions._initMemos(memos);
                actions._setSelectedCustomer(customer)
            }
        )
    }),

    addCustomer: thunk((actions, customer) => {
        crmService.addCustomer(customer).then(
            (customer: Customer) => { actions._addCustomer(customer) }
        )
    }),

    modifyCustomer: thunk((actions, customer) => {
        crmService.updateCustomer(customer).then(
            (customer: Customer) => { actions._modifyCustomer(customer) }
        )
    }),

    deleteCustomer: thunk((actions, customer) => {
        crmService.deleteCustomer(customer).then(
            () => { actions._deleteCustomer(customer) }
        )
    }),

    addMemo: thunk(async (actions, memo) => {
        crmService.addMemo(memo).then(
            (memo: Memo) => { actions._addMemo(memo) }
        )
    }),

    modifyMemo: thunk(async (actions, memo) => {
        crmService.updateMemo(memo).then(
            (memo: Memo) => { actions._modifyMemo(memo) }
        )
    }),
    
    deleteMemo: thunk(async (actions, memo) => {
        crmService.deleteMemo(memo).then(
            () => { actions._deleteMemo(memo) }
        )
    }),

    _initCustomers: action((state, customers) => {
        state.customers = customers
    }),

    _initMemos: action((state, memos) => {
        state.memos = memos
    }),

    _addCustomer: action((state, customer) => {
        state.customers = [{...customer}, ...state.customers]
        // Adding a customer means autoselect it
        state.selectedCustomer = {...customer}
        state.selectedMemo = null
    }),

    _modifyCustomer: action((state, customer) => {
        for( var i = 0; i < state.customers.length; i++) { 
            if ( state.customers[i].id === customer.id) {
                state.customers[i] = {...customer} // Copy todo so state changes
            }
        }
    }),

    _deleteCustomer: action((state, customer) => {
        for( var i = 0; i < state.customers.length; i++) { 
            if ( state.customers[i].id === customer.id) {
                state.customers.splice(i, 1); 
            }
        }
        if (state.selectedCustomer && customer.id === state.selectedCustomer.id) {
            state.selectedCustomer = null
            state.selectedMemo = null
        }
    }),

    _addMemo: action((state, memo) => {
        state.memos = [{...memo}, ...state.memos]
        // Adding a memo means autoselect it
        state.selectedMemo = {...memo}
    }),

    _modifyMemo: action((state, memo) => {
        for( var i = 0; i < state.memos.length; i++) { 
            if ( state.memos[i].id === memo.id) {
                state.memos[i] = {...memo} // Copy todo so state changes
            }
        }
    }),

    _deleteMemo: action((state, memo) => {
        for( var i = 0; i < state.memos.length; i++) { 
            if ( state.memos[i].id === memo.id) {
                state.memos.splice(i, 1); 
            }
        }
        if (state.selectedMemo && memo.id === state.selectedMemo.id) {
            state.selectedMemo = null
        }
    }),

    selectedCustomer: null,

    _setSelectedCustomer: action((state, customer) => {
        if (!state.selectedCustomer || state.selectedCustomer?.id !== customer.id) {
            state.selectedMemo = null
        }
        state.selectedCustomer = customer
        // Selecing a customer meens autoselect its last memo
        const memos = state._getMemosForCustomer(state)
        if (memos.length > 0) {
            state.selectedMemo = memos[0]
        }
    }),

    selectedMemo: null,

    setSelectedMemo: action((state, memo) => {
        state.selectedMemo = memo
    }),

    memosForCustomer: computed((state)=> state._getMemosForCustomer(state)),

    _getMemosForCustomer(state:any): Memo[] {
        return state.memos
        .filter((memo: Memo) => state.selectedCustomer?.id === memo.customer_id)
        .sort((left: Memo, right: Memo) => right.date - left.date)
    }
}
