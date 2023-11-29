import './RightSidebar.css'
import RightSidebarCard from './RightSidebarCard/RightSidebarCard'

const RightSideBar = () => {
  return (
    <div className="right-sidebar">
      <h3>Latest Top Rated</h3>
      <RightSidebarCard />
    </div>
  )
}

export default RightSideBar