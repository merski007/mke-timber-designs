import {useState} from 'react'
import Select from 'react-select'
import ProductSelect from './ProductSelect'

const PiklerForm = ({products, onAdd}) => {
    const [product, setProduct] = useState(null)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [comments, setComments] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        // if(!email){
        //     alert('Please fill out form')
        //     return
        // }

        onAdd({product,email,name,phone,comments})

        setProduct(null)
        setEmail('')
        setName('')
        setPhone('')
        setComments('')
    }

    const handleChange = obj =>{
        setProduct(obj)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Pikler Triangle, Climbing Board, and Arch Order Form</h2>
                <p>After you fill out this order request, we will contact you via email to go over details and availability before the order is completed.</p>
                <p>If you have any questions regarding our products (size, material, etc...) please visit our FAQ section on the MKE Timber Designs LLC Facebook page. https://www.facebook.com/mketimberdesigns</p>
                <p>If you have any other questions, or concerns, please send us a message via Facebook or email us at mketimberdesigns@gmail.com</p>

                <div className="form-inputs">
                    <label htmlFor="productDropdown" className="form-label">
                        What would you like to order?
                    </label>
                    <Select id="productDropdown" name="productDropdown" value={product} onChange={handleChange} options={
                        products
                            .filter(product => product.category === 'Pikler')
                            .sort((a, b) => (a.sku > b.sku) ? 1 : -1)} />
                </div>

                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="enter your email" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your full name" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="phone" className="form-label">
                        Phone number
                    </label>
                    <input id="phone" type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="enter your phone number" />
                </div>

                <div className="form-inputs">
                    <label htmlFor="comments" className="form-label">
                        Additional comments
                    </label>
                    <input id="comments" type="text" name="comments" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="enter any additional comments on your order" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PiklerForm
