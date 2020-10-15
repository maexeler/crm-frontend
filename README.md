# CRM (Custom relationship management system)

## Übersicht
Kunden (Customer) sollen zusammen mit Gesprächsnotizen (Memo) verwaltet werden.  
Jeder Kunde hat seine eigene Liste von Gesprächsnotizen.

## Ziel
Ziel ist es, für zwei gegebene Kurse (Frontend & Backend) ein gemeinsames Problem zu lösen und den Lernenden zu zeigen, wie eine Fullstack-Applikation aufgebaut sein könnte.

## Implementierung

Im Moment ist das Ganze eine etwas zusammengehackte Version einer SPA (Single Page Application), für welches ich gelegentlich ein Backend erstellen werde.

### Die Daten vom Backend haben das folgende Format
```typescript
type UniqueKey = string | number | null

interface Customer {
    id: UniqueKey,
    name: string,
    street: string,
	city: string
}

interface Memo {
    id: UniqueKey,
    customer_id: UniqueKey,
    note: string,
    date: number, // milliseconds
}
```

### Das Backend bietet die folgenden Routs:

| Http   | Rout                              | Params   | Return     | Description                                                                           |
|--------|-----------------------------------|----------|------------|---------------------------------------------------------------------------------------|
||
| **Customer**|
| GET    | /customers                        |          | Customer[] | Get all customers                                                                     |
| DELETE | /customers/{id}                   |          |            | Delete customer with ID {id}                                                          |
| PUT    | /customers/{id}                   | Customer | Customer   | Update customer with ID {id}                                                          |
| POST   | /customers                        | Customer | Customer   | Add a new customer                                                                    |
||
| **Memos**  |
| GET    | /customers/{id}/memos             |          | Memo[]     | Get all memos for the customer with ID {id}                                           |
| POST   | /customers/{id}/memos             | Memo     | Memo       | Add a new memo for the customer wit ID {id}                                           |
| DELETE | /customers/memos/{id}             |          |            | Delete the memo with the ID {id}                                                      |
| PUT    | /customers/{custId}/memos/{memoId} | Memo     | Memo       | Update the memo with ID {memoId} which has to belong to the customer with ID {custId} |

