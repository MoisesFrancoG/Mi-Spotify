import { Node } from "./Node.mjs";
export class Doblelista {
    constructor() {
        this.head = null; 
        this.size = 0;     
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            const tail = this.head.prev;
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        this.size++;
    }

    
    insert(data, index) {
        if (index < 0 || index > this.size) {
            return false;
        }

        const newNode = new Node(data);

        if (index === 0) {
            if (!this.head) {
                this.head = newNode;
                newNode.next = newNode;
                newNode.prev = newNode;
            } else {
                const tail = this.head.prev;
                newNode.next = this.head;
                newNode.prev = tail;
                this.head.prev = newNode;
                tail.next = newNode;
                this.head = newNode;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.prev = current;
            newNode.next = current.next;
            current.next.prev = newNode;
            current.next = newNode;
        }

        this.size++;
        return true;
    }

    
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;

        if (this.size === 1) {
            this.head = null;
        } else if (index === 0) {
            const tail = this.head.prev;
            this.head = this.head.next;
            tail.next = this.head;
            this.head.prev = tail;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
            if (current === this.head) {
                this.head = current.next;
            }
        }

        this.size--;
        return current.data;
    }
    getSize() {
        return this.size
    }
    getElementAt(index) {
        if (index >= 0 && index < this.size) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return null; 
    }
}