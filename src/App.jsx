import { useState } from 'react'
import './App.css'
import { InputBox } from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [fromCurrency , setFromCurrency] = useState("USD") ;
  const [toCurrency , setToCurrency] = useState("INR") ; 
  const [fromAmount , setFromAmount] = useState(0) ; 
  const [toAmount , setToAmount] = useState(0) ; 

 let data = useCurrencyInfo(fromCurrency) ; 
 let options = Object.keys(data) ; 

const convert = () =>{

  setToAmount((fromAmount*data[toCurrency]).toFixed(2))
}

const swap = () =>{
  let tempFromAmount = fromAmount ; 
  setFromAmount(toAmount) ; 
  setToAmount(tempFromAmount) ; 
  let tempFromCurrency = fromCurrency ; 
  setFromCurrency(toCurrency) ; 
  setToCurrency(tempFromCurrency) ; 
}

  return (
    <>
  <h1 className='text-center'>Currency Converter</h1>
<div className='mt-8 grid grid-cols-1 gap-4'>
  <div className='flex justify-center flex-col sm:ml-[20%] ml-[20%]'>
    <div className='bg-gray-100 p-4 rounded-lg w-3/4'>
      <InputBox
        label="from"
        onAmountChange={(amount) => setFromAmount(amount)}
        onCurrencyChange={(currency) => setFromCurrency(currency)}
        currencyOptions={options}
        selectedCurrency={fromCurrency}
        amount={fromAmount}
        amountFeildEnabled={true}
        currencyFeildEnabled={true}
      />
    </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4" onClick={() => { swap() }}>Swap</button>
  
    <div className='bg-gray-100 p-4 rounded-lg w-3/4'>
      <InputBox
        label="to"
        onCurrencyChange={(currency) => setToCurrency(currency)}
        currencyOptions={options}
        selectedCurrency={toCurrency}
        amount={toAmount}
        amountFeildEnabled={false}
        currencyFeildEnabled={true}
      />
    </div>
 
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-3/4 " onClick={() => { convert() }}>Convert</button>
  </div>
</div>

 
</>

  )
}

export default App



