import PropTypes from 'prop-types'

function Greetings ({name, LastName}) {
    return <h1>Hello {name} {LastName}</h1>
}


Greetings.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default Greetings;
