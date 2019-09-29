import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

class About extends Component {
  render(){
  return (
   <div className="aboutClass">
        <Container>
            <Row className="aboutRow"><Col sm={12}>
            <h5>OVERVIEW</h5>
            <div>
                <ul>
                    <li>Masters of Computer Applications with 6 months of Internship experience in Java and Web.</li>
                    <li>Oracle Certified Associate Java SE-7 Programmer.</li>
                    <li>Completed freeCodeCamp’s Responsive Web Design Certificate</li>
                    <li>Javascript Algorithms And Data Structures Certification</li>
                    <li>Good team player</li>
                    <li>Quick learner of new technologies</li>
                    <li>Knows English, Hindi, & Marathi languages.</li>
                </ul>
            </div>
            <h5>ACCOMPLISHMENT</h5>
            <p>
                <ul>
                    <li>Completed three months of Core Java course at Seed Infotech Pune.</li>
                    <li>Completed Java Workshop held by IIT Bombay in college, Pune.</li>
                    <li>Attended Wordpress workshop held by Awesome sites Singapore.</li>
                </ul>
            </p>
            <h6>I want to be part of TechLadies Bootcamp because :</h6>
            <p>
                If I'll tell in short so it would be like - To learn new technologies, to explore about current tech industry, 
                to help the NGOs and to get a Job.
            </p>
            <h5>TECHNICAL SUMMARY :</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th>Cources</th>
                        <th>University</th>
                        <th>Marks</th>
                        <th>Year</th>
                    </tr>
                </thead>
               <tbody>
                    <tr>
                        <td>MCA (Masters of Computer Applications)</td>
                        <td>Savitribai Phule Pune University, Pune</td>
                        <td>62.46</td>
                        <td>2015</td>
                    </tr>
                    <tr>
                        <td>BCS (Bachelors of Computer Science)</td>
                        <td>Dr. Babasaheb Marathwada University, Aurangabad</td>
                        <td>81.77</td>
                        <td>2013</td>
                    </tr>
                    <tr>
                        <td>HSC (Higher Secondary School)</td>
                        <td>Maharashtra State board of Higher Secondary Education, Pune</td>
                        <td>53.83</td>
                        <td>2010</td>
                        </tr>
                        <tr>
                            <td>SSC (Secondary School Certificate)</td>
                            <td>Maharashtra State board Secondary Education, Pune</td>
                            <td>74.15</td>
                            <td>2007</td>
                        </tr>
               </tbody>
               
                
           </table>
           </Col>
           </Row>
       </Container>
   </div>
  );
}}

export default About;
