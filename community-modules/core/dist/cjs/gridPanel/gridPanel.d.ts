// Type definitions for @ag-grid-community/core v25.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { RowContainerComponent } from '../rendering/row/rowContainerComponent';
import { RowComp } from '../rendering/row/rowComp';
import { RowDragFeature } from './rowDragFeature';
import { Component } from '../widgets/component';
import { HeaderRootComp } from '../headerRendering/headerRootComp';
import { PopupService } from "../widgets/popupService";
export declare type RowContainerComponentNames = 'fullWidth' | 'body' | 'pinnedLeft' | 'pinnedRight' | 'floatingTop' | 'floatingTopPinnedLeft' | 'floatingTopPinnedRight' | 'floatingTopFullWidth' | 'floatingBottom' | 'floatingBottomPinnedLeft' | 'floatingBottomPinnedRight' | 'floatingBottomFullWidth';
export declare type RowContainerComponents = {
    [K in RowContainerComponentNames]: RowContainerComponent;
};
export declare class GridPanel extends Component {
    private alignedGridsService;
    private rowRenderer;
    private pinnedRowModel;
    private animationFrameService;
    private navigationService;
    private autoHeightCalculator;
    private columnAnimationService;
    private autoWidthCalculator;
    private paginationAutoPageSizeService;
    private beans;
    private paginationProxy;
    private columnApi;
    private gridApi;
    private dragService;
    private mouseEventService;
    private $scope;
    private scrollVisibleService;
    private valueService;
    private dragAndDropService;
    private heightScaler;
    private resizeObserverService;
    private undoRedoService;
    private columnController;
    private headerNavigationService;
    popupService: PopupService;
    private rangeController;
    private contextMenuFactory;
    private menuFactory;
    private clipboardService;
    private eBodyViewport;
    private eCenterContainer;
    private eCenterViewport;
    private eLeftContainer;
    private eRightContainer;
    private eCenterColsClipper;
    private eHorizontalScrollBody;
    private eHorizontalLeftSpacer;
    private eHorizontalRightSpacer;
    private eBodyHorizontalScrollViewport;
    private eBodyHorizontalScrollContainer;
    private eFullWidthContainer;
    private eTop;
    private eLeftTop;
    private eRightTop;
    private eTopContainer;
    private eTopViewport;
    private eTopFullWidthContainer;
    private eBottom;
    private eLeftBottom;
    private eRightBottom;
    private eBottomContainer;
    private eBottomViewport;
    private eBottomFullWidthContainer;
    headerRootComp: HeaderRootComp;
    private overlayWrapper;
    private rowContainerComponents;
    private eAllCellContainers;
    private scrollLeft;
    private scrollTop;
    private nextScrollTop;
    private centerWidth;
    private lastHorizontalScrollElement;
    private readonly resetLastHorizontalScrollElementDebounced;
    private bodyHeight;
    private enableRtl;
    private pinningRight;
    private pinningLeft;
    private printLayout;
    private rowDragFeature;
    constructor();
    getVScrollPosition(): {
        top: number;
        bottom: number;
    };
    getHScrollPosition(): {
        left: number;
        right: number;
    };
    private onRowDataChanged;
    private showOrHideOverlay;
    private onNewColumnsLoaded;
    private init;
    private onDomLayoutChanged;
    private onCenterViewportResized;
    setColumnMovingCss(moving: boolean): void;
    setCellTextSelection(selectable?: boolean): void;
    private addRowDragListener;
    getRowDragFeature(): RowDragFeature;
    private addStopEditingWhenGridLosesFocus;
    private addAngularApplyCheck;
    private disableBrowserDragging;
    private addEventListeners;
    private addDragListeners;
    private addMouseListeners;
    private addPreventScrollWhileDragging;
    private addKeyboardEvents;
    private addBodyViewportListener;
    getBodyClientRect(): ClientRect | undefined;
    private getRowForEvent;
    private processKeyboardEvent;
    private processCellKeyboardEvent;
    processFullWidthRowKeyboardEvent(rowComp: RowComp, eventName: string, keyboardEvent: KeyboardEvent): void;
    private doGridOperations;
    scrollToTop(): void;
    private processMouseEvent;
    private mockContextMenuForIPad;
    private handleContextMenuMouseEvent;
    private onContextMenu;
    private preventDefaultOnContextMenu;
    private onCtrlAndA;
    private onCtrlAndC;
    private onCtrlAndV;
    private onCtrlAndD;
    ensureIndexVisible(index: any, position?: string | null): void;
    getCenterWidth(): number;
    isHorizontalScrollShowing(): boolean;
    isVerticalScrollShowing(): boolean;
    private onScrollbarWidthChanged;
    checkViewportAndScrolls(): void;
    private updateScrollVisibleService;
    private updateScrollVisibleServiceImpl;
    private setHorizontalScrollVisible;
    private setVerticalScrollPaddingVisible;
    updateRowCount(): void;
    private updateColumnCount;
    ensureColumnVisible(key: any): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    sizeColumnsToFit(nextTimeout?: number): void;
    getCenterContainer(): HTMLElement;
    getDropTargetBodyContainers(): HTMLElement[];
    getDropTargetLeftContainers(): HTMLElement[];
    getDropTargetRightContainers(): HTMLElement[];
    private buildRowContainerComponents;
    private setupRowAnimationCssClass;
    private suppressScrollOnFloatingRow;
    getRowContainers(): RowContainerComponents;
    getFloatingTopBottom(): HTMLElement[];
    onDisplayedColumnsChanged(): void;
    private onDisplayedColumnsWidthChanged;
    private setWidthsOfContainers;
    private setCenterWidth;
    private setPinnedLeftWidth;
    private setPinnedRightWidth;
    private setPinnedContainerSize;
    private setFakeHScrollSpacerWidths;
    private checkBodyHeight;
    setHeaderAndFloatingHeights(): void;
    getBodyHeight(): number;
    setHorizontalScrollPosition(hScrollPosition: number): void;
    setVerticalScrollPosition(vScrollPosition: number): void;
    scrollHorizontally(pixels: number): number;
    scrollVertically(pixels: number): number;
    private addScrollListener;
    private onVerticalScroll;
    executeAnimationFrameScroll(): boolean;
    private shouldBlockScrollUpdate;
    private isControllingScroll;
    private onFakeHorizontalScroll;
    private onCenterViewportScroll;
    private onBodyHorizontalScroll;
    private resetLastHorizontalScrollElement;
    private doHorizontalScroll;
    private redrawRowsAfterScroll;
    private onHorizontalViewportChanged;
    getCenterViewportScrollLeft(): number;
    private setCenterViewportScrollLeft;
    horizontallyScrollHeaderCenterAndFloatingCenter(scrollLeft?: number): void;
    addScrollEventListener(listener: () => void): void;
    removeScrollEventListener(listener: () => void): void;
}
