/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v23.1.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../../../widgets/component");
var componentAnnotations_1 = require("../../../widgets/componentAnnotations");
var utils_1 = require("../../../utils");
var DefaultDateComponent = /** @class */ (function (_super) {
    __extends(DefaultDateComponent, _super);
    function DefaultDateComponent() {
        return _super.call(this, /* html */ "\n            <div class=\"ag-filter-filter\">\n                <ag-input-text-field class=\"ag-date-filter\" ref=\"eDateInput\"></ag-input-text-field>\n            </div>") || this;
    }
    DefaultDateComponent.prototype.init = function (params) {
        var _this = this;
        if (this.shouldUseBrowserDatePicker(params)) {
            if (utils_1._.isBrowserIE()) {
                console.warn('ag-grid: browserDatePicker is specified to true, but it is not supported in IE 11, reverting to plain text date picker');
            }
            else {
                this.eDateInput.getInputElement().type = 'date';
            }
        }
        this.listener = params.onDateChanged;
        this.addDestroyableEventListener(this.eDateInput.getInputElement(), 'input', function (e) {
            if (e.target !== document.activeElement) {
                return;
            }
            _this.listener();
        });
    };
    DefaultDateComponent.prototype.getDate = function () {
        return utils_1._.parseDateTimeFromString(this.eDateInput.getValue());
    };
    DefaultDateComponent.prototype.setDate = function (date) {
        this.eDateInput.setValue(utils_1._.serialiseDate(date));
    };
    DefaultDateComponent.prototype.setInputPlaceholder = function (placeholder) {
        this.eDateInput.setInputPlaceholder(placeholder);
    };
    DefaultDateComponent.prototype.shouldUseBrowserDatePicker = function (params) {
        if (params.filterParams && params.filterParams.browserDatePicker != null) {
            return params.filterParams.browserDatePicker;
        }
        else {
            return utils_1._.isBrowserChrome() || utils_1._.isBrowserFirefox();
        }
    };
    __decorate([
        componentAnnotations_1.RefSelector('eDateInput')
    ], DefaultDateComponent.prototype, "eDateInput", void 0);
    return DefaultDateComponent;
}(component_1.Component));
exports.DefaultDateComponent = DefaultDateComponent;

//# sourceMappingURL=defaultDateComponent.js.map
