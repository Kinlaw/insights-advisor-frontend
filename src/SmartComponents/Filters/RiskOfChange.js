import React, { Component } from 'react';
import { Dropdown, DropdownItem } from '@red-hat-insights/insights-frontend-components';

class RiskOfChange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsedRiskOfChange: true
        }
        this.onToggleRiskOfChange = this.onToggleRiskOfChange.bind(this);
        this.onSelectRiskOfChange = this.onSelectRiskOfChange.bind(this);
    }


    onToggleRiskOfChange() {
        this.setState({
            collapsedRiskOfChange: !this.state.collapsedRiskOfChange
        })
    }

    onSelectRiskOfChange(event) {
        // console.log(event);
    }

    render () {
        return (
            <Dropdown
                title='Risk of Change'
                isCollapsed={ this.state.collapsedRiskOfChange }
                onToggle={ this.onToggleRiskOfChange }
                onSelect={ this.onSelectRiskOfChange }>
                <DropdownItem>Very Low</DropdownItem>
                <DropdownItem>Low</DropdownItem>
                <DropdownItem>Moderate</DropdownItem>
                <DropdownItem>High</DropdownItem>
                <DropdownItem>All</DropdownItem>
            </Dropdown>
        );
    };
};

export default RiskOfChange;
