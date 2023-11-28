import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LeftNavigation from '../components/LeftNavigation/LeftNavigation'
import PrimaryCard from '../components/PrimaryCard/PrimaryCard'
import RightSideBar from '../components/RightSideBar/RightSideBar'
import SearchBar from '../components/SearchBar/SearchBar'
import SecondaryCard from '../components/SecondaryCard/SecondaryCard'

const Home = () => {
  return (
    <>
        <LeftNavigation />
        <PrimaryCard />
        <RightSideBar />
        <SearchBar />
        <SecondaryCard />
    </>
  )
}

export default Home