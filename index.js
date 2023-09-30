// Implementation of forEach
function myEach(collection, callback) {
    try {
        for (const element of collection) {
            callback(element);
        }
    } catch (notArray) {
        for (const key in collection) {
            callback(collection[key]);
        }
    } finally {
        return collection;
    }
}

// Implementation of map
function myMap(collection, callback) {
    let newCollection = [];
    if (Array.isArray(collection)) {
        for (const element of collection) {
            newCollection.push(callback(element));
        }
    } else {
        for (const key in collection) {
            newCollection.push(callback(collection[key]));
        }
    }
    return newCollection;
}

// Implementation of reduce
function myReduce(collection, callback, acc = undefined) {
    if (Array.isArray(collection)) {
        for (const element of collection) {
            acc = (acc === undefined) ? element : callback(acc, element, collection);
        }
    } else {
        for (const key in collection) {
            acc = (acc === undefined) ? collection[key] : callback(acc, collection[key], collection);
        }
    }
    return acc;
}

// Implementation of find
function myFind(collection, callback) {
    if (Array.isArray(collection)) {
        for (const element of collection) {
            if (callback(element)) {
                return element;
            }
        }
    } else {
        for (const key in collection) {
            if (callback(collection[key])) {
                return collection[key];
            }
        }
    }
    return undefined;
}

// Implementation of filter
function myFilter(collection, callback) {
    const filteredCollection = [];
    if (Array.isArray(collection)) {
        for (const element of collection) {
            if (callback(element)) {
                filteredCollection.push(element);
            }
        }
    } else {
        for (const key in collection) {
            if (callback(collection[key])) {
                filteredCollection.push(collection[key]);
            }
        }
    }
    return filteredCollection;
}

// Implementation of size
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}


// Implementation of first
function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    }
    let slicedArray = [];
    for (let i = 0; i < n && i < mySize(array); i++) {
        slicedArray.push(array[i]);
    }
    return slicedArray;
}

// Implementation of last
function myLast(array, n = 1) {
    if (n === 1) {
        return array[mySize(array) - 1];
    }
    let slicedArray = [];
    let end = mySize(array);
    let i = end - n;
    while (i < end) {
        slicedArray.push(array[i]);
        i++;
    }
    return slicedArray;
}

// Implementation of keys
function myKeys(object) {
    const keyArray = [];
    for (const key in object) {
        keyArray.push(key);
    }
    return keyArray;
}

// Implementation of values
function myValues(object) {
    const valueArray = [];
    for (const key in object) {
        valueArray.push(object[key]);
    }
    return valueArray;
}