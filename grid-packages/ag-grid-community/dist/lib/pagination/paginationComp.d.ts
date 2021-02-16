import { Component } from "../widgets/component";
export declare class PaginationComp extends Component {
    private paginationProxy;
    private rowModel;
    private rowNodeBlockLoader;
    private btFirst;
    private btPrevious;
    private btNext;
    private btLast;
    private lbRecordCount;
    private lbFirstRowOnPage;
    private lbLastRowOnPage;
    private lbCurrent;
    private lbTotal;
    private previousAndFirstButtonsDisabled;
    private nextButtonDisabled;
    private lastButtonDisabled;
    constructor();
    protected postConstruct(): void;
    private onPaginationChanged;
    private onBtFirst;
    private setCurrentPageLabel;
    private formatNumber;
    private getTemplate;
    private onBtNext;
    private onBtPrevious;
    private onBtLast;
    private enableOrDisableButtons;
    private updateRowLabels;
    private isZeroPagesToDisplay;
    private setTotalLabels;
}
