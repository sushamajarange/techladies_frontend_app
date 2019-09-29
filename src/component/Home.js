import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../component/Menu';
import Image from 'react-bootstrap/Image'
import '../App.css';
  
class Home extends Component{
    render(){
        return(
            
        <Container>
           
            <div className="sidebar">
                <h5>My Portfolio</h5>
                <Image src="https://lh3.googleusercontent.com/lQHG68ATFaZPNvdxGa9uq50aAzomJbMyPkH6BNP6SX9CxXkuSZaAs4BKVVprVwUi7myK1WMSqIvedSzTJoukNtOfyIyjPZlyVQe-fQG9mi0yjMH0ugDn5hVQ0veMj3LSlswByVrxZH_BbQbbJheivJk4J0eB2OYkF6UrulUmxVzf96j2clktoPll1C6pIdFhWmS9yJ8N88DXH9fBDGoRM77J4qCbvXbF_J7KR4gTIXTsMiFt3gzloTQbCVy4AGwg22dUmJUo7R7OKBHxwU1LoUJtIdwzXy1b3vDGsqCa83J1wdylplGgxKgkCKX1wrHvmM-kVyNOrTs84wnLEJsyOJmHsyqRgPR39ziVxg2G2Idl0YBVK3n-uJswCSzp2IAsDspEZLcAPB83k3cx4t4-JEMGaePYoMMtINmr3YYwXYYhAWaABn4v7jirRhPmb9kmdxuClcqvkqYGhCmN6jii_Q4bS62iRQpMA9zPI-LqAjpIIi817ReflfnTdP8qW_JGO5xyEZubw5Pb9jyoCck3z05Uj9EsY1NM98GIq2Y_hZJdlP1rxWa-vyVxiRM0njEjmR6KSDjwEctdY-xxnQCuFXAJcwhaSR0A3WsuCjEyUm7CRZI1JrV8KpTrNYbAe_AUekEMEruQFKO7KT1WDsx64RZLURdrCoHtnpGDgMcVhe4XehJXlDR0CeIF_OCTRe_mHcGIrH3Tptq4NQt9fZBWu2nrUOPqVB5wrrUL5so1FkF5Uck=w938-h625-no"/>
            </div>
        
            <div className="main">
                
                <center>
                    Hey,<br /> It's me <i><b>Sushama</b></i>, <br />
                    I'm the simple, straightforward and honest girl who wants to fullfill her dreams.<br />
                    I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best.<br />
                    I always try to be happy and make happy to everyone.<br />
                    I am a very positive and practical person.
                </center>
            </div>
               
        </ Container>
        );
    }
}

export default Home;


