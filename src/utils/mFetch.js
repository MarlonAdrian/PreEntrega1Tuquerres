let products =[
    {id:'1',title:'Hat',description:'this is a description',price:10, foto:'https://imgs.search.brave.com/lwPmnl9I5mHeZTr87lb7FvZ4KIyHVL82J2DvY9iDi74/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vZ29ycmEtdHJ1/Y2tlci1wYXJhLXN1/YmxpbWFyLXZhcmlv/cy1jb2xvcmVzLWVj/b25vbWljYS1EX05R/X05QXzc5MzgwNy1N/TE0yNzE5ODU1MjY0/OF8wNDIwMTgtRi5q/cGc', categoria:'gorras'},
    {id:'2',title:'T-shirt',description:'es una descripcion',price:11, foto:'https://imgs.search.brave.com/PpGbPjFUZd5NrnxAxIIUIw50-i-lF9VRfjTWEOd5G28/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9raW5n/ZG9vZGxlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8x/MS9CbGFja19Qcmlu/dG8uanBn', categoria:'gorras'},
    {id:'3',title:'Pants',description:'this is a description',price:12, foto:'https://imgs.search.brave.com/mzOzknaUML9z69rnv5BsbUsHvpH-XlZjbH4Grfe0IhA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vbGRu/YXZ5LmdhcC5jb20v/d2ViY29udGVudC8w/MDE1LzE4MS8xMDcv/Y24xNTE4MTEwNy5q/cGc', categoria:'gorras'},
    {id:'4',title:'Shoes',description:'this is a description',price:13, foto:'https://imgs.search.brave.com/L6V3yzEBdZbP9FhJqUfDItQS7i3UjlNNW5iuXI2JCHU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b21lZ2FzcG9ydHMu/Y29tL3Byb2RpbWFn/ZXMvMzIzNS1ERUZB/VUxULWwuanBn', categoria:'pantalones'},
    {id:'5',title:'Jacket',description:'this is a description',price:14, foto:'https://imgs.search.brave.com/RhFF6WB9fgyfIWTAanVJqSkcRmxzgcnV8WR2alzv_k8/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9hZTAx/LmFsaWNkbi5jb20v/a2YvSFRCMUhRSW9Y/MmpzSzFSankxWGFx/Nnppc3BYYWovTWVu/LXMtUmVhbC1MZWF0/aGVyLUphY2tldC1N/ZW4tTW90b3JjeWNs/ZS1SZW1vdmFibGUt/SG9vZC13aW50ZXIt/Y29hdC1NZW4tV2Fy/bS1HZW51aW5lLUxl/YXRoZXItSmFja2V0/cy5qcGc', categoria:'pantalones'},
    {id:'6',title:'Handkershief',description:'this is a description',price:15, foto:'https://imgs.search.brave.com/BL1cfQ6KQdYwdVCACmCNHZtCOuWbt1xhc7GS9atVJSQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/ZWRpd2Vhci5jby51/ay9pbWFnZXMvc2hv/ZXMvcGVkaXdlYXIt/Y29sbGVjdGlvbi9w/ZWRpd2Vhci1jb2xs/ZWN0aW9uLWJsdWVf/aGFuZF9yb2xsZWRf/Y290dG9uX2hhbmRr/ZXJjaGllZi02MTkw/X2hkLmpwZw', categoria:'pantalones'},
    {id:'7',title:'Boots',description:'this is a description',price:16, foto:'https://imgs.search.brave.com/eQD1fH5azQb3FeXaCL_JUqnUVjlTiOEhhLvTgtW0MIg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvZmJm/MWM0OWEtODlhYi00/MDZjLTgyMGItMDdi/N2NmYWE2MDQxXzIu/NWQ4M2Q3YjMyYTdk/YWQ2M2RmNWM5MGQ1/ZTQwNmVkNDkuanBl/Zw', categoria:'pantalones'},
    {id:'8',title:'Sweater',description:'this is a description',price:16, foto:'https://imgs.search.brave.com/V-dcMCBU3r-8DLMcEd6ERRQg7MTg7x4friJF6v4kaLs/rs:fit:1155:1155:1/g:ce/aHR0cDovL2ltYWdl/LnNwb3J0c21hbnNn/dWlkZS5jb20vYWRp/bWdzL2wvMS8xNzMw/MzVyX3RzLmpwZw', categoria:'sueters'},
]

export const mFetch=()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{res(products)},2000)
    })    
}