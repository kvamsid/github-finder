import React from 'react'

const About = () => {
  return (
    <div>
        <h1 className="tet-6xl mb-4">Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
            A React app to search GitHub profiles and see profile details. This is a self learning project developed to learn more about React.
        </p>
        <p className='text-lg text-gray-400'>
            Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
            Layout By:
            <a className='text-white' href='https://twitter.com/hassibmoddasser'>
                Hassib Moddasser
            </a>
        </p>
    </div>
  )
}

export default About