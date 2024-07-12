import { user } from "../util/user";

import "./Card.css";

import Avatar from "../assets/avatar-jessica.jpeg";

export default function Card() {
  return (
    <div className="card">
      <img src={Avatar} alt="avatar img" />
      <h2>{user.name || "John Doe"}</h2>
      <h3>{user.location}</h3>

      <p>{user.description}</p>

      <ul>
        {user.links.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </div>
  );
}
