import React from 'react'
import Navbar from './components/Navbar'
export default () => { return ((<Navbar title="Mango Airlines" />) /*footer*/) }
export const Welcome = ({ ...props }) => {
    return <>
        <h1> Hello, {props.name} </h1>
        <h1> {props.title}</h1>
    </>
}
{/* <Welcome name="session 2127219783" title="jksdjlkds" />,    */ }