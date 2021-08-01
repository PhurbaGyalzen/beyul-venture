const origin = 'https://uat.esewa.com.np'
const merchantCode = 'EPAYTEST'

const getEsewaLink = (
    price,
    itemId,
    taxCharge = 0,
    serviceCharge = 0,
    deliveryCharge = 0,
) => {
    const currLocation = window.location.href
    const redirectURL = currLocation + '?paymentResp='
    const esewaURL = new URL(origin + '/epay/main')
    esewaURL.search = new URLSearchParams([
        ['amt', price],
        ['txAmt', taxCharge],
        ['psc', serviceCharge],
        ['pdc', deliveryCharge],
        ['tAmt', price + taxCharge + serviceCharge + deliveryCharge],
        ['pid', itemId],
        ['scd', merchantCode],
        ['su', redirectURL + 'success'],
        ['fu', redirectURL + 'fail'],
    ])
    return esewaURL
}
