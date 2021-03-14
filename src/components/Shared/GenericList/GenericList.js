import React, { Component, Fragment } from 'react';
import ReactTable from "react-table";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { DebounceInput } from 'react-debounce-input';
import * as helpers from '../helpers';

import './GenericList.scss';

class GenericList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            enableHighlight: true,
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    componentWillMount() {
        let showTiles = false, showTable = true;

        if (this.props.tiles) {
            if (this.props.activeView && this.props.activeView === 'tiles') {
                showTiles = true;
                showTable = false;
            }
        }
        this.setState({ showTiles, showTable });
    }

    handleSearchChange(event) {
        const searchValue = event.target.value;
        this.setState({ searchValue });
    }

    resetSearch() {
        this.setState({ searchValue: '' });
    }

    render() {
        let data = this.props.filter ? helpers.filterByObject(this.props.data, this.props.filter) : this.props.data
        let filteredData = data

        const searchValue = this.state.searchValue.toLowerCase().trim();

        try {
            const newData = filteredData.filter(element => {
                let match = false;
                element.filter.forEach(prop => {
                    if (element[prop.key]) {
                        const val = prop.customValue ? window.he.decode(prop.customValue.toLowerCase() || "") : window.he.decode(element[prop.key].toLowerCase() || '');
                        if (val.includes(searchValue)) {
                            prop.highlight = true;
                            match = true;
                        } else {
                            prop.highlight = false;
                        }
                        if (searchValue.length === 0) {
                            prop.highlight = false;
                        }
                    }
                });
                return match;
            });
            filteredData = newData
        } catch (error) {
        }

        let result = {}
        if (this.props.groupBy) {
            result = filteredData.reduce((acc, curr) => {
                if (!acc[curr.type]) acc[curr.type] = [];
                acc[curr.type].push(curr);
                return acc;
            }, {});
        }

        const TABLE_PAGE_SIZE = this.props.pageSize || 25;
        const showPagination = data && data.length > TABLE_PAGE_SIZE;
        const additionalProps = { ...this.props, data: filteredData, ...{ showPagination } };
        const { children, ...additionalPropsNoChildren } = additionalProps;
        const searchPlaceholder = this.props.searchPlaceholder || 'Search';
        const headerClass = this.props.headerClass || '';

        if (this.props.showColumns) {
            this.props.columns.map((col) => {
                this.props.showColumns.includes(col.accessor) ? col.show = true : col.show = false
                return col;
            })
        }

        if (this.props.hideColumns) {
            this.props.columns.map((col) => {
                if (this.props.hideColumns.includes(col.accessor)) {
                    col.show = false;
                }
                return col;
            })
        }

        const tilesTooltip = (
            <Tooltip id="tooltip">
                <div>Show Tiles View</div>
            </Tooltip>
        )
        const tableTooltip = (
            <Tooltip id="tooltip">
                <div>Show Table View</div>
            </Tooltip>
        )


        return (
            <section className={`generic-table ${this.props.containerClassName || ''}`}>
                {
                    this.props.header !== 'without-header' && 
                        <header className={`table-header ${headerClass}`}>
                        {
                            this.props.header && this.props.header !== 'no-header' ? <h1>{this.props.header}</h1> : <h1 className="empty-header">&nbsp;</h1>
                        }
                        {
                            this.props.headerComponent && this.props.headerComponent
                        }
                        {
                            this.props.search &&
                            <div className="search-wrapper">
                                <div className="search-container">
                                    <i className="fas fa-search"></i>
                                    <button onClick={() => this.resetSearch()} className="btn-none btn-clear">
                                        <i className={`fas fa-times ${this.state.searchValue.length > 0 ? '' : 'hidden'}`} />
                                    </button>
                                    <button onClick={() => this.setState({ enableHighlight: !this.state.enableHighlight })} className="btn-none btn-highlight">
                                        <i className={`fas fa-highlighter ${this.state.searchValue.length > 0 ? '' : 'hidden'} ${this.state.enableHighlight ? 'active' : ''}`} />
                                    </button>
                                    <DebounceInput
                                        minLength={1}
                                        debounceTimeout={300}
                                        placeholder={searchPlaceholder}
                                        onChange={this.handleSearchChange}
                                        value={this.state.searchValue}
                                        id="search-list"
                                    />
                                </div>
                            </div>
                        }
                        <div className="table-header-buttons">
                            {
                                this.props.add && ((this.state.showTiles && !this.props.addTile) || this.state.showTable) &&
                                <button type="button" className="btn-none btn-icon btn-icon-o" id="list-add" onClick={this.props.addFunc}>
                                    <i className="fa fa-plus"></i><span>{this.props.addText || ''}</span>
                                </button>
                            }
                            {
                                this.props.update && ((this.state.showTiles && !this.props.addTile) || this.state.showTable) &&
                                <button type="button" className="btn-none btn-icon btn-icon-o" onClick={this.props.updateFunc}>
                                    <i className="fas fa-pencil-alt"></i><span>{this.props.updateText || ''}</span>
                                </button>
                            }
                            {
                                this.props.refresh &&
                                <button type="button" className="btn-none btn-icon btn-icon-o" id={"list-refresh"} onClick={this.props.refreshTableFunc}>
                                    <i className="fa fa-sync"></i>
                                </button>
                            }
                            {
                                this.props.tiles &&
                                <Fragment>
                                    {
                                        this.state.showTable &&
                                        <OverlayTrigger placement="left" overlay={tilesTooltip}>
                                            <button
                                                onClick={() => {
                                                    const activeView = this.state.showTable ? 'tiles' : 'table';
                                                    if (this.props.setActiveViewFunc) {
                                                        this.props.setActiveViewFunc(activeView);
                                                    }
                                                    this.setState({ showTable: false, showTiles: true })
                                                }}
                                                className="btn-none"
                                                id="list-view-toggle">
                                                <i className="fas fa-th"></i>
                                            </button>
                                        </OverlayTrigger>
                                    }
                                    {
                                        this.state.showTiles &&
                                        <OverlayTrigger placement="left" overlay={tableTooltip}>
                                            <button
                                                onClick={() => {
                                                    const activeView = this.state.showTable ? 'tiles' : 'table';
                                                    if (this.props.setActiveViewFunc) {
                                                        this.props.setActiveViewFunc(activeView);
                                                    }
                                                    this.setState({ showTable: true, showTiles: false })
                                                }}
                                                className="btn-none"
                                                id="list-view-toggle">
                                                <i className="fas fa-table"></i>
                                            </button>
                                        </OverlayTrigger>
                                    }
                                </Fragment>
                            }
                        </div>
                    </header> 
                }
                <main className={this.state.enableHighlight ? '' : 'disable-highlight'}>
                    {
                        this.state.showTiles && this.props.tilesComponent({ data: filteredData })
                    }
                    {
                        this.state.showTable &&
                        <Fragment>
                            {
                                this.props.groupBy && Object.keys(result).length > 0 ?
                                    Object.keys(result).sort().map(key => {
                                        let additionalProps = {
                                            ...this.props,
                                            data: result[key],
                                            columns: this.props.multipleTablesData.columns[key],
                                            showPagination: key === 'PDN_PLAN' ? false : showPagination
                                        };
                                        let { children, ...additionalPropsNoChildren } = additionalProps;

                                        return <Fragment key={key}>
                                            <header className={`table-header`}>
                                                <h1>{this.props.multipleTablesData.titles[key]}</h1>
                                            </header>
                                            <ReactTable defaultPageSize={TABLE_PAGE_SIZE} {...additionalPropsNoChildren} />
                                        </Fragment>

                                    })
                                    :
                                    <ReactTable defaultPageSize={TABLE_PAGE_SIZE} {...additionalPropsNoChildren} />
                            }
                        </Fragment>

                    }
                </main>
            </section>
        );
    }
}

export default GenericList;