import React from "react";
import './HomeComponent.scss';
import PostStatus from "../common/PostUpdate";
import Leftside from "../common/Leftside/Leftside";
import Rightside from "../common/Rightside/Rightside";

export default function HomeComponent({ currentUser }) {
  return (
    <div className="Container">
      <div className="Layout">
        <Leftside/>
        <Rightside/>
        <PostStatus currentUser={currentUser} />
      </div>
    </div>

  );
}
