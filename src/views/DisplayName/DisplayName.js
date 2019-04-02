import React from 'react'

const DisplayName = (props) => (
  <div>
    <p>
      Imię to: {props.match.params.firstname}
    </p>
    <p>
      a nazwisko: {props.match.params.lastname}
    </p>
  </div>
)

export default DisplayName