var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { _, Autowired, Bean, BeanStub } from "@ag-grid-community/core";
var ChartCrossFilter = /** @class */ (function (_super) {
    __extends(ChartCrossFilter, _super);
    function ChartCrossFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartCrossFilter_1 = ChartCrossFilter;
    ChartCrossFilter.prototype.filter = function (event, reset) {
        if (reset === void 0) { reset = false; }
        var filterModel = this.gridApi.getFilterModel();
        // filters should be reset when user clicks on canvas background
        if (reset) {
            this.resetFilters(filterModel);
            return;
        }
        var colId = ChartCrossFilter_1.extractFilterColId(event);
        if (this.isValidColumnFilter(colId)) {
            // update filters based on current chart selections
            this.updateFilters(filterModel, event);
        }
        else {
            console.warn("AG Grid: cross filtering requires a 'agSetColumnFilter' or 'agMultiColumnFilter' " +
                "to be defined on the column with id: '" + colId + "'");
        }
    };
    ChartCrossFilter.prototype.resetFilters = function (filterModel) {
        var filtersExist = Object.keys(filterModel).length > 0;
        if (filtersExist) {
            // only reset filters / charts when necessary to prevent undesirable flickering effect
            this.gridApi.setFilterModel(null);
            this.gridApi.onFilterChanged();
        }
    };
    ChartCrossFilter.prototype.updateFilters = function (filterModel, event) {
        var _a;
        var dataKey = ChartCrossFilter_1.extractFilterColId(event);
        var rawValue = event.datum[dataKey];
        if (rawValue === undefined) {
            return;
        }
        var selectedValue = rawValue.toString();
        var filterColId = dataKey.replace('-filtered-out', '');
        if (event.event.metaKey || event.event.ctrlKey) {
            var existingGridValues = this.getCurrentGridValuesForCategory(filterColId);
            var valueAlreadyExists = _.includes(existingGridValues, selectedValue);
            var updatedValues = void 0;
            if (valueAlreadyExists) {
                updatedValues = existingGridValues.filter(function (v) { return v !== selectedValue; });
            }
            else {
                updatedValues = existingGridValues;
                updatedValues.push(selectedValue);
            }
            filterModel[filterColId] = this.getUpdatedFilterModel(filterColId, updatedValues);
        }
        else {
            var updatedValues = [selectedValue];
            filterModel = (_a = {}, _a[filterColId] = this.getUpdatedFilterModel(filterColId, updatedValues), _a);
        }
        this.gridApi.setFilterModel(filterModel);
    };
    ChartCrossFilter.prototype.getUpdatedFilterModel = function (colId, updatedValues) {
        var columnFilterType = this.getColumnFilterType(colId);
        if (columnFilterType === 'agMultiColumnFilter') {
            return { filterType: 'multi', filterModels: [null, { filterType: 'set', values: updatedValues }] };
        }
        return { filterType: 'set', values: updatedValues };
    };
    ChartCrossFilter.prototype.getCurrentGridValuesForCategory = function (dataKey) {
        var filteredValues = [];
        var gridContainsValue = _.includes;
        this.gridApi.forEachNodeAfterFilter(function (rowNode) {
            if (!rowNode.group) {
                var value = rowNode.data[dataKey] + '';
                if (!gridContainsValue(filteredValues, value)) {
                    filteredValues.push(value);
                }
            }
        });
        return filteredValues;
    };
    ChartCrossFilter.extractFilterColId = function (event) {
        return event.xKey ? event.xKey : event.labelKey;
    };
    ChartCrossFilter.prototype.isValidColumnFilter = function (colId) {
        if (colId.indexOf('-filtered-out')) {
            colId = colId.replace('-filtered-out', '');
        }
        var filterType = this.getColumnFilterType(colId);
        if (typeof filterType === 'boolean') {
            return filterType;
        }
        return _.includes(['agSetColumnFilter', 'agMultiColumnFilter'], filterType);
    };
    ChartCrossFilter.prototype.getColumnFilterType = function (colId) {
        var gridColumn = this.columnController.getGridColumn(colId);
        return gridColumn ? gridColumn.getColDef().filter : undefined;
    };
    var ChartCrossFilter_1;
    __decorate([
        Autowired('gridApi')
    ], ChartCrossFilter.prototype, "gridApi", void 0);
    __decorate([
        Autowired('columnController')
    ], ChartCrossFilter.prototype, "columnController", void 0);
    ChartCrossFilter = ChartCrossFilter_1 = __decorate([
        Bean("chartCrossFilter")
    ], ChartCrossFilter);
    return ChartCrossFilter;
}(BeanStub));
export { ChartCrossFilter };
