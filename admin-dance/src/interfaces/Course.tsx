export interface ITable{
    id: number,
    imageurl?: string,
    coachname?: string,
    coursename?: string,
    coursedate?: string,
    placename?: string,
    signamount?: number,
    fee?: number,
    accommodateamount?: number
}

export interface ITableProps{
    tableData: ITable[],
    count: number,
    rowsPerPage: number,
    page: number;
    setRowsPerPage?: (rowsPerPage:number) => void,
    setPage?:(page:number) => void

}

export interface IToolkitProps {
    coachname?: string,
    coursename?: string,
    placename?: string,
    datebefore?: Date,
    dateafter?: Date,
    setCoachName?: (coachname:string)=>void,
    setPlaceName?: (place:string)=>void,
    setCourseName?: (coursename:string)=>void,
    setDatebefore?: (datebefore:Date)=>void,
    setDateafter?: (dateafter:Date)=>void 
}
