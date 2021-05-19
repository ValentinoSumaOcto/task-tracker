import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, displayAddTask, showAdd}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={displayAddTask}/>
        </header>
    )
}

// CSS in JS
//const headingStyle = { color:'red', backgroundColor: 'black'}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header

