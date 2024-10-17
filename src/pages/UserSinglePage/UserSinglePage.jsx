import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnimationPageProfile from "../../components/AnimationPage/AnimationPageProfile";

export default function UserSinglePage({ dispatch, usersData }) {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userData = usersData.find((user) => user.cell == id);
    if (userData) {
      setUser(userData);
    }
    console.log(user);
  }, [id, usersData]);

  const handleBack = () => {
    navigate('/users');
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'userUpdate',
      payload: [
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,
        e.target[4].value, 
        e.target[5].value,
        e.target[6].value,
        e.target[7].value 
      ],
      id: user.cell,
    });
    navigate('/users');
  };

  return (
    <AnimationPageProfile>
    <div style={{display:"flex", justifyContent:"center"}}>
    <div className="product_profile">
      {console.log(user)}
      <img src={user.picture?.large} alt="User Image" />
      <form onSubmit={handleSubmit} className='product_form'>
          <label>User Name:</label>
        <div>
          <input type="text" defaultValue={user.name?.title} />
          <input type="text" defaultValue={user.name?.first} />
          <input type="text" defaultValue={user.name?.last} />
        </div>
        <label>Age:</label>
        <input type="text" defaultValue={user.dob?.age} />
        <label>Gender:</label>
        <input type="text" defaultValue={user.gender}/>
        <label>Email:</label>
        <input type="text" defaultValue={user.email}/>
        <label>Phone:</label>
        <input type="text" defaultValue={user.phone}/>
        <label>Country:</label>
        <input type="text" defaultValue={user.location?.country}/>
        <div>
        <button type='submit' className='saveButton'>Save</button>
        <button className='backButton' onClick={handleBack} type='button'>Back</button>
        </div>
      </form>
    </div>
    </div>
    </AnimationPageProfile>
  );
}
