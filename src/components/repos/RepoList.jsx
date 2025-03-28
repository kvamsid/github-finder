import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const RepoList = ({repos}) => {
  return (
    <div className = 'rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <div className="h2 text:3xl my-4 font-bold card-title">Latest Repositories</div>
            {repos.map((repo) =>(
                <RepoItem key = {repo.id} repo={repo}/>
            ))}
        </div>
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default RepoList