
import React, { useState, useEffect } from 'react';





export default function Assignment() {

    const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/data.json');
        const result = await response.json();
        setProfiles(result);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []); 

  return (
    <div>
            {profiles.map((profiles)=>(
        <div key={profiles.id}>
       <nav className='navbar'>
        <div className="leftnav">
        <img src="/ttt.svg" alt="profile" className='logo'/>
        <span className='divider'>|</span>
        <span className='sidename'>STORIES</span></div>
        <div className="rightnav">
        <span className='navitem'>Courses</span>
        </div>
       </nav> <br />
        <div className="bgimage">
          <img src="/pexels-tima-miroshnichenko-7168597.jpg" alt="coverpic" id='coverpic'/>
          
        </div> <br />
        <img src={profiles.profilepic} alt="profilepic" id='profilepic'/>
        <div className="profile">
          <div className="name">
          
          <h4 className='username'>{profiles.name}</h4></div>
            
          <div className="follow">
          <div className="follow-stats">
              <h1>{profiles.followers}</h1>
              <h2>Followers</h2>
          </div>

           <div className="follow-stats">
              <h1>{profiles.following}</h1>
              <h2>Following</h2>
           </div>
          </div>
          </div>   <br />
          <div className="bio">
            
            <p className='bio-content'>Co-founder & CEO at Terribly Tiny Tales </p>
            <a href={profiles.link} className='bio-link'>{profiles.link}</a>
          </div> <br />


          <div className="stats">
            <div className="stats-item">
              <img src="/star.png" alt="star" className='stats-icon'/>
              <h4>{profiles.comments}</h4>
            </div>
            <div className="stats-item">
            <img src="/thumbsup.png" alt="likes" className='stats-icon' />
              <h4>{profiles.shares}</h4>
            </div>
            <div className="stats-item">
            <img src="/eye.png" alt="eye" className='stats-icon' />
              <h4>{profiles.views}</h4>
            </div>
            <div className="stats-item">
            <img src="/love.png" alt="love" className='stats-icon' />
              <h4>{profiles.likes}</h4>
            </div>
          </div> <br />

            


          <div className="posts">
          <h2 className='postcount'>134 Posts</h2>
            <div className="post1">
              <div className="head">
              <div><h2>A Changing World Order</h2> </div>
              <div><img src="/thumbsup.png" alt="love" className='stats-icon1' /> </div>
              </div>
                <p>The world is changing at a feverish pace. Friends,colleagues and everyone engaged in knowledgework are beginning to sense this, including .</p>
                <div className='footer'>
                  <div className="from"><span className='span1'>musing</span> <span className='span2'>by anujgosalia</span></div>
                  <div className="time">August2 . 2mins Read . 102 Views</div>
                </div>
              
            </div>
            <hr />
            <div className="post2">
            <div className="post1">
              <div className="head">
              <div><h2>India VS Australia</h2> </div>
              <div><img src="/thumbsup.png" alt="love" className='stats-icon1' /> </div>
              </div>
                <p>Think about it - this cricket series was akin to therapy. <br /> <br />
                 Laying our childhood trauma up top, working withit slowly and surely over two m...</p>
                <div className='footer'>
                <div className="from"><span className='span1'>thought</span> <span className='span2'>by anujgosalia</span></div>
                  <div className="time">January 21 . 1 min Read . 156 Views</div>
                </div>
              
            </div>
              
              </div>
              <hr />
              <div className="post3">
              <div className="post1">
              <div className="head">
              <div><h2>Write To Build</h2> </div>
              <div><img src="/thumbsup.png" alt="love" className='stats-icon1' /> </div>
              </div>
                <p> Writing is the first step to create: <br /><br />
                <li>Stories</li>
                <li>Products</li>
                <li>Companies</li>
                </p> 
                <div className='footer'>
                <div className="from"><span className='span1'>thought</span> <span className='span2'>by anujgosalia</span></div>
                  <div className="time">Nov 18 . 1min Read . 228Views</div>
                </div>
              
            </div>
              
              </div>
              <hr />
          </div>
          </div>

            ))}
    </div>
  )
}
