document.addEventListener("DOMContentLoaded",()=>{ 
    const carrito = document.getElementById('carro')
    let count = 0;
    const lista_carrito = document.getElementById('lista-carrito')
    console.log(lista_carrito);
    let totalcarrito = []
    const buttons = document.querySelectorAll('.card .btn')
    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const carrito_count = document.getElementsByClassName('carrito-count')[0]
            console.log(carrito_count);
    
            count++
            carrito_count.textContent = count
            const data = e.target.closest('.card')
            leerdatos(data)
        })

        function leerdatos(producto){ 
            const infoProducto ={
                imagen: producto.querySelector('img').src,
                titulo: producto.querySelector('h3').textContent,
                precio: parseInt(producto.querySelector('.btn').textContent),
                id: producto.querySelector('a').getAttribute('data-id'),
                cantidad: 1,
        }

        const existe = totalcarrito.some(producto=>{producto.id == infoProducto})
        if(existe){
            totalcarrito = totalcarrito.map((producto)=>{
                if (producto.id === infoProducto.id) {
                    producto.cantidad++
                    console.log(producto)
                }
                return producto
            })
        }else{ 
            totalcarrito.push(infoProducto);
            console.log(totalcarrito);
        }

        }
            carrito.addEventListener('mouseover',(e)=>{
            
        })
         
   
        })
        
        
    })










