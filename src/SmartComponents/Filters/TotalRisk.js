import React, { Component } from 'react';
import { Dropdown, DropdownItem } from '@red-hat-insights/insights-frontend-components';

class TotalRisk extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedTotalRisk: true
        };
        this.onToggleTotalRisk = this.onToggleTotalRisk.bind(this);
        this.onSelectTotalRisk = this.onSelectTotalRisk.bind(this);
    }

    onToggleTotalRisk() {
        this.setState({
            collapsedTotalRisk: !this.state.collapsedTotalRisk
        });
    }

    onSelectTotalRisk(event) {
        // console.log(event);
    }

    render () {
        return (
            <Dropdown
                title="Total Risk"
                isCollapsed={ this.state.collapsedTotalRisk }
                onToggle={ this.onToggleTotalRisk }
                onSelect={ this.onSelectTotalRisk }>
                <DropdownItem>All</DropdownItem>
                <DropdownItem>Low</DropdownItem>
                <DropdownItem>Medium</DropdownItem>
                <DropdownItem>High</DropdownItem>
                <DropdownItem>Critical</DropdownItem>
            </Dropdown>
        );
    };
};

export default TotalRisk;
