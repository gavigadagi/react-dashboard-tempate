

export function filterByObject (arr, filterObj){
    const keys = Object.keys(filterObj);
    return arr.filter(element => {
        for(let key of keys){
            let val = key.split('.').reduce((acc, val) => acc = acc[val], element)
            if(val !== filterObj[key]){
                return false;
            }
        }
        return true;
    });
}