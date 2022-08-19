const typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1);

const isString = (value) => typeOf(value) === 'String';

const isObject = (value) => typeOf(value) === 'Object';

const everyValueObjectIsEmpty = (object) => {
    for (let value of object) {
        if (value !== undefined || value !== null) {
            if (isString(value) && !value.isEmpty()) return false;
            return false;
        }
    }
    return true;
};

const isEmptyObject = (value) => isObject(value) && (!Object.keys(value).length || everyValueObjectIsEmpty(value));

// Hàm so sánh sâu
const isDeepEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
    const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2

    // nếu số lượng keys khác nhau thì chắc chắn khác nhau
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        // kiểm tra xem hai giá trị có cùng là object hay không
        const areObjects = isObject(val1) && isObject(val2);

        // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
        if (areObjects && !isDeepEqual(val1, val2)) {
            return false;
        }

        // nếu không cùng là object thì so sánh giá trị
        if (!areObjects && val1 !== val2) {
            return false;
        }
    }

    return true;
};

export { typeOf, isString, isObject, isEmptyObject, everyValueObjectIsEmpty, isDeepEqual };
