import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Home.module.css'

const Home = () => {
    return (
        <div>
            <div className={classes.heading}>   <h1 className={classes.bookshop}>Bookshop</h1> </div>
            <div> <h3>Buy the best books available online here !</h3> </div>
            <div className={classes.imgcontainer}><img src='https://i.pinimg.com/736x/df/17/40/df1740705f7fea8ac427550daafa0296.jpg' className={classes.imageshop} /> </div>
            <div className={classes.homelog}>  <Link to="/Login" className="loginlink">
                Login
            </Link>here to add your books to cart</div>
        </div>
    )
}

export default Home