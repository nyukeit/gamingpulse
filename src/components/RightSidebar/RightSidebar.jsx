import './RightSidebar.css'
import RightSidebarCard from './RightSidebarCard/RightSidebarCard'

const RightSideBar = () => {
  return (
    <div className='right-sidebar'>
      <div className='top-rated'>
        <RightSidebarCard />
        <RightSidebarCard />
        <RightSidebarCard />
      </div>
      <div className='favorite-genres'>
        {/* <FavoriteGenres /> */}
      </div>
    </div>
  )
}

export default RightSideBar