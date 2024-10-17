import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductSinglePage.css';
import AnimatedPageProfile from '../../components/AnimationPage/AnimationPageProfile';

export default function ProductSinglePage({dispatch, productsData}) {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    
    const productData = productsData.find((product) => product.id == id);
    if (productData) {
      setProduct(productData);
    }
  }, [id, productsData]);

  const handleBack = () => {
    navigate('/products');
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'productUpdate',
      payload: [
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
      ],
      id: product.id,
    });
    navigate('/products');
  };

  return (
    <AnimatedPageProfile>
      <div style={{display:"flex", justifyContent:"center"}}>
    <div className='product_profile'>
      <img src={product.image} alt="Product Image" />
      <form onSubmit={handleSubmit} className='product_form'>
        <label htmlFor="title">Product Name:</label>
        <input type="text" name='title' defaultValue={product.title}/>
        <label htmlFor="category">Category:</label>
        <input type="text" name='category' defaultValue={product.category}/>
        <label htmlFor="price">Price:</label>
        <input type="text" name='price' defaultValue={product.price}/>
        <label htmlFor="rating">Rating:</label>
        <input type="text" name='rating' defaultValue={product.rating?.rate}/>
        <div>
        <button type='submit' className='saveButton'>Save</button>
        <button className='backButton' onClick={handleBack} type='button'>Back</button>
        </div>
      </form>
    </div>
      </div>
    </AnimatedPageProfile>
  )
}
