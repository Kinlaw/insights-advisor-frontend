import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RiskOfChange from './RiskOfChange';
import TotalRisk from './TotalRisk';
import '../../App.scss';
import './filters.scss';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {};
    // componentDidUpdate() {};

    render () {
        return (
            <div widget-type='AdvisorFilters'>
                { this.props.riskOfChange.display && <RiskOfChange /> }
                { this.props.totalRisk.display && <TotalRisk /> }
            </div>
        );
    }
}

Filters.propTypes = {
    checkInStatus: PropTypes.object,
    incidents: PropTypes.object,
    riskOfChange: PropTypes.object,
    rows: PropTypes.object,
    search: PropTypes.object,
    totalRisk: PropTypes.object
};

export default Filters;
