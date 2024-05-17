import React from 'react'
import './menu.css'
const data = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },]

const Menu = () => {
  return (
    <>
    <div  name="Menu" className='card'>
        <button className='break-btn'>Break Fast</button>
        <ul className='break-fast'>
            {
                data.map((each)=>{
                    return(
                        <li><img className='item' src={each.url} alt={each.id}/></li>
                    )
                    
                })
            }
        </ul>

        <div className='card'>
            <button className='break-btn'>Lunch</button>
            <ul className='break-fast'>
                {
                    data.map((each)=>{
                        return(
                            <li><img className='item' src={each.url} alt={each.id}/></li>
                        )
                    })
                }
            </ul>
        </div> 
        
    </div> 
    </>
  )
}

export default Menu
