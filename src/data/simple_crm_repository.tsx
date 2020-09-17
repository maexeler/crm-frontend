import {Customer, Memo} from '../model/crm'

export const customerList: Customer[] = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Trax'},
    {id: 3, name: 'Gigax'},
]

export const memoList: Memo[] = [
    {
        id: 1,
        customer_id: 1,
        note: 'this is not a love song',
        date: new Date().getTime(),
    },
    {
        id: 2,
        customer_id: 1,
        note: 'this is still not a love song',
        date: new Date().getTime(),
    },
    
    {
        id: 3,
        customer_id: 2,
        note: 'Memo for Trax',
        date: new Date().getTime(),
    },
    
    {
        id: 4,
        customer_id: 3,
        note: 'Memo for Gigax',
        date: new Date().getTime(),
    },
    
]