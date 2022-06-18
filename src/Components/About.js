import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <>
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className="col-md-6">
                    <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                    <p className='mb-4'>shdkjhdkjashdkjhaskjdhkasjdhkjadhk
                    jsadhadjkasdhkjhdkjhaKSDJHKJLSDHKJkjsahdkjshdkjhdsfkjh
                    kjdshfkjshfkjsdhfkjdshfkjdshfkjdshfkjdhsfkjhsdkfjhdskj
                    fhdskjfhkjsdhfkjdshfkjdshfkjdshfkjdshfkjdshfjkdshfkjds
                    hfkjdshfkjsdfhkjsdhfkjdsfhkjdshfkjdshfksjdfhkjsdhasdsa
                    shdkjhdkjashdkjhaskjdhkasjdhkjadhkdsadasdasdasdaasdas
                    jsadhadjkasdhkjhdkjhaKSDJHKJLSDHKJkjsahdkjshdkjhdsfkjh
                    kjdshfkjshfkjsdhfkjdshfkjdshfkjdshfkjdhsfkjhsdkfjhdskj
                    fhdskjfhkjsdhfkjdshfkjdshfkjdshfkjdshfkjdshfjkdshfkjds
                    hfkjdshfkjsdfhkjsdhfkjdsfhkjdshfkjdshfksjdfhkjsdhasda
                    shdkjhdkjashdkjhaskjdhkasjdhkjadhksdwqdadasdasdasdasd
                    jsadhadjkasdhkjhdkjhaKSDJHKJLSDHKJkjsahdkjshdkjhdsfkjh
                    kjdshfkjshfkjsdhfkjdshfkjdshfkjdshfkjdhsfkjhsdkfjhdskj
                    fhdskjfhkjsdhfkjdshfkjdshfkjdshfkjdshfkjdshfjkdshfkjds
                    hfkjdshfkjsdfhkjsdhfkjdsfhkjdshfkjdshfksjdfhkjsdh</p>
                    <NavLink className="btn btn-outline-primary px-3" to={"/contact"}>Contact Us</NavLink>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src='assets/phone.jpg' alt="image" width="400px" height="400px"/>
                </div>
            </div>
        </div>
    </>
  )
}
