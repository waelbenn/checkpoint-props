import React from 'react'
import PropTypes from 'prop-types'; 

function Profile(props) {
   
  return (
    <div style={props.style}>
        <h1>{props.fn}</h1>
        <h3>{props.bio}</h3>
        <h3>{props.prof}</h3>
        {props.children}
        {props.alert()}
    </div>
  )
}
Profile.defaultProps={fn:"Anonymous"}
Profile.propTypes={fn:PropTypes.string}
export default Profile