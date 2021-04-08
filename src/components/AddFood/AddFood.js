import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddFood = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const foodData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageURL: imageURL
    };
    const url = `http://localhost:5050/addFood`;
    console.log(foodData);
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(foodData)
    })
    .then(res => console.log('server side response', res))
  };

  const handleImageUpload = food => {
    console.log(food.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '0bae7926094ece31ae08753fbfcc8077');
    imageData.append('image', food.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  return (
    <div className="container">
      <div className="m-5">
        <h1>
          Upload your own food <span class="badge badge-secondary">New</span>
        </h1>
      </div>
      


    <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Food Name</label>
            <input name="name" className="form-control" id="inputEmail4" defaultValue="Tomato" ref={register} />
          </div>

          <div className="form-group col-md-6">
            <label for="inputEmail4">Weight</label>
            <input weight="weight" className="form-control" id="inputEmail4" defaultValue="300" ref={register} />
          </div>

          <div className="form-group col-md-6">
            <label for="inputEmail4">Price</label>
            <input price="price" className="form-control" id="inputEmail4" defaultValue="48" ref={register} />
          </div>

          <div className="form-group col-md-6 pt-3 pl-5">
            <label for="inputPassword4">FooD Image</label><br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
          </div>
        </div>
        <button type="submit" className="btn btn-success">Save</button>
    </form>



      {/* <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" defaultValue="Food Name" ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form> */}
    </div>
  );
};

export default AddFood;