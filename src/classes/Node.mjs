export class Node {
    constructor(data) {
        this.data = data; 
        this.prev = null; 
        this.next = null; 
    }

    getData() {
        return this.data
    }
}
