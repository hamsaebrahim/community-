
import React from "react"
import girl from "../src/5086015.jpg"
export default function Form(){


   const [inputValue , setinputValue] = React.useState({
    firstname:"" , mail :"" , pass:"" , passwordconfirm : "", comment : "" , isFreindly: false , gender :"" , genra :"" 
   })
   const [formError , setformError] = React.useState({})
   const [isvalidation , setisvalidation] = React.useState(false)
    const handleChange = (e)=>{
        const {name , value , type , checked} = e.target
        setinputValue((prev => {
            return {
                ...prev,
               [name] : type === "checkbox" ? checked : value
              
            }
        }))
    }
   
    const  handlevalidation = () =>{
        const err = {}

        if (inputValue.firstname === ""){
            err.name = "name is required"
        }
        if (inputValue.mail === ""){
            err.mail = "e-mail is required"
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(inputValue.mail) ){
                err.mail = "e-mail is invalid"
            }
        }
        
        if(inputValue.pass ===! inputValue.passwordconfirm){
            err.pass = "password doesnot match"
          }
        

          if (inputValue.genra === ""){
            err.genra = "choose genra"
        }

        setformError({...err})
        if (Object.keys(err).length < 1){
            setisvalidation(true)
         }
         console.log(Object.keys(err))
        return false

    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
      
         handlevalidation()
      
       
    }
    return (
        <>

        <form onSubmit={handleSubmit}>
            <div className="inputContainer">
            <div>
            <label> name: <br/>
                <input
                type="text"
                name="firstname"
                value={inputValue.firstname}  
                onChange={handleChange}
                />
            </label>
            <div className="err">{formError.name}</div>
            </div>

            <div>
            <label> password: <br/>
                <input
                type="password"
                name="pass"
                value={inputValue.pass}  
                onChange={handleChange}
                />
            </label>
            </div>
            <div>
            <label> confirm password: <br/>
                <input
                type="password"
                name="passwordconfirm"
                value={inputValue.passwordconfirm}  
                onChange={handleChange}
                />
            </label>
            <div className="err">{formError.pass}</div>

            </div>
            <div>
            <label> mail: <br/>
                <input
                type="mail"
                name="mail"
                value={inputValue.mail}  
                onChange={handleChange}
                />
            </label>
            <div className="err">{formError.mail}</div>

            </div>
            <div>
            <label> your comment: <br/>
                <textarea
                name="comment"
                value={inputValue.comment}  
                onChange={handleChange}
                />
            </label>
            </div>
            <div>
                <input 
                id="checkbox"
                type="checkbox" 
                name="isFreindly"
                checked = {inputValue.isFreindly}
                onChange={handleChange}
                />
                <label htmlFor="checkbox">Are you freindly?</label>
            </div>
            <div>
                <fieldset>
                    <legend>Are you?</legend>
                <label>
                    <input
                     type="radio"
                     name="gender"
                     value="girl"
                     checked = {inputValue.gender === "girl"}
                     onChange={handleChange}
                     />
                    girl
                </label>
                <label>
                    <input
                     type="radio" 
                     name="gender"
                     value="boy"
                     checked = {inputValue.gender === "boy"}
                     onChange={handleChange}
                     />
                    boy
                </label>
                </fieldset>
            </div>

            <div>
                <select
                value={inputValue.genra}
                onChange ={handleChange}
                name = "genra"
                >

                    <option value="" >choose genra</option>
                    <option value="rock" key="rock">rock</option>
                    <option value="metal" key="matal">metal</option>
                    <option value="blues" key="blues">blues</option>
                    <option value="jazz" key="jazz">jazz</option>
                </select>
                <div className="err">{formError.genra}</div>
            </div>
                <button >Submit</button>

                <h1>{isvalidation ? "submitted !" : ""}</h1>
            </div>
            <img src={girl} alt="" />

            
        </form>
        </>
    )
}