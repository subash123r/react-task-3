
import './App.css'


export default function App() {
  const [price, setPrice] = useState(5000);
  const [storehouse, setStoreHouse] = useState(10);
  const [cart, setCart] = useState(0);
  function reducer() {}
  const [state, dispatch] = useReducer(reducer, initialStore);
  console.log(state);
  return (
    <div className="App">
      {/* Setup provider subscriber method */}
      <shopCtx.Provider value={{ state }}>
        <ProductAdmin />
        <UserComponents />
        <CheckoutComponet />
      </shopCtx.Provider>
    </div>
  );
}

function Cart() {
  //use the context
  const { state } = useContext(shopCtx);

  function handleAddTocart() {
    if (storehouse > 0) {
      setCart(cart + 1);
      setStoreHouse(storehouse - 1);
    }
  }
}
function App() {

  return (
    <>
    <hr />
<div className='headder'>
  <h1 className='start'>start bootstrap </h1>
  <ul>home / about / shop</ul>
  <button className='btn'>🛒cart {state.cart}</button>
</div>
<div className='shop'>
  <h1 className='style'>shop in style</h1>
  <h1 className='sstyle_2'>With this shop hompeage template</h1>
</div>


<div className='card'>

<div className='img'><h1 className='num'>250 x 300</h1>

</div>
  <div className='pad'>
  <h3 className='h3_2'>Special Item</h3>
  <h4 className='h4_2'>$20.00 $18.00</h4>
  <button className='btn_2'  onClick={handleAddTocart}>add to cart</button>
  </div>
</div>


<div className='card'>
<div className='img'><button className='sale_btn'>sale</button><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Sale Item</h3>
  <h4 className='h4_2'>$50.00 $25.00</h4>
  <button className='btn_2'>add to cart</button>
  </div>
</div>



<div className='card'>
<div className='img'><button className='sale_btn'>sale</button><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Popular Item</h3>
  <h4 className='h4_2'>$40.00</h4>
  <button className='btn_2'>add to cart</button>
  </div>
</div>


<div className='card'>
<div className='img'><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Fancy Product</h3>
  <h4 className='h4_2'>$40.00 - $80.00</h4>
  <button className='btn_2'>view options</button>
  </div>
</div>


<div className='card'>
<div className='img'><button className='sale_btn'>sale</button><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Fancy Product</h3>
  <h4 className='h4_2'>$40.00 - $80.00</h4>
  <button className='btn_2'>view options</button>
  </div>
</div>

<div className='card'>
<div className='img'><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Fancy Product</h3>
  <h4 className='h4_2'>$40.00 - $80.00</h4>
  <button className='btn_2'>view options</button>
  </div>
</div>

<div className='card'>
<div className='img'><button className='sale_btn'>sale</button><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Fancy Product</h3>
  <h4 className='h4_2'>$40.00 - $80.00</h4>
  <button className='btn_2'>view options</button>
  </div>
</div>

<div className='card'>
<div className='img'><h1 className='num'>250 x 300</h1></div>
  <div className='pad'>
  <h3 className='h3_2'>Fancy Product</h3>
  <h4 className='h4_2'>$40.00 - $80.00</h4>
  <button className='btn_2'>view options</button>
  </div>
</div>

    </>
  )
   
}



export default App
