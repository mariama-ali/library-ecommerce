import React from 'react'
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Featured from "../components/Featured";

const Home = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    )
}

export default Home;
