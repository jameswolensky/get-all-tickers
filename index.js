const axios = require('axios')

const stocks = {
    tickers: async () => {
        try {
            const result = (await axios.get('https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=25&offset=0&download=true')).data
            return result.data.rows.map(ticker => ticker.symbol)
        } catch (e) {
            console.log('Error getting stock tickers: ', e)
        }
    }
}

module.exports = {
    stocks
}
