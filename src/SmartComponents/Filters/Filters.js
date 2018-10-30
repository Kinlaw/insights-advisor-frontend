import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDownFilter from './DropDownFilter';
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
                { this.props.riskOfChange.display &&
                    <DropDownFilter
                        title='Risk Of Change'
                        ddItems={ [ 'Very Low', 'Low', 'Moderate', 'High', 'All' ] }
                    />
                }
                { this.props.totalRisk.display &&
                    <DropDownFilter
                        title='Total Risk'
                        ddItems={ [ 'All', 'Low', 'Medium', 'High', 'Critical' ] }
                    />
                }
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
