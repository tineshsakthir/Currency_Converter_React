import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
  const [data,setData] = useState({}) ; 
  useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/a0da9b0343e5e0cc07d77dda/latest/${currency}`)
    .then((res)=> res.json())
    .then((res)=> setData(res.conversion_rates))
  },[currency]) ; 
  console.log(data) ;
  return data ; 
}


export default useCurrencyInfo ; 