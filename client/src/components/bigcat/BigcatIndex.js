import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BigcatCard from './BigcatCard'
import { getAllBigcats } from '../../lib/api'

const BigcatIndex = () => {

  const [bigcats, setBigcats] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      const response = await getAllBigcats(id)
      setBigcats(response.data)
    }
    getData()
  },[]) 

  return (
    <div className="section-index">
      <div className="columns-index">
        { bigcats.length > 0 && bigcats.map(bigcat => <BigcatCard key={bigcat.id} {...bigcat} />
        ) }
      </div>
    </div>
  )
  
}

export default BigcatIndex