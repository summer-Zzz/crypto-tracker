// The only thing important here is the symbol and last value 

const selectedCoin = {{
  symbol: 'BTC/USD', timestamp: 1621265209393, datetime: '2021-05-17T15:26:49.393Z', high: 48099.1, low: 42200, bid: 43550.3, 
  bidVolume: undefined, ask: 43569.3, askVolume: undefined, vwap: 44938.74509, open: 46474.7,  close: 43550.3, last: 43550.3, 
  previousClose: undefined, change: undefined, percentage: undefined, average: undefined, baseVolume: 12955.53722716, quoteVolume: 582205584.9553486,
  info: { 
    a: [ '43569.30000', '1', '1.000' ],
    b: [ '43550.30000', '4', '4.000' ],
    c: [ '43550.30000', '0.00000016' ],
    v: [ '7053.37534369', '12955.53722716' ],
    p: [ '44374.56500', '44938.74509' ],
    t: [ 61826, 116404 ],
    l: [ '42200.00000', '42200.00000' ],
    h: [ '46648.50000', '48099.10000' ],
    o: '46474.70000'
  }
},
{
symbol:"ETH/BTC",timestamp:1621308589043,datetime:"2021-05-18T03:29:49.043Z",high:0.078786,low:0.07401,bid:0.075683,
bidVolume:1.472,ask:0.075703,askVolume:1.8,vwap:0.076175,open:0.07532,close:0.075701,last:0.075701,
previousClose:0.07532,change:0.000381,percentage:0.506,baseVolume:283759.091,quoteVolume:21615.34865861
},
{symbol:"LTC/BTC",timestamp:1621308589015,datetime:"2021-05-18T03:29:49.015Z",high:0.006842,low:0.00618,bid:0.006784,
bidVolume:4.11,ask:0.006785,askVolume:13.1,vwap:0.006454,open:0.00631,close:0.006785,last:0.006785,
previousClose:0.006306,change:0.000475,percentage:7.528,baseVolume:358814.03,quoteVolume:2315.78545744
},
{
symbol:"BNB/BTC",timestamp:1621308588937,datetime:"2021-05-18T03:29:48.937Z",high:0.011951,low:0.01145,bid:0.011662,
bidVolume:4.44,ask:0.011665,askVolume:9.42,vwap:0.01172729,open:0.011826,close:0.011662,last:0.011662,
previousClose:0.011827,change:-0.000164,percentage:-1.387,baseVolume:510420.81,quoteVolume:5985.85185781
},
{
symbol:"NEO/BTC",timestamp:1621308588235,datetime:"2021-05-18T03:29:48.235Z",high:0.002024,low:0.00189,bid:0.001988,
bidVolume:278.59,ask:0.001991,askVolume:75.88,vwap:0.00195163,open:0.001909,close:0.001988,last:0.001988,
previousClose:0.001907,change:0.000079,percentage:4.138,baseVolume:224948.01,quoteVolume:439.01607941
},
{
symbol:"QTUM/ETH",timestamp:1621308588683,datetime:"2021-05-18T03:29:48.683Z",high:0.005375,low:0.005089,bid:0.005314,
bidVolume:80,ask:0.005326,askVolume:4.6,vwap:0.00521287,open:0.005142,close:0.005322,last:0.005322,
previousClose:0.005108,change:0.00018,percentage:3.501,baseVolume:102528.23,quoteVolume:534.4661153
},
{
symbol:"EOS/ETH",timestamp:1621308588177,datetime:"2021-05-18T03:29:48.177Z",high:0.002822,low:0.002682,bid:0.002802,
bidVolume:293.07,ask:0.002808,askVolume:7.74,vwap:0.00275296,open:0.002689,close:0.002802,last:0.002802,
previousClose:0.00269,change:0.000113,percentage:4.202,baseVolume:927566.45,quoteVolume:2553.55427375
},
{
symbol:"SNT/ETH",timestamp:1621308579121,datetime:"2021-05-18T03:29:39.121Z",high:0.00004699,low:0.00004474,bid:0.00004572,
bidVolume:3763,ask:0.00004609,askVolume:3078,vwap:0.00004577,open:0.00004509,close:0.00004571,last:0.00004571,
previousClose:0.00004514,change:6.2e-7,percentage:1.375,baseVolume:5871022,quoteVolume:268.70659247
},
{
symbol:"BNT/ETH",timestamp:1621308580454,datetime:"2021-05-18T03:29:40.454Z",high:0.00192,low:0.001852,bid:0.001906,
bidVolume:500,ask:0.001916,askVolume:256.99,vwap:0.00188823,open:0.00191,close:0.001906,last:0.001906,
previousClose:0.001903,change:-0.000004,percentage:-0.209,baseVolume:87458.16,quoteVolume:165.14145828
},
{
symbol:"BCC/BTC",timestamp:1621220276384,datetime:"2021-05-17T02:57:56.384Z",high:0.079301,low:0.0774,bid:0,
bidVolume:0,ask:0,askVolume:0,vwap:0.07804368,open:0.079009,close:0.079081,last:0.079081,
previousClose:0.079009,change:0.000072,percentage:0.091,baseVolume:1887.255,quoteVolume:147.28832582
}};

