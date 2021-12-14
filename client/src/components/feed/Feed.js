import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import {Posts} from "../../dummyData";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map(post=>{
                    return   <Post key ={post.id} post={post} />

                })}
                
            </div>
        </div>
    )
}

export default Feed
