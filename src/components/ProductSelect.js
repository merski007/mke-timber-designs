import Select from 'react-select'

const ProductSelect = ({products}) => {
    return (
        <Select id="productDropdown" name="productDropdown" options={
            products
                .filter(product => product.category === 'Pikler')
                .sort((a, b) => (a.sku > b.sku) ? 1 : -1)} />
    )
}

export default ProductSelect
