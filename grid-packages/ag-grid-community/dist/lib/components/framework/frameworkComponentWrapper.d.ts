import { IComponent } from "../../interfaces/iComponent";
import { ComponentType } from "./componentTypes";
/**
 * B the business interface (ie IHeader)
 * A the agGridComponent interface (ie IHeaderComp). The final object acceptable by ag-grid
 */
export interface FrameworkComponentWrapper {
    wrap<A extends IComponent<any>>(frameworkComponent: {
        new (): any;
    } | null, methodList: string[], optionalMethodList: string[], componentType: ComponentType, componentName?: string | null): A;
}
export interface WrapableInterface {
    hasMethod(name: string): boolean;
    callMethod(name: string, args: IArguments): void;
    addMethod(name: string, callback: Function): void;
}
export declare abstract class BaseComponentWrapper<F extends WrapableInterface> implements FrameworkComponentWrapper {
    wrap<A extends IComponent<any>>(OriginalConstructor: {
        new (): any;
    }, mandatoryMethodList: string[], optionalMethodList: string[] | undefined, componentType: ComponentType, componentName?: string): A;
    abstract createWrapper(OriginalConstructor: {
        new (): any;
    }, componentType: ComponentType, componentName?: string): F;
    private createMethod;
    protected createMethodProxy(wrapper: F, methodName: string, mandatory: boolean): Function;
}
