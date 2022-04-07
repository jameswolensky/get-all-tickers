# get-all-tickers
I created this package because there was no simple way in JavaScript to get an array of all stock tickers.
# Usage
All methods return a promise. Once fulfilled, you will receive an array of stock tickers.

The only current method is the `stocks.tickers()`. I will add more if there is interest. Suggestions are welcome!

## Example
```
(async () => {
    const { stocks } = require('get-all-tickers')
    console.log('tickers:', await stocks.tickers())
})()
```

## Installation
`npm i get-all-tickers`
