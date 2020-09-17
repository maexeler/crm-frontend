import {Action, Computed, action, computed } from 'easy-peasy'

import {Customer, Memo} from './crm'
import {customerList, memoList} from '../data/simple_crm_repository'

const shortid = require('shortid');

export interface CrmModel {
    customers: Customer[]
    memos: Memo[]

    // Thunks
    initData:       Action<CrmModel>

    addCustomer:    Action<CrmModel, Customer>
    modifyCustomer: Action<CrmModel, Customer>
    deleteCustomer: Action<CrmModel, Customer>

    addMemo:        Action<CrmModel, Memo>
    modifyMemo:     Action<CrmModel, Memo>
    deleteMemo:     Action<CrmModel, Memo>

    // Display State & Actions
    selectedCustomer: Customer | null
    setSelectedCustomer: Action<CrmModel, Customer>

    selectedMemo: Memo | null
    setSelectedMemo: Action<CrmModel, Memo>

    memosForCustomer: Computed<CrmModel, Memo[]>
}

export const crmModel: CrmModel = {
    customers: [],
    memos: [],

    initData: action((state) => {
        state.customers = customerList
        state.memos = memoList
    }),

    addCustomer: action((state, customer) => {
        customer.id = shortid() // Generate unique id
        state.customers = [{...customer}, ...state.customers]
    }),

    modifyCustomer: action((state, customer) => {
        for( var i = 0; i < state.customers.length; i++) { 
            if ( state.customers[i].id === customer.id) {
                state.customers[i] = {...customer} // Copy todo so state changes
            }
        }
    }),

    deleteCustomer: action((state, customer) => {
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

    addMemo: action((state, memo) => {
        memo.id = shortid() // Generate unique id
        state.memos = [{...memo}, ...state.memos]
    }),

    modifyMemo: action((state, memo) => {
        for( var i = 0; i < state.memos.length; i++) { 
            if ( state.memos[i].id === memo.id) {
                state.memos[i] = {...memo} // Copy todo so state changes
            }
        }
    }),

    deleteMemo: action((state, memo) => {
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

    setSelectedCustomer: action((state, customer) => {
        if (!state.selectedCustomer || state.selectedCustomer?.id !== customer.id) {
            state.selectedMemo = null
        }
        state.selectedCustomer = customer
    }),

    selectedMemo: null,

    setSelectedMemo: action((state, memo) => {
        state.selectedMemo = memo
    }),

    memosForCustomer: computed((state)=>
        state.memos
            .filter((memo) => state.selectedCustomer?.id === memo.customer_id)
            .sort((left, right) => right.date - left.date)
            // .sort((left, right) => left.date - right.date)
    )
}
