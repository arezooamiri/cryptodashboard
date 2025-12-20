
import {create} from 'zustand'

type Coin={
    image:string;
    id:string;
    symbol:string;
    current_price:number;
    market_cap_change_percentage_24h:number;
}

type CoinStore={
    
    selectCoins:Coin[];
    addCoin:(coins:Coin)=>void;
}
type Activation={
    isActive:boolean;
    toggleActive:()=>void;
    setIsActive:(value:boolean)=>void
}
export const selectCoin=create<CoinStore>((set)=>({
      selectCoins:[],
      addCoin:(coin)=> set((state)=>({selectCoins:[...state.selectCoins,coin]}))
}))

export const buttonAactive=create<Activation>((set)=>(
    {
        isActive:true,
       toggleActive:()=>set((state)=>({isActive:!state.isActive})),
        setIsActive:(value)=>set({isActive:value})
    }
))
