function ValidateRequest(data, allowedProp) {
    let isValid = false
    let filteredReq = {}

    allowedProp.map((prop) => {
        if (data.hasOwnProperty(prop)) {
            isValid = true
            filteredReq[prop] = data[prop]
        } else {
            isValid = false
        }
    })
    return { isValid, filteredReq }
}

module.exports = ValidateRequest;