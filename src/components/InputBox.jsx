import React from 'react'
import { useId } from 'react'
function InputBox({
  label,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd" ,
  amount,
  amountFeildEnabled = true ,
  currencyFeildEnabled = false , 
  className = ""
}) {

  //gives unique value every time rendering.......
  const id = useId()

  return (
    
    <div 
      className ={`${className} flex rounded-lg text-sm bg-white`} >
        <div className='w-1/2'>
          <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
          <input 
            id = {id}
            type="number"
            className= "outline-none w-full bg-transparent py-1.5"
            placeholder='Amount'
            disabled = {!amountFeildEnabled}
            value = {amount}
            onChange={(e) => {onAmountChange && onAmountChange(e.target.value)}}
          />
        </div>
        <div className='w-1/2'>
          <p className=''>Currency Type</p>
          <select
          value={selectedCurrency}
          disabled = {!currencyFeildEnabled}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
          >
            {currencyOptions.map((currency) => (
             <option key={currency} value={currency}>{currency}</option>
            ))}
            
          </select>
        </div>
    </div>
  )
}

export default InputBox