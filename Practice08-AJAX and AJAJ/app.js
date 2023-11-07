const data = `{"ticker":{"base":"BTC","target":"USD","price":"11203.95559309","volume":"92852.24445404","change":"29.34902723"},"timestamp":1596510482,"success":true,"error":""}`;

const parseData = JSON.parse(data);
console.log(parseData);
console.log(parseData.ticker);
console.log(parseData.timestamp);