import React from 'react';
import image from "../../assets/portfolio_pic_bg_removed.png"
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const Banner = () => {
    return (
       <div className="hero  ">
  <div className="hero-content flex-col md:flex-row-reverse">
    <img
      src={image}
      className="w-1/2 " />
    <div className='w-1/2'>
      <h1 className="text-4xl font-bold">Hey! I am Rabiya Rumi </h1>
      <p className="py-6">
        I am a frontend Web Developer. I make buautifull Website with animation and eye pleased colour
      </p>
      <div className='flex gap-4 pb-4'>
        <Link to={"https://www.facebook.com/rabeya.rumi.285936/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"}><FaFacebookSquare size={"30"}/></Link>
        <Link to={"https://www.facebook.com/rabeya.rumi.285936/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"}><FaSquareGithub size={"30"}/></Link>
        <Link to={"https://www.facebook.com/rabeya.rumi.285936/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"}><FaLinkedin size={"30"}/></Link>
      </div>
      <button className="btn btn-primary">Download Resume</button>
    </div>
  </div>
</div>
    );
};

export default Banner;