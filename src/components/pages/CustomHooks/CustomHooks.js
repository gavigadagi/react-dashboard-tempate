import React from 'react';
import useOrderCountHook from '../../../hooks/userOrderCount';

const CustomHooks = (props) => {
    const orderHook = useOrderCountHook();
    return (
      <div>
        <h3>count:{orderHook.orderCount}</h3>
        <button type='button' className="btn btn-primary mr-5" onClick={orderHook.incrementOrderCount}>Increment</button>
        <button type='button'className="btn btn-danger" onClick={orderHook.decrementOrderCount}>Decrement</button>
     </div>
    );
 
}

export default CustomHooks;
