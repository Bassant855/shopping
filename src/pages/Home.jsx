import { useEffect,useState } from "react"

import { Link } from "react-router-dom"
import Landing from "../components/Landing"

const Home = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllProducts()
        
    },[])
    const getAllProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setProducts(data)
        })
    }
    useEffect(() => {
        getAllCategory()
    },[])
    const getAllCategory = () => {
        fetch('https://fakestoreapi.com/products/categories')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setCategories(data)
        })
    }


  return (
    <div className='home'>
        <Landing/>
        <h1 className="main-heading my-5">Our Products</h1>

        <div className="list">
                {
                    categories.map((category) => {
                       return <Link to={`category/${category.value}`} key={category.id} 
                       className="btn btn-secondary btn-sm m-2">{category.value}</Link>
                    })
                }
           
        </div>
        <div className="card-container">
            

        {
            products.map((product) => {
                return (
                <div className="card " key={product.id} >
                    <img src={product.image}  className="card-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title.slice(0,60)}...</h5>
                        <p className="card-text">{product.description.slice(0,70)}...</p>
                        <Link to={`${product.id}`} className="btn btn-primary">See More</Link>
                    </div>
                </div>
                )
            })
        }

</div>


    </div>
  )
}


export default Home
