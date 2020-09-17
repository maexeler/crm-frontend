# CRM (Custom relationship management system)

## Übersicht
Kunden (Customer) sollen zusammen mit Gesprächsnotizen (Memo) verwaltet werden.  
Jeder Kunde hat seine eigene Liste von Gesprächsnotizen.

## Ziel
Ziel ist es, für zwei gegebene Kurse (Frontend & Backend) ein gemeinsames Problem zu lösen und den Lernenden zu zeigen, wie eine Fullstack-Applikation aufgebaut sein könnte.

## Implementierung

Im Moment ist das Ganze eine etwas zusammengehackte Version einer SPA (Single Page Application), für welches ich gelegentlich ein Backend erstellen werde.

Die Daten vom Backend haben das folgende Format
```javascript
type UniqueKey = string | number | null

interface Customer {
    id: UniqueKey,
    name: string,
}

interface Memo {
    id: UniqueKey,
    customer_id: UniqueKey,
    note: string,
    date: number, // milliseconds
}
```

## Dokumentation
Sorry -- momentan keine 😇

