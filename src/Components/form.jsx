import React from "react";

const Form = () =>{

    const [formData, setFormData] = React.useState({
        nam : "",
        age: "",
        add: "",
        dep: "",
        isMarried: false,

    })
    const handelChange = (e) =>{
        // console.log(e.target.id)
        // console.log(e.target.value)
        const {id, value, checked, type} = e.target;
        setFormData({
            ...formData,
            [id]: type === "checkbox" ? checked :value
        });
    }
    const {nam,age,add,dep,sal,isMarried} = formData

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }

    return(
        <>
        <form onSubmit={handelSubmit}>
            <h1>Form</h1>
            <input type="text" 
            placeholder="Name"
            id="nam"
            onChange={handelChange}
            value={nam}
            />
            <br />
            <input type="Number" 
            placeholder="Age"
            id="age"
            onChange={handelChange}
            value={age}
            />
            <br />
            <input type="textarea" 
            placeholder="Address"
            id="add"
            onChange={handelChange}
            value= {add}
            />
            <br />
            <select name="Department" id="dep" onChange={handelChange} value={dep}>
                <option value="IT">IT</option>
                <option value="DATA">DATA</option>
                <option value="Development">Development</option>
            </select>
            <br />
            <input type="number" placeholder="Salary" id="sal" onChange={handelChange} value={sal}/>
            <br />
            <input type="checkbox" id="isMarried" onChange={handelChange} checked={isMarried}/>
            <label for="vehicle1">Martial Status</label><br />
            <input type="submit" value="SUBMIT"/>
        </form>
        <div>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>DEPARTMENT</th>
                    <th>SALARY</th>
                    <th>MARRIED</th>
                </tr>
                <tr>
                    <td>{formData.nam}</td>
                    <td>{age}</td>
                    <td>{add}</td>
                    <td>{dep}</td>
                    <td>{sal}</td>
                    <td>{isMarried}</td>
                </tr>
            </table>
        </div>
        </>
    );

}
export default Form