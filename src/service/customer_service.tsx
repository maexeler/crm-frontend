import { http, callForData } from './http'

import { Customer, Memo } from '../model/crm'

interface CrmService {
    getCustomerList(): Promise<Customer[]>

    addCustomer(customer: Customer): Promise<Customer>
    deleteCustomer(customer: Customer): Promise<void>
    updateCustomer(customer: Customer): Promise<Customer>

    getMemosForCustomer(customer: Customer): Promise<Memo[]>

    addMemo(memo: Memo): Promise<Memo>
    deleteMemo(memo: Memo): Promise<void>
    updateMemo(memo: Memo): Promise<Memo>
}

const crmService: CrmService = {
    async getCustomerList(): Promise<Customer[]> {
        return callForData(http.get, '/customers/')
    },
    async addCustomer(customer: Customer): Promise<Customer> {
        return callForData(http.post, '/customers/', customer)
    },
    async deleteCustomer(customer: Customer): Promise<void> {
        return callForData(http.delete, `/customers/${customer.id}`)
    },
    async updateCustomer(customer: Customer): Promise<Customer> {
        return callForData(http.put, `/customers/${customer.id}`, customer)
    },

    async getMemosForCustomer(customer: Customer): Promise<Memo[]> {
        return callForData(http.get, `/customers/${customer.id}/memos/`)
    },

    async addMemo(memo: Memo): Promise<Memo> {
        return callForData(http.post, `/customers/${memo.customer_id}/memos/`, memo)
    },
    async deleteMemo(memo: Memo): Promise<void> {
        return callForData(http.delete, `/customers/memos/${memo.id}`)
    },
    async updateMemo(memo: Memo): Promise<Memo> {
        return callForData(http.put, `/customers/${memo.customer_id}/memos/${memo.id}`, memo)
    },
    
}

export default crmService