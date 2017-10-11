function coinbase() {

  var btc_sell_price_cell = 'A3'
  var btc_buy_price_cell = 'A4'

  var eth_sell_price_cell = 'A5'
  var eth_buy_price_cell = 'A6'

  var ltc_sell_price_cell = 'A7'
  var ltc_buy_price_cell = 'A8'

  price("BTC", btc_sell_price_cell, btc_buy_price_cell)
  price("ETH", eth_sell_price_cell, eth_buy_price_cell)
  price("LTC", ltc_sell_price_cell, ltc_buy_price_cell)
}

function price(crypto, sell_cell, buy_cell) {
  var sell_url = "https://api.coinbase.com/v2/prices/" + crypto + "-SGD/sell"
  var buy_url  = "https://api.coinbase.com/v2/prices/" + crypto + "-SGD/buy"

  var response = UrlFetchApp.fetch(sell_url)
  var data = JSON.parse(response)

  var sell_price = data.data.amount

  response = UrlFetchApp.fetch(buy_url)
  data = JSON.parse(response)

  var buy_price = data.data.amount

  var sheet = SpreadsheetApp.getActiveSpreadsheet()

  sheet.getRange(sell_cell).setValue(sell_price)
  sheet.getRange(buy_cell).setValue(buy_price)
}

