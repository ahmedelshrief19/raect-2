import React, { useState } from 'react';

function ProductInfo({ products, onDelete }) {
  return (
    <ul className="product-list">
      {products.map(product => (
        <li key={product.id} className="product-item">
          <span className="product-name">{product.name}</span>
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="delete-btn" onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple', price: 1.5 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 1.2 }
  ]);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="container">
      <h2 className="title">Products List</h2>
      <ProductInfo products={products} onDelete={handleDelete} />
    </div>
  );
}

function App() {
  return (
    <>
      <style>{`
        .container {
          max-width: 400px;
          margin: 40px auto;
          background: #f9f9f9;
          padding: 32px 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.09);
        }
        .title {
          text-align: center;
          color: #3d5afe;
          margin-bottom: 24px;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .product-list {
          list-style: none;
          padding: 0;
        }
        .product-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border-radius: 8px;
          margin-bottom: 14px;
          padding: 14px 16px;
          box-shadow: 0 1px 3px rgba(60,60,60,0.05);
          transition: box-shadow 0.2s;
          transition: ease in out 0.9s;
          
        }
        .product-item:hover {
          box-shadow: 0 4px 12px rgba(61,90,254,0.08);
          background-color: #000000;
          color: white;
          transform:scale(1.1);
        }
        .product-name {
          font-weight: 500;
          color: #ff5252;
          font-size: 1.05em;
        }
        .product-price {
          color: #388e3c;
          font-size: 1em;
          margin-right: 24px;
        }
        .delete-btn {
          background: #ff5252;
          color: white;
          border: none;
          padding: 6px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: ease in out 0.2s;
        }
        .delete-btn:hover {
          background: #ff1744;
        }
      `}</style>
      <Products />
    </>
  );
}

export default App;