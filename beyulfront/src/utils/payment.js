const origin = 'https://uat.esewa.com.np'
const merchantCode = 'EPAYTEST'
const KEY = 'paymentResp'

const getEsewaLink = (
    price,
    itemId,
    taxCharge = 0,
    serviceCharge = 0,
    deliveryCharge = 0,
) => {
    const currLocation = window.location.href
    // dont optimise
    const succRedirectURL = new URL(currLocation)
    const failRedirectURL = new URL(currLocation)
    succRedirectURL.searchParams.set(KEY, 'success')
    failRedirectURL.searchParams.set(KEY, 'fail')
    const esewaURL = new URL(origin + '/epay/main')
    esewaURL.search = new URLSearchParams([
        ['amt', price],
        ['txAmt', taxCharge],
        ['psc', serviceCharge],
        ['pdc', deliveryCharge],
        ['tAmt', price + taxCharge + serviceCharge + deliveryCharge],
        ['pid', itemId],
        ['scd', merchantCode],
        ['su', succRedirectURL],
        ['fu', failRedirectURL],
    ])
    // test username and password
    // 9806800002
    // Nepal@123
    return esewaURL
}

export { getEsewaLink }
