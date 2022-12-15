import { useEffect, useState } from 'react'
import { getUserProfile } from '../../lib/api'


const ProfilePage = () => {


  const [userData, setUserData] = useState(null)


  useEffect(() => {
    const getData = async () => {
      const response = await getUserProfile()
      setUserData(response.data)
    }
    getData()
  }, [])


  if (!userData)
    return null
  return (
    <section>
      <div className="profile-column">
        <div className="profile-box">
          <h4 className="profile-title-username">
            Username: 
          </h4>
          <h6 className="profile-title-small">
            {userData.username}
          </h6>
        </div>
        <div className="profile-box">
          <h4 className="profile-title">
            Submitted Big Cats:
          </h4>
          <div>
            {userData.created_bigcats.map(bigcat => (
              <div className="profile-title-small" key="bigcat">
                <p key={bigcat.name}><strong>{bigcat.name}</strong></p>
                <br />
                <div className="profile-image">
                  <img className="" src={bigcat.image} width="320" height="360"></img>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default ProfilePage