import './RightSidebarCard.css'

const RightSidebarCard = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://cdn.tutsplus.com/cdn-cgi/image/width=600/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/45.jpg" alt="card-img" className="card-thumbnail" />
      </div>
      <div className="card-meta">
        <h4>Game Title</h4>
        <p>Genre</p>
        <span><i></i>Rating</span>
      </div>
    </div>
  )
}

export default RightSidebarCard