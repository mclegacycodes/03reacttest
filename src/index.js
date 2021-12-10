import React from 'react'
import reactDom from 'react-dom'


//css
import './index.css'

function BookList(){
    return (
        <section className='booklist'>
           {/* //call the section header */}
           <SectionHead/>
           <Books/>
        </section>
    )
}





const SectionHead=()=>{
    return (
    <div className='sectionHead'>
        <h3 className='h2'>Inspiration for your <br />next trip</h3>
        <span>
            <input type="button" value="<" />
            <input type="button" value=">" />
        </span>
            
    </div>
    )
}

const Books=()=>{
return (
    <section className='books'>
     <Book/>
      <Book/>
       <Book/>
       
       </section>
)
}

const Book =()=>{
return <div className='book'>
    <img src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320" alt="a location in capecoast" />
    <span>
    <h3>CapeCoast</h3>
    <p>5 kilometers away</p>
    </span>
</div>
}

reactDom.render(<BookList/>, document.getElementById('root'))