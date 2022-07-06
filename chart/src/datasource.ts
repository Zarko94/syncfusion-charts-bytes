export  class columnData {
    id: number;
    year: number;
    month: number;
    bytes: number;
    totalDocuments: number;

    constructor(dataResponse:any){
        this.id=dataResponse.id;
       this.year=dataResponse.Year
        this.month=dataResponse.Month
        this.bytes=dataResponse.Bytes
        this.totalDocuments=dataResponse.TotalDocuments

    }
}