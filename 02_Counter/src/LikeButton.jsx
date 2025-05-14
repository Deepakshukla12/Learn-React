import {useState} from 'React';

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    let toggleLiked = () => {
        setIsLiked(!isLiked);
    }

    return(
        <p onClick={toggleLiked}>
            {isLiked ? (
                <i className="fa-solid fa-heart" style={{color:"red"}}></i>
            ) : (
                <i className="fa-regular fa-heart"></i>
            )}
        </p>

    );
  }
  
  export default LikeButton;
  