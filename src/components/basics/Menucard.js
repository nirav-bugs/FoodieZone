import React from 'react'

const Menucard = ({MenuData}) => {
    // console.log(MenuData)
  return (
    <>
       <section className='main-card--cointainer'>
   {MenuData.map((curElem)=>{
    const {id, name ,category ,image,description}=curElem;
    return (
        <>
        <div className="card-container" key={curElem.id}>
        <div className="card">
          <div className="card-body">
            <span className='card-n umber card-circle subtle'>{id}</span>
            <span className='card-author subtle'>{name}</span>
            <h2 className='card-title'>{name}</h2>
            <span className='card-description subtle'>{description}</span>
            <div className="card-read">Read</div>
            </div>
            <img src={image } alt="images" className='card-media'/>
            <span className='card-tag subtle'>Order now</span>
        </div>
      </div>
      </>
    )
})}
</section>
    
    </>
  )
}

export default Menucard