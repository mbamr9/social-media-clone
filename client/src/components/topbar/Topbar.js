import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Topbar = () => {
    const user = useContext(AuthContext).user;
    const PF  =  process.env.REACT_APP_PUBLIC_FOLDER;
    
    
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            <Link className="logo" to="/">Lamasocial</Link> 
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                 <SearchIcon className="serchbarIcon"/>
                   <input type="text" className="searchInput" placeholder="Search for freind , post or any video" />
                </div>
            </div>
            <div className="topbarRihgt">
                  <div className="topbarLinks">
                      <span className="topbarLink"> HomePage</span>
                      <span className="topbarLink"> Timeline</span>
                      
                  </div>
                  <div className="topbaricons">
                      <div className="topbarIconItem">
                          <PersonIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                      <div className="topbarIconItem">
                          <ChatIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                      <div className="topbarIconItem">
                          <NotificationsIcon/>
                          <span className="topbarIconebege">1</span>
                      </div>
                  </div>
                  <Link to={`/profile/${user.username}`}>
                  <img src={user.profilePicture ? PF+ user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
                  </Link>
            </div>
            
        </div>
    )
}

export default Topbar
