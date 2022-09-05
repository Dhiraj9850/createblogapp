import React, { useState, useEffect } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import '../Compo-css/Addlist.css';


const getLocalItem =()=>{
    let data = localStorage.getItem('data')
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const Addblog = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [blogType, setBlogType] = useState("");
    const [task, setTask] = useState(getLocalItem());

   



    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changeDesc = (e) => {
        setDesc(e.target.value);
    }
    const changeBlog = (e) => {
        setBlogType(e.target.value);
    }

  


    const removeTask =(a)=>{
        const finalData = task.filter((curEle,index)=>{
            return index !== a;
        })
        setTask(finalData);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(title, desc, blogType);
        alert("Your Blog is added successfully")
        const data = { title, desc, blogType }
        if (title && desc && blogType) {
            setTask((ls) => [...ls, data])
            setTitle("");
            setDesc("");
            setBlogType("");

        }


    }

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(task))

    }, [task])




    return (
        <div>
            <div className="container">
                <form onSubmit={handleOnSubmit}>

                    <div className="addblog">
                        <h3 className="Header">Create Your Blog Here.....</h3>
                        <div className="note">
                            <div className="alert alert-info" role="alert">
                                <InfoCircleOutlined /> <span>Note:</span>You can create a Blog on topics:<span>Tech,Entertainment & community</span>
                            </div>

                        </div>
                        <div className="blog-category">
                            <div className="blogname">

                                <input type="text" className="name" name="title" id="name" value={title} onChange={changeTitle} placeholder=" Enter Blog name" />

                            </div>
                            <div className="blogtype">

                                <input type="text" name="blogtype" className="blogtypename" id="name" value={blogType} onChange={changeBlog} placeholder="Enter Blog Type" />

                            </div>



                        </div>

                        <div className="description">

                            <textarea name="desc" id="desc" cols="27" rows="3" placeholder="Something About Your Blog........" value={desc}
                                onChange={changeDesc}></textarea>

                        </div>


                        <button className="btn btn-sm btn-primary" id="add-btn">+ Add New Blog </button>
                    </div>

                </form>
            </div>
            <hr />
            <div className="blogs">
                <h4>Blog List</h4>

            </div>
            <div className="row">
                {
                    task.map((a,index) => {
                        return (
                            <>
                                <div className="list-container">
                                    <div className="blog-attributes">
                                        <div className="title">
                                            <h5>Blog title:</h5>
                                            {a.title}
                                        </div>
                                        <div className="desc">
                                            <h5>Blog Description:</h5>
                                            {a.desc}
                                        </div>
                                        <div className="bloglist">
                                            <h5>Blog type:</h5>
                                            {a.blogType}
                                        </div>


                                    </div>
                                    <div className="delete-icon">
                                        <i className="bi bi-trash" onClick={()=>removeTask(index)}></i>                   
                                    </div>


                                </div>



                            </>
                        )
                    })
                }
            </div>

        </div>



    )

}

export default Addblog