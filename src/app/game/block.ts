export class Block {
    free = true;
    value = '';
    symbol = '';

    setValue(value) {
        this.value = value;
        if (this.value === 'person') {
            this.symbol = 'person';
        } else {
            this.symbol = 'android';
        }
    }

}
