const convert = () => {

    const from = document.getElementById('from_value')
    const to = document.getElementById('to_value')

    const fromType = document.getElementById('from_type').value
    const toType = document.getElementById('to_type').value

    if (fromType == 'pound' && toType == 'kg') {
        to.value = poundsToKg(from.value)
    }

    if (fromType == 'kg' && toType == 'pound') {
        to.value = kgToPounds(from.value)
    }

}

const poundsToKg = (pounds) => {
    return (pounds / 2.2046).toFixed(2)
}

const kgToPounds = (kg) => {
    return (kg * 2.2046).toFixed(2)
}