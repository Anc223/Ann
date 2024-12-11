import React, { useState } from 'react'
import './Createblog.css';
const Createblog=()=> {
  const[title,setTitle]=useState("");

  return (
    <div>
        <div className='crp-page'>
          <form className='crp-main'>
            <div className='crp-tit'><h1>Create a new post</h1></div>
            <div className='crp-para'><p>This is the title that will displayed at the top of your blog.</p></div>
            <div className='crp-frm'>
              <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'></input>
            </div>
            <div className='crp-len'>{title.length}/100</div><br/><br/>
            <div className='com-bt'>
            <button className='crp-bt1'>SKIP</button>
            <button className='crp-bt2'>CANCEL</button>
            <button className='crp-bt3'>NEXT</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Createblog