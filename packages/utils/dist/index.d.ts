declare type BasePrototypeCache = {
    Node: typeof Node.prototype;
    ShadowRoot: typeof ShadowRoot.prototype;
    MutationObserver: typeof MutationObserver.prototype;
    Element: typeof Element.prototype;
};

export declare function childNodes(n: Node): NodeListOf<Node>;

export declare function contains(n: Node, other: Node): boolean;

declare const _default: {
    childNodes: typeof childNodes;
    parentNode: typeof parentNode;
    parentElement: typeof parentElement;
    textContent: typeof textContent;
    contains: typeof contains;
    getRootNode: typeof getRootNode;
    host: typeof host;
    styleSheets: typeof styleSheets;
    shadowRoot: typeof shadowRoot;
    querySelector: typeof querySelector;
    querySelectorAll: typeof querySelectorAll;
    mutationObserver: typeof mutationObserverCtor;
};
export default _default;

export declare function getRootNode(n: Node): Node;

export declare function getUntaintedAccessor<K extends keyof BasePrototypeCache, T extends keyof BasePrototypeCache[K]>(key: K, instance: BasePrototypeCache[K], accessor: T): BasePrototypeCache[K][T];

export declare function getUntaintedMethod<K extends keyof BasePrototypeCache, T extends keyof BasePrototypeCache[K]>(key: K, instance: BasePrototypeCache[K], method: T): BasePrototypeCache[K][T];

export declare function getUntaintedPrototype<T extends keyof BasePrototypeCache>(key: T): BasePrototypeCache[T];

export declare function host(n: ShadowRoot): Element | null;

export declare const isAngularZonePresent: () => boolean;

export declare function mutationObserverCtor(): (typeof MutationObserver)['prototype']['constructor'];

export declare function parentElement(n: Node): HTMLElement | null;

export declare function parentNode(n: Node): ParentNode | null;

export declare function querySelector(n: Element, selectors: string): Element | null;

export declare function querySelectorAll(n: Element, selectors: string): NodeListOf<Element>;

export declare function shadowRoot(n: Node): ShadowRoot | null;

export declare function styleSheets(n: ShadowRoot): StyleSheetList;

export declare function textContent(n: Node): string | null;

export { }
