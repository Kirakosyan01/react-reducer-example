import React from "react";
import "./UsersPage.css";
import { MdDeleteForever } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import AnimationPageUsers from '../../components/AnimationPage/AnimationPageUsers'
import { Link } from "react-router-dom";

export default function UsersPage({ usersData, dispatch }) {
  return (
    <AnimationPageUsers>
    <section className="users_section">
    <div className="filterDiv">
        <button onClick={() => dispatch({type: "sortUsersByPrice"})} className="priceFilter">By Age</button>
    </div>
      {usersData.map((user) => {
        return (
          <div key={user.cell} className="user_div">
            <button onClick={() => dispatch({type: 'deleteUser', payload: user.cell})} className="deleteBtn">
              <MdDeleteForever className="deleteIcon" />
            </button>
            <img src={user.picture.large} alt="User image" className="imgBx" />
            <h3>
              {user.name.title} {user.name.first} {user.name.last}
            </h3>
            <p>
              <span>Age: </span>
              {user.dob.age}
            </p>
            <p>
              <span>Gender: </span>
              {user.gender}
            </p>
            <p>
              <span>Email: </span>
              {user.email}
            </p>
            <p>
              <span>Phone: </span>
              {user.phone}
            </p>
            <p>
              <span>Location: </span>
              {user.location.country}
            </p>
            <Link to={`${user.cell}`} className="seeMoreLink">Update Data <CiCircleMore /></Link>
          </div>
        );
      })}
    </section>
    </AnimationPageUsers>
  );
}