//symbol:"GAS/BTC",timestamp:1621308564011,datetime:"2021-05-18T03:29:24.011Z",high:0.0002652,low:0.0002466,bid:0.0002544,bidVolume:3.11,ask:0.0002546,askVolume:11,vwap:0.00025436,open:0.0002526,close:0.0002546,last:0.0002546,previousClose:0.0002525,change:0.000002,percentage:0.792,baseVolume:411730.17,quoteVolume:104.72571909,"info":{symbol:"GASBTC","priceChange":"0.00000200","priceChangePercent":"0.792","weightedAvgPrice":"0.00025436","prevClosePrice":"0.00025250","lastPrice":"0.00025460","lastQty":"14.00000000","bidPrice":"0.00025440","bidQty":"3.11000000","askPrice":"0.00025460","askQty":"11.00000000","openPrice":"0.00025260","highPrice":"0.00026520","lowPrice":"0.00024660","volume":"411730.17000000",quoteVolume:"104.72571909","openTime":"1621222164011","closeTime":"1621308564011","firstId":"13294922","lastId":"13342251","count":"47330"}},"BNB/ETH":{symbol:"BNB/ETH",timestamp:1621308588971,datetime:"2021-05-18T03:29:48.971Z",high:0.15792,low:0.15093,bid:0.15403,bidVolume:3.621,ask:0.15415,askVolume:0.212,vwap:0.15426022,open:0.15706,close:0.15401,last:0.15401,previousClose:0.15724,change:-0.00305,percentage:-1.942,baseVolume:167100.951,quoteVolume:25777.0300776,"info":{symbol:"BNBETH","priceChange":"-0.00305000","priceChangePercent":"-1.942","weightedAvgPrice":"0.15426022","prevClosePrice":"0.15724000","lastPrice":"0.15401000","lastQty":"2.58900000","bidPrice":"0.15403000","bidQty":"3.62100000","askPrice":"0.15415000","askQty":"0.21200000","openPrice":"0.15706000","highPrice":"0.15792000","lowPrice":"0.15093000","volume":"167100.95100000",quoteVolume:"25777.03007760","openTime":"1621222188971","closeTime":"1621308588971","firstId":"33894904","lastId":"33991769","count":"96866"}},"BTC/USDT":{symbol:"BTC/USDT",timestamp:1621308589044,datetime:"2021-05-18T03:29:49.044Z",high:45800,low:42001,bid:44972.13,bidVolume:1.321551,ask:44972.14,askVolume:0.143441,vwap:44038.08985581,open:43256.12,close:44972.13,last:44972.13,previousClose:43251.47,change:1716.01,percentage:3.967,baseVolume:163012.383096,"quoteVolume:7178753974.391208,"info":
