import { useEffect, useState } from 'react';

const useInventoryDetails = id => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://rocky-spire-05391.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [id]);
    return [inventory, setInventory]
}
export default useInventoryDetails;