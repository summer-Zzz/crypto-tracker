const sendTime = (timeString) => {
  switch(timeString) {
   case '1m':
     return new Date - 60000
    case '5m':
     return new Date - 300000 
    case '30m':
     return new Date - 1800000 
    case '1hr':
     return new Date - 3600000 
    case '4hr':
     return new Date - 14400000 
    case '1d':
     return new Date - 345600000 
    case '1w':
     return new Date - 604800000 
    case '2w':
     return new Date - 1209600000 
    case '1mo':
     return new Date - 2629800000 
    case '6mo':
     return new Date - 15778800000 
    default:
     return new Date() 
  }
} 

module.exports = { sendTime }