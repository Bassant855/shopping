import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const CategoryPage = () => {
    const [products, setProducts] = useState([])

    const {categoryPage} = useParams()

    console.log(categoryPage);

    useEffect(() => {
        getAllProducts()
        
    },[])
    const getAllProducts = () => {
        fetch('http://localhost:3000/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProducts(data.filter((products) => {
                return products.category === categoryPage
            }))
        })
    }
  return (
    <div className='categoryPage' >
         {
            products.map((product) => {
                return (
                <div className="card " key={product.id} >
                    <img src={product.image}  className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title.slice(0,60)}...</h5>
                        <p className="card-text">{product.description.slice(0,70)}...</p>
                        <Link to={`/${product.id}`} className="btn btn-primary">See More</Link>
                    </div>
                </div>
                )
            })
        }
    </div>
  )
}



export default CategoryPage