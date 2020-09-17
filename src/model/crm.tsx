export type UniqueKey = string | number | null

export interface Customer {
    id: UniqueKey,
    name: string,
}

export interface Memo {
    id: UniqueKey,
    customer_id: UniqueKey,
    note: string,
    date: number, // milliseconds
}

export class CustomerImpl implements Customer {
    id: UniqueKey
    name: string

    constructor(name: string) {
        this.id = null;
        this.name = name
    }
}

export class MemoImpl implements Memo {
    id: UniqueKey
    customer_id: UniqueKey
    note: string
    date: number

    constructor(customer: Customer, note: string) {
        this.id = null;
        this.customer_id = customer.id
        this.note = note
        this.date = new Date().getTime()
    }
}
