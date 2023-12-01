import './RightSidebar.css'
import RightSidebarCard from './RightSidebarCard/RightSidebarCard'

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <h2>Latest Top Rated</h2>
      <RightSidebarCard />
    </div>
  )
}

export default RightSideBar