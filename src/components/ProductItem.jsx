
const ProductItem = ({product,onDel}) => {
    
  return (
    <>
      <div className="flex-xxl-column gap-5 align-items-center mb-5 border p-4">
        <img className="img-product" src={product.image} alt=""/>
        <h5 className="mt-2">{product.title}</h5>
        <p><strong>{product.price} usd</strong></p>
        <button className="btn btn-warning" onClick={()=> onDel(product.id)}>Delete</button>
      </div>
      {
         
      }
    </>
  )
}

export default ProductItem