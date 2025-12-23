import { create } from "zustand";
import { persist, createJSONStorage  } from "zustand/middleware";


type Coin = {
  image: string;
  id: string;
  symbol: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
};

type CoinStore = {
  selectCoins: Coin[];
  addCoin: (coins: Coin) => void;
};
type Activation = {
  isActive: boolean;
  toggleActive: () => void;
  setIsActive: (value: boolean) => void;
};
export const selectCoin = create<CoinStore>()(
    persist((set) => ({
    selectCoins: [] as Coin[],
   
    addCoin: (coin) =>
       
      set((state) => {
        const exist=state.selectCoins.some(c=>c.id===coin.id)  ;
        if(exist){
            return state;
        }else{
                return { selectCoins: [...state.selectCoins, coin] }
        }
  
      }
    )
        
  }),{name:"coin-storage",storage:createJSONStorage(()=>sessionStorage)})
);

export const buttonAactive = create<Activation>((set) => ({
  isActive: true,
  toggleActive: () => set((state) => ({ isActive: !state.isActive })),
  setIsActive: (value) => set({ isActive: value }),
}));
