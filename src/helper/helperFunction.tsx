import UseCoins from  "../Api/Coinapi"

export default function getPriceSymbol(symbol:string){
    const {data}=UseCoins()
    const coin=data?.find(c=>c.symbol.toLowerCase()===symbol.toLocaleLowerCase())
    return coin?.current_price??null
}