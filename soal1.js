let userName = prompt('Siapa nama anda ?')
let product = prompt('produk apa yang ingin anda beli?')

onlineShop = (userName, product) => {
    let onlineShop = "Terimakasih " + userName + " telah membeli produk " + product

    return onlineShop
}

console.log(onlineShop(userName, product))