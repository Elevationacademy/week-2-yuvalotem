// $('button').on('click', function(){
//     let $div = $(this).closest('div')
//     let $span = $div.find('span')
//     console.log($span.text());
// })

// $('button').on('click', function(){
//     console.log($('.container').find('p').text())
// })

//ex 1
let compArr = []
$('.generator').on('click', function(){
console.log(`Processor id: ${$(this).closest('.processor').attr('id')}`)
const compId = $(this).closest('.computer').data().id
compArr.push({cmp_id: compId})
console.log(`Computer's data-id: ${compId}`);
console.log(`BUS: ${$(this).closest('.computer').find('.BUS').text()}`)
})

$('.validator').on('click', function(){
    console.log(`Generator: ${$(this).closest('.computer').find('.generator').text()}`)
    console.log(`MB: ${$(this).closest('.computer').find('.MB').text()}`)
    const qrFirst = $(this).closest('.computer').find('.QR')[0]
    const qrSecond = $(this).closest('.computer').find('.QR')[1]
    console.log(`First QR: ${$(qrFirst).text()}`);
    console.log(`Second QR: ${$(qrSecond).text()}`);
})
