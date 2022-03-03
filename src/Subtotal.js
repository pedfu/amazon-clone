import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>
                        {value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type={"checkbox"} /> This order contains a gift
                    </small>
                    </>
            )} 
            decimalScale={2} // so dois digitos depois do ponto
            value={getBasketTotal(basket)}  //amount (subtotal) - homework + trocar os 0 por value
            displayType={"text"}  
            thousandSeparator={true}
            prefix={"$"}
        />
        {/* nesse caso usa o history para nao mudar o style do botao, caso usasse link ele mudaria o style */}
        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal