let ul = document.querySelector("ul")


const getApI = async()=>{
    const request = await 
    fetch("https://dummyjson.com/carts")
    const data = await request.json()
    return data
    // console.log(data.products);
}
getApI ()

// backEnd -> API -> FrontEnd

async function ShowContents() {
    
    let items = await getApI()
    console.log(items);

    items.carts.forEach(cart => {
        cart.products.forEach(item =>{
        let li = document.createElement("li")
        li.innerHTML=
        `
        <img src="${item.thumbnail}" alt="">
            <p>${item.title} </p>
            <p> Narxi: $${item.price} </p>
            <p> Miqdori: ${item.quantity} </p>

        `
        ul.appendChild(li)
        });

  });

}
ShowContents()



let input = document.querySelector(".input")

input.addEventListener("input", async (e) => {
    let inputValue = e.target.value.toLowerCase().trim()
    let data = await getApI() 

    ul.innerHTML = "" 

    
    data.carts.forEach(cart => {
        cart.products.forEach(item => {
            
            if (item.title.toLowerCase().includes(inputValue)) {
                let li = document.createElement("li")
                li.innerHTML = `
                    <img src="${item.thumbnail}" alt="">
                    <p>${item.title}</p>
                    <p>Narxi: $${item.price}</p>
                    <p>Miqdori: ${item.quantity}</p>
                `
                ul.appendChild(li)
            }
        })
    })
})

