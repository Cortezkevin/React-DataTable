export interface Row {
    [key: string] : any;
}

export interface Column {    
    name: string;
    selector: ( row: Row ) => any;
}
