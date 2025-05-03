import './Product.css';
import Price from './Price';

function Product({title, idx}) {
    const oldPrice = ["12,000", "11,000", "1,700", "900"];
    const newPrice = ["9,000", "8,000", "1,500", "700"];
    const description = [
        ["Wireless Performance Mouse", "Five Programmable Buttons"], 
        ["Stylus for iPad", "Goof Performance"], 
        ["Wired Headphone","designed for your use"], 
        ["Wireless Speaker", "Bluetooth Speaker"]];
    return (
        <div className="product">
            <p>{title}</p>
            <li>{description[idx][0]}</li>
            <li>{description[idx][1]}</li>
            <br />
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;