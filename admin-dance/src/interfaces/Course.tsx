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

export interface IToolkitProps {
    coachname?: string,
    coursename?: string,
    placename?: string,
    setCoachName?: (coachname:string)=>void,
    setPlaceName?: (place:string)=>void,
    setCourseName?: (coursename:string)=>void
}
