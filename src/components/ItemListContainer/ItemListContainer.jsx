// const ItemListContainer=({greeting})=>{
//     return(
//         <header className="bg-dark py-5">
//         <div className="container px-4 px-lg-5 my-5">
//         <div className="text-center text-white">
//             <h1 className="display-4 fw-bolder">
//                 {greeting}
//             </h1>
//             <p className="lead fw-normal text-white-50 mb-0">
//             Shop in style!!
//             </p>
//         </div>
//         </div>
//         </header>
//     )
// }
// export default ItemListContainer

const mFetch = () => {
    return new Promise((res,rej)=>{
        // res(setTimeout(0.03))
        // Array
        const miArray=[ id='12', 
                        namee='shirt',
                        description='shirt blue small',
                        stock='123']
        setTimeout(3).res(miArray)
    })
}


const ItemListContainer=({greeting})=>{
    mFetch()
    .then(resultado=>{
        return resultado*10
    })
    return(
        <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
                {greeting}
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
            Shop in style!!
            </p>
        </div>
        </div>
        </header>
    )
}
export default ItemListContainer