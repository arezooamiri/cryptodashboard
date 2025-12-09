import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Coin{
    id:string;
    name:string;
    symbol:string;
    image:string;
    current_price:number;
    market_cap:number;
    market_cap_change_percentage_24h:number;
}
export type TimeRange="day"|"week"|"month"|"year";

const rangeToDays:Record<TimeRange,number>={
    day:1,
    week:7,
    month:30,
    year:365
}
export interface CoinHistoryPoint{
    timestamp:number;
    time:string;
    price:number;
}
export default function UseCoins(){
    return useQuery<Coin[]>({
        queryKey:["coins"],
        queryFn:async()=>{
            const res=await axios.get( "https://api.coingecko.com/api/v3/coins/markets",{
                params:{
                    vs_currency:"usd",
                    order:"market_cap_desc",
                    per_page:10,
                    page:1,
                }

            })
            return res.data;
        }
    })
}


export async function getCoinHistory(coinID:string,range:TimeRange,vsCurrency:string='usd'):Promise<CoinHistoryPoint[]>{
    const days=rangeToDays[range]

    const res=await axios.get(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart`,
        {
            params:{
                vs_currency:vsCurrency,
                days,
            }
        }
    )
    const prices=res.data.prices as[number,number][];

    const points:CoinHistoryPoint[]=prices.map(([timestamp,price])=>{
        const date=new Date(timestamp);
        const hours=String(date.getHours()).padStart(2,"0");
        const timeLabel=`${hours}`
        return{
            timestamp,
            time:timeLabel,
            price,
        }
        
    })
    return points;
}



