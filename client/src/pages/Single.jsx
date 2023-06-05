import React from 'react'
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from '../components/Mene';

const Single = () => {
  return (
    <div>
      <div className="single">
        <div className="content">
          <img
            src="https://images.pexels.com/photos/2928027/pexels-photo-2928027.jpeg?cs=srgb&w=2000"
            alt=""
          />
          <div className="user">
            <img
              src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
            />
            <div className="info">
              <span>Mari</span>
              <p>Posted 3 days ago</p>
            </div>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis culpa
            libero laboriosam repellat facere voluptate ipsam molestiae corporis
            assumenda rerum.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            minima nulla iusto consequatur id beatae voluptates autem, dolorem
            voluptate cum. Doloribus id dignissimos illum. Corrupti minus iure
            doloribus eius doloremque, sequi unde nihil, ullam, praesentium
            beatae quibusdam cumque odio officiis iste ex non adipisci mollitia
            sapiente voluptate! Cum nesciunt recusandae sapiente placeat quae,
            nihil quo est quos! Nostrum dolorem id voluptates optio odit
            voluptas cumque! Cum, possimus omnis. Iure voluptatibus magni
            exercitationem repudiandae dolor veniam consectetur similique
            explicabo natus accusantium!
          </p>
        </div>

        <Menu className="menu" />
      </div>
    </div>
  );
}
export default Single
