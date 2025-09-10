// import React, { useCallback, useState } from 'react'

// const LikeButton = React.memo(({onLike})=>{
//   console.log("LikeButton re-rendered");
//   return <button onClick={onLike}>Click Kro Bhayiea</button>

// })
// export default function App() {
//   const [likes, setLikes] = useState(0);
//   const [text, setText] = useState('');

//   const handleLike = useCallback(()=>{
//     setLikes((prev)=>prev+1);
//   },[])  
//   return (
//     <div>
//       <h1>My Blog</h1>
//       <p>{likes}</p>
//       <LikeButton onLike={handleLike}/>
//       <input type="text" value={text} onChange={(e)=> setText(e.target.value)} className='border p-1 ml-2' />
//     </div>
//   )
// }



// import React, { useMemo, useState } from 'react'

// function App() {
//   const [search, setSearch] = useState('');
//   const [count, setCount] = useState(0);

//   const products = [
//     { id: 1, name: "Mobile" },
//     { id: 2, name: "Laptop" },
//     { id: 3, name: "Headphones" },
//     { id: 4, name: "Shoes" },
//     { id: 5, name: "Clothes" }
//   ];
//   const filteredProducts = useMemo(() => {
//     console.log("filter products...");
//     return products.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()));
//   }, [search, products]);
//   return (
//     <div className='p-4'>
//       <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
//       <ul>
//         {filteredProducts.map((p)=>(
//           <li key={p.id}>{p.name}</li>
//         ))}

//         <button onClick={()=>setCount(count+1)}>Increasse Count. ({count})</button>
//       </ul>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Field, Formik, Form } from 'formik'

function App() {
    const formValues = {
        name: '',
        phone: '',
        password: '',
        gender: '',
        date: '',
        income: '',
        about: ''
    };
    const submitFormFn = (values) => {
        console.log(values);

    }
    //   return (
    //     <div>
    //       <Formik
    //         initialValues={{ 
    //           name: '', 
    //           phone: '', 
    //           password: '', 
    //           gender: '', 
    //           date: '', 
    //           income: '', 
    //           about: '' 
    //         }}
    //         onSubmit={(values) => {
    //           console.log(values);
    //         }}
    //       >
    //         {({ values }) => (
    //           <Form>
    //             <label>Name:</label>
    //             <Field name="name" type="text" />
    //             <br /><br />

    //             <label>Phone:</label>
    //             <Field name="phone" type="number" />
    //             <br /><br />

    //             <label>Password:</label>
    //             <Field name="password" type="password" />
    //             <br /><br />

    //             <label>Gender</label>
    //             <br />
    //             <label>Male:</label>
    //             <Field name="gender" value="male" type="radio" />
    //             <label>Female:</label>
    //             <Field name="gender" value="female" type="radio" />
    //             <label>Other:</label>
    //             <Field name="gender" value="other" type="radio" />
    //             <br /><br />

    //             <label>Date:</label>
    //             <Field name="date" type="date" />
    //             <br /><br />

    //             <label>Income:</label>
    //             <Field name="income" as="select">
    //               <option value="">Select income</option>
    //               <option value="0">Rs 0</option>
    //               <option value="1000">Rs 1000</option>
    //               <option value="10000">Rs 10000</option>
    //             </Field>
    //             <br /><br />

    //             <label>About:</label>
    //             <Field as="textarea" name="about" />
    //             <br /><br />

    //             <button type="submit">Submit</button>
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //   )
    // OR ----------------
    return (
        <div>
            <Formik
                initialValues={formValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <label>Name:</label>
                        <Field name="name" type="text" />
                        <br /><br />

                        <label>Phone:</label>
                        <Field name="phone" type="number" />
                        <br /><br />

                        <label>Password:</label>
                        <Field name="password" type="password" />
                        <br /><br />

                        <label>Gender</label>
                        <br />
                        <label>Male:</label>
                        <Field name="gender" value="male" type="radio" />
                        <label>Female:</label>
                        <Field name="gender" value="female" type="radio" />
                        <label>Other:</label>
                        <Field name="gender" value="other" type="radio" />
                        <br /><br />

                        <label>Date:</label>
                        <Field name="date" type="date" />
                        <br /><br />

                        <label>Income:</label>
                        <Field name="income" as="select">
                            <option value="">Select income</option>
                            <option value="0">Rs 0</option>
                            <option value="1000">Rs 1000</option>
                            <option value="10000">Rs 10000</option>
                        </Field>
                        <br /><br />

                        <label>About:</label>
                        <Field as="textarea" name="about" />
                        <br /><br />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default App



