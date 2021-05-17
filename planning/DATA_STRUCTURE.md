TradeTable Data

```js
{
      coinSymbol: trade.symbol,
      price: trade.price,
      amount: trade.amount,
      cost: trade.cost,
      time: trade.timestamp,
      orderType: trade.type,
      side: trade.side 
}

  ``` 
CoinTable Data

```js
{
        key: coinData.symbol,
        coinSymbol: coinData.symbol,
        price: coinData.ask,
        change: coinData.change,
        changePercent: coinData.percentage,
        volume: coinData.baseVolume
}

  ```
Chart Data

```js

// data per candlestick
[ 
1618405200000, // timestamp
63872.48, // open price
64477.2, // high price
63621.62, // low price
63787.45, // close price
24.529859 // volume
]

  ``` 

User Balance data 

```js

{
  BTC: 0.25588023,
  USDT: 17422.2849681,
  ETH: 0.19851129,
  XRP: 70.929,
  LINK: 0,
  XTZ: 0,
  LTC: 0,
  ADA: 0,
  TRX: 0,
  ONT: 0,
  BCH: 0,
  NEO: 0,
  EOS: 0,
  COMP: 0,
  YFI: 0,
  ALGO: 0,
  DOT: 0,
  UNI: 0,
  AAVE: 0,
  DOGE: 324.675,
  BAT: 0,
  CHZ: 0,
  MANA: 0,
  ENJ: 0,
  SUSHI: 0,
  SNX: 0,
  GRT: 0,
  MKR: 0,
  VET: 0,
  ZEC: 0,
  FIL: 0,
  KSM: 0,
  XMR: 0,
  QTUM: 0,
  XLM: 0,
  ATOM: 0,
  LUNA: 0
}

  ```
User Exchanges Data

```js

const exchanges = [
  {
    id: 1,
    name: 'kraken',
  },
  {
    id: 1,
    name: 'binance',
  },
  {
    id: 1,
    name: 'phemex',
  },
  {
    id: 1,
    name: 'bitmex',
  }
]
  ```