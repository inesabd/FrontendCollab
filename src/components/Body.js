import React from "react";
import PostCreator from "./PostCreator";
import './Formulaire.css';
import Feed from "./Feed";

const Body = () => {
    const user = {
        photo: "https://via.placeholder.com/50",
        name: "John Doe",
        position: "Software Engineer",
        content: "Just posted a new article!",
        tags: ["React", "JavaScript", "WebDev"]
      };
  return (
    <div>
      <PostCreator />
      <Feed user={user} />
v    </div>
  );
}

export default Body;
