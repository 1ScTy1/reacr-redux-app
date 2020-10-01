import React from 'react'
import { Link, Route } from 'react-router-dom'
import Project from './projectList'

const Home = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-56 pt-32 h-screen bg-purple-700">
          <Link to="/project" className="text-white ml-5">
            Поректы
          </Link>
        </div>
        <Route exact path="/project" component={() => <Project />} />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
