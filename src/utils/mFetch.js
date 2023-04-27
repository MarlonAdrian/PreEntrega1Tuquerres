let products =[
    {id:'1',title:'DesktopwithParrotSO',description:'this is a description',price:10,  categoria:'hogar',foto:'https://imgs.search.brave.com/-RIVDIWHD-w4UVKLprESSSYHuURuDeNmpaHclk8QygA/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/Y2NlbnRyYWx0dC5j/b20vYXNzZXRzL3By/b2R1Y3RpbWFnZXMv/aW1nXzU4MTQyZTgw/YTY3OWYucG5n'},
    {id:'2',title:'Speaker Zense 10/10',description:'es una descripcion',price:11, categoria:'hogar', foto:'https://point.com.ec/wp-content/uploads/2020/05/Parlante-300x300.jpg'},
    {id:'3',title:'Smart TV Panasonic 1990',description:'this is a description',price:12, categoria:'hogar', foto:'https://ecuador.solutekla.com/photo/1/panasonic/tvs/tv_3280cm_led_panaso_32d400hd/tv_3280cm_led_panaso_32d400hd_0001'},
    {id:'4',title:'Samsung XX',description:'this is a description',price:13,categoria:'smartphones', foto:'https://images.samsung.com/is/image/samsung/p6pim/latin/2302/gallery/latin-galaxy-s23-s916-sm-s916blikgto-thumb-534856605?$264_264_PNG$' },
    {id:'5',title:'Cellphone Case Extra Durable',description:'this is a description',price:14,categoria:'accesorios', foto:'https://imgs.search.brave.com/6yNYea_rXWV7mYFePjmxwO86Ay8Dyz35UWTx6WvhCZk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGYx/ZGI5NzAtNTFjNy00/ZWM4LTgxZTEtMDZh/MjBjMjJlNTBhLjEw/YmZhY2QyNzU4OTVh/MGZhMTk1YzYyM2Ez/ODkwZDlmLmpwZWc_/b2RuV2lkdGg9MTAw/MCZvZG5IZWlnaHQ9/MTAwMCZvZG5CZz1m/ZmZmZmY', },
    {id:'6',title:'Headphones Ultra Blue',description:'this is a description',price:15,categoria:'accesorios', foto:'https://imgs.search.brave.com/v_saSiQSm0PqybcGO0IthKmS8BP_p-bXCoBgfGNJ_64/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2JlYXRzX2J5/X2RyX2RyZV9tdHF5/MmxsX2Ffc3R1ZGlv/M193aXJlbGVzc19i/bHVldG9vdGhfaGVh/ZHBob25lc18xNDQy/MjUwLmpwZw', },
    {id:'7',title:'Sony Xperia 1234',description:'this is a description',price:16,categoria:'smartphones', foto:'https://http2.mlstatic.com/D_NQ_NP_949454-MEC43596300256_092020-O.jpg', },
    {id:'8',title:'IPhone SuperMegaUltraPlus',description:'this is a description',price:16,categoria:'smartphones', foto:'https://tienda.itc.ec/wp-content/uploads/2021/07/iphone-11-03.jpg' },
]

export const mFetch = (id) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(!id ? products : products.find(product => product.id === id))
        }, 2000)
    }) 
}
