import React, { Component } from 'react';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Job.css';


//props are properties that come from a parent component, in this case Jobs. props will not change, so we can use them directly in our render function
export default class Job extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="job">
                <Card className="job-card">
                    <CardBody>
                        <Row>
                            <Col md={7} sm={12}>
                                <CardImg className="company-logo center-mobile smaller-width" top width="100%" src={require('../../images/jobs/' + this.props.job.logo)} />
                            </Col>
                            <Col md={6} sm={12}>
                                <div className="center-job-info" style={{ marginTop: '30px'}}>
                                    <CardTitle className="h4">{this.props.job.companyName}</CardTitle>
                                    <CardSubtitle className="job-title">{this.props.job.jobTitle}</CardSubtitle>
                                    <CardText>{this.props.job.startDate} – {this.props.job.endDate}</CardText>
                                    <CardText className="job-location">{this.props.job.location}</CardText>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={7} sm={12}>
                               
                            </Col>
                        </Row>
                        <h5 className="text-center">Arbetsbeskrivning</h5>
                        <ol>
                            {this.props.job.jobDuties.map(duty =>
                                <li key={duty}>{duty}</li>
                            )}
                        </ol>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
