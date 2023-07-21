import { v4 as uuid } from 'uuid';

class Transaction {
    private id: string;
    private title: string;
    private value: number;
    private type: string;

    constructor(id: string, title: string, value: number, type: string) {
        this.id = uuid()
        this.title = title
        this.value =  value
        this.type = type
        
    }
}