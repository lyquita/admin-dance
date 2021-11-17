import placeItems from '../components/global/common';

export interface ToolkitProps{
    inputValue: string;
    setInputValue: (arg: string) => void;
}


export interface IAmountStatistics{
    avgOrderAmount: number,
    avgSignAmount: number,
    avgOccupyRate: number,
    avgCostPerUser: number
}

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

export interface Place{
    id: number;
    placeName: string;
    value: string;
}






