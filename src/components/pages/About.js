import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About the app</h1>
      <div>
        <h1>Github User Finder</h1>
        <p className="lead">This is a simple application to get started with React development</p>
        <h3>What does it do?</h3>
        <p className="lead">
        It searches for all the Github users using the text inputted by the user in the form. 
        It returns all the users matching the string in a grid format. 
        Clicking on the more tab takes the user to a custom made page with the vital stats.          
        </p>
        <h3>Developed by: </h3>
        <h4>Yogesh Agrawal</h4>
        
      </div>
    </div>
  )
}
export default About