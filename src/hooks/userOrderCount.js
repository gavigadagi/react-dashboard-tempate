import { useState } from "react";

function useOrderCountHook() {
    const [orderCount, setOrderCount] = useState(0);

    const incrementOrderCount = () => {
        setOrderCount( orderCount + 1);
    }
    const decrementOrderCount = () => {
        setOrderCount( orderCount - 1);
    }

    return { orderCount, incrementOrderCount , decrementOrderCount }
}

export default useOrderCountHook;