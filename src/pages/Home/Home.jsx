import React,{useState} from 'react'
import Addblog from '../../Components/Addblog'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'



const Home = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const searchHandler = (searchTerm)=>{
       console.log(searchTerm);
  }
  return (
    <div className="home">
      <Navbar />
      <div className="list-elements">
        <div className="filter-panel">
          <Sidebar />
        </div>
        <div className="lists">
          <Addblog term={searchTerm} searchKeyword = {searchHandler}/>
        
        </div>

      </div>

    </div>
  )
}

export default Home