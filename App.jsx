import './App.css'

function App() {
  const pro = {
    Type: "PRO",
    price: 0,
    storage :10,
    access: 0
  }
  const free = {
    Type: "FREE",
    price: 9,
    storage :500,
    access: 10
  }
  const promax = {
    Type: "PROMAX",
    price: 49,
    storage :1000,
    access: 18
  
 }  
 return (
    <>
      <Pricecard type = "Free" Price="$ 0/month" Storage="10gb" Access="Single" subscribe="❌ OTT subscription" speed="30mbps"/>
      <Pricecard type = "Pro" Price="$ 9/month" Storage="500gb" Access="10 persons" subscribe="✓ 5 OTT subscription" speed="60mbps"/>
      <Pricecard type = "Promax" Price="$ 49/month" Storage="1000gb" Access="unlimited"subscribe="✓ 14 OTT subscription" speed="100mbps"/>
      </>
  );
}

export default App;

function Pricecard (props){
  return(
    <div className='pricecart'>
      <h3 className="type">{props.type}</h3>
      <h2> {props.Price}</h2>
      <hr></hr>
      <p>✓ {props.Storage}</p>
      <p>✓ {props.Access}</p>
      <p>{props.subscribe}</p>
      <p>{props.speed}</p>
      
      <button>Buy</button>

  
    
    </div>
  );
}

