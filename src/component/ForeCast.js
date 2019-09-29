import React, {Component} from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import '../App.css';

class ForeCast extends Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          area: '',
          forecast: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items[0].forecasts
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      handleChange(event) {
        this.setState({area: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
        // retrieve the area
    
        // filter/find that area from state.items
        
        const foundItem = this.state.items.find( (item) => {
          return item.area === this.state.area
        } )
        this.setState({forecast: foundItem.forecast});
    
        console.log(foundItem)
        // {area: ??, forecast: ??? }
    
        // alert('A name was submitted: ' + this.state.forecast);
        
      }
    renderForecast() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
              <div>
                <b>Forecast : {this.state.forecast}</b>
              </div>
              <form onSubmit={this.handleSubmit}>
                Name: <input type="text" value={this.state.area} onChange={this.handleChange} />
                <input type="submit" value="Find weather" />
              </form>
              <table>
                {items.map(item => (
                    <tr key={item.name}>
                      <td>{item.area} </td>
                      <td>{item.forecast}</td>
                    </tr>
                ))}
              </table>
              
            </div>
          );
      }
    }

    render(){
        return (
          <Container>
          <Row className="ForeCastRow">
              <Col sm={12}>
                {
                  this.renderForecast()
                }
              </Col>
            </Row>
          </ Container>
        );
     }
}

export default ForeCast;

