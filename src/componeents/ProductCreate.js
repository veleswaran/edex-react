import { useState } from "react"

export default function ProductCreate() {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(product);
        setProducts([...products, product])
        setProduct({
            name: "",
            price: '',
            quantity: ""
        })
    }

    function handleClick(name) {
        setProducts(products.filter((val) => val.name !== name))
    }
    return (
        <>
            <div className="container">
                <h1>Product create form</h1>
                <form action="/action_page.php" onSubmit={handleSubmit}>
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" onChange={handleChange} value={product.name} />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="price" class="form-label">Price:</label>
                        <input type="number" class="form-control" id="price" placeholder="Enter price" name="price" onChange={handleChange} value={product.price} />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="quantity" class="form-label">Quantity:</label>
                        <input type="number" class="form-control" id="quantity" placeholder="Enter quantity" name="quantity" onChange={handleChange} value={product.quantity} />
                    </div>

                    <div class="form-check mb-3">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="container mt-3">
                <h2>Striped Rows</h2>
                <p>The .table-striped class adds zebra-stripes to a table:</p>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ?
                            products.map((val) =>
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>
                                    <td>{val.quantity}</td>
                                    <td>
                                        <button onClick={() => handleClick(val.name)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ) :
                            <p>No data found</p>
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}