export interface ToolkitProps{}


interface Dataset{
    label: string,
    data: number[],
    backgroundColor: string[],
    borderColor: string[],
    borderWidth: number
}

export interface ChartData{
    labels: string[],
    datasets: Dataset[]
}