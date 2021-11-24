export interface ITable{
    id: number,
    imageUrl?: string,
    coachname?: string,
    coursename?: string,
    coursedate?: string,
    placename?: string,
    signamount?: number,
    fee?: number,
    accommodateAmount?: number
}

export interface ITableProps{
    tableData: ITable[],
    count: number,

}