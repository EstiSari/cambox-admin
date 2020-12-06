import React,{useState,useEffect} from "react";
import { database } from "./firebase/firebase";

import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form
  
} from "shards-react";


const ProductsForm = (props) =>{
  const initialFileValues = {
          name: '',
          price: '',
          product_date: '',
          stock: '',
          img:'',
          img_token:'',
          discount:'',
          // key:'',
          desc:''

      }
  
      var [values,setValues] = useState(initialFileValues)
      const [img, setImage] = useState(null);
      const [url, setUrl] = useState("");
      const [progress, setProgress] = useState[0];

      //editform
  useEffect(()=>{
      if(props.currentId == '')
          setValues({
              ...initialFileValues
          })
      else
          setValues({
              ...props.contactObject
          })
  },[props.currentId, props.contactObject])
  
  const handleInputChange = e =>{
      var {name,value}= e.target
      setValues(
          {
              ...values,
              [name]: value
          }
      )
      if(e.target.files[0]) {
        setImage(e.target.files[0]);
      }
  }    
  
  const handleFormSubmit = e =>{
      e.preventDefault();
      props.addOrEdit(values)

      const uploadTask = database.ref(`item_image/${img.name}`).put(img);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          database.ref("item_image")
          .child(img.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url)
          });
        }
      );
  }

  console.log("image: ", img);

  return(
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Product Name" 
                      name="name" value={values.name}                        
                      onChange = {handleInputChange}/>
                     
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="Price" 
                      name="price" value={values.price}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <progress value={progress} max="100"/>
                <br/>
                <br/>
                <input className="form-control"  type="file"
                      placeholder="image" 
                      name="image" value={values.img}
                      onChange = {handleInputChange}/>
                       <br />
                      {url}
                      <br />
                      <img src={url || "http://via.placeholder.com/100"} alt="firebase-image" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="stock" 
                      name="stock" value={values.stock}
                      onChange = {handleInputChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                        placeholder="10-11-2020" 
                        name="product_date" value={values.product_date}
                        onChange = {handleInputChange}/>
              </div>
            </div>
            {/* <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      name="key" value={values.key}
                      onChange = {handleInputChange}/>
              </div>
            </div> */}
            <div className="form-row">
              <div className="form-group input-group">
                <input className="form-control" 
                      placeholder="description" 
                      name="desc" value={values.desc}
                      onChange = {handleInputChange}/>
                </div>
              </div>
            <div className="form-row">
                <div className="form-group">
                    <input type="submit" value={props.currentId==''?"Save":"Update"} className="btn btn-primary btn-block"/>
                </div>
            </div>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>

    

  )
}
  
export default ProductsForm;
