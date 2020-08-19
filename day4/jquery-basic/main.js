// const header = $("#header")
// console.log(header)

// $('h1').css('color', 'blue')
// $('.red-div').css('color', 'red')
// $('#first-li').css('color', 'green')
// $('#second-li').css('color', 'pink')
// $('#brown-div').css('color', 'brown')

// $('#b1').addClass('box')
// $('#b2').addClass('box')

// $('#my-input').val('Terabyte')

// console.log($('#p1').data());
// console.log(`The item with barcode ${$('#p1').data().barcode} will expire on ${$('#p1').data().expirationdate}`);

// $('#b1').hover(function() {
//     $('#b1').css( "background-color", "blue" );
//   })


//   $('button').click(function(){
//     alert($('#my-input').val());
//   })

// $('.box').hover(function(){
//     $(this).css('background-color', 'blue')
// })

// $('.feedme').on('click', function(){
//     const doc = `<div>${$(this).text()}</div>`
//     $('body').append(doc)
// })

// const names = [
//     { first: "Alex", last: "Johnson" },
//     { first: "Byron", last: "Loveall" },
//     { first: "Cassandra", last: "Wuthers" },
//     { first: "Deandre", last: "Rahm" },
//     { first: "Ellena", last: "Freeman" }
//   ]

//   for(let name of names){
//       $('body').append(`<div class='human'>${name.first} - ${name.last}</div>`)
//   }

// $('body').append('<div id="div">this is my div</div>')
// $('#div').remove()

// $('button').click( function(){
//     $('#blogs').append('<div class="blog">this is some random text</div>')
// })

// $('#blogs').on( "click", ".blog", function(){
//     $(this).text("blargh")
// })

//ex 1
// $('body').append("<input type='text' id='my-input' placeholder='Some Text!'></input><button>Click Me!</button>")
// $('button').click(function(){
//     $('#my-list').append(`<li class='my-li'>${$('#my-input').val()}</li>`)
// })

// //ex 2
// $('#my-list').on('click', '.my-li', function(){
//     $(this).remove()
// })

//ex 3
// $('body').append('<div class="box"></div><div class="box"></div>')
// $('.box').hover(function(){
//     $('.box').css('background-color', 'red')
//     $(this).css('background-color', '#8e44ad')
// })

//ex 4
// $('.item').on('click', function () {
//     let countshoes = 1
//     let countmelons = 1
//     if($(this).data().instock){
//         const item = `<div>${$(this).text()}</div>`
//         $('#cart').append(item)
//     }
// })

// ex 5
// const fruits = [
//     { name: "Orange", color: "orange" },
//     { name: "Banana", color: "yellow" },
//     { name: "Coconut", color: "brown" },
//     { name: "Kiwi", color: "brown" },
//     { name: "Lemon", color: "yellow" },
//     { name: "Cucumber", color: "green" },
//     { name: "Persimmon", color: "orange" },
//     { name: "Pumpkin", color: "orange" }
//   ]

//   for(let furit of fruits){
//       $('#basket').append(`<p class='${furit.color}'>${furit.name}</p>`)
//   }

//ex extention
// $('span').addClass('picker')
// for (let color of $('span')) {
//      $(color).css('background-color', $(color).data().color)
// }
// $('.picker').on('click', function(){
//     $('.box').css('background-color', $(this).data().color)
// })

//data flow ex
let posts = [
    {name: 'yuval', text:'hello'}
]
 
const render = function(){
    $('#post-place').empty()
    for(let post of posts){
        let div = `<div class='post'>${post.name}: ${post.text}</div>`
        $('#post-place').append(div)
    }
}

$('#btn').click(function(){
    posts.push({name:$('#name').val(), text:$('#text').val()})
    render()
})

$('#post-place').on('click','.post', function(){
    let i = posts.indexOf($(this).text())
    posts.splice(i, 1)
    render()
} )
