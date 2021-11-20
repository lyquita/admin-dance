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

export interface Dataset{
    label?: string,
    data: number[],
    backgroundColor?: string[],
    borderColor?: string[],
    borderWidth?: number
}

export interface ChartData{
    labels?: string[],
    datasets: Dataset[]
}

export interface Place{
    id: number;
    placeName: string;
    value: string;
}

export interface IChartProps{
    orderAmountList: ChartData,
    signAmountList: ChartData,
    occupyRateList: ChartData,
    costPerUserList: ChartData
}

export interface IOrderProps{
    orderAmountList : ChartData,
}

export interface ISignProps{
    signAmountList: ChartData,
}

export interface IOccupyProps{
    occupyRateList: ChartData,
}

export interface ICostProps{
    costPerUserList: ChartData,
}
