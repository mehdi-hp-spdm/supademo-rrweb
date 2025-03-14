import { actionWithDelay } from '@supademo/rrweb-types';
import { addedNodeMutation } from '@supademo/rrweb-types';
import { blockClass } from '@supademo/rrweb-types';
import { canvasMutationData } from '@supademo/rrweb-types';
import { DataURLOptions } from '@supademo/rrweb-types';
import { DeprecatedMirror } from '@supademo/rrweb-types';
import { DocumentDimension } from '@supademo/rrweb-types';
import { Emitter } from '@supademo/rrweb-types';
import { EventType } from '@supademo/rrweb-types';
import { eventWithTime } from '@supademo/rrweb-types';
import { Handler } from '@supademo/rrweb-types';
import { hookResetter } from '@supademo/rrweb-types';
import { hooksParam } from '@supademo/rrweb-types';
import { IMirror } from '@supademo/rrweb-types';
import { IncrementalSource } from '@supademo/rrweb-types';
import { IWindow } from '@supademo/rrweb-types';
import { KeepIframeSrcFn } from '@supademo/rrweb-types';
import { listenerHandler } from '@supademo/rrweb-types';
import { MaskInputFn } from '@supademo/rrweb-snapshot';
import { MaskInputOptions } from '@supademo/rrweb-snapshot';
import { maskTextClass } from '@supademo/rrweb-types';
import { MaskTextFn } from '@supademo/rrweb-snapshot';
import { Mirror } from '@supademo/rrweb-snapshot';
import { MouseInteractions } from '@supademo/rrweb-types';
import { PackFn } from '@supademo/rrweb-types';
import { playerMetaData } from '@supademo/rrweb-types';
import { RecordPlugin } from '@supademo/rrweb-types';
import { ReplayerEvents } from '@supademo/rrweb-types';
import { RRDocument } from '@supademo/rrdom';
import { RRIFrameElement } from '@supademo/rrdom';
import { RRNode } from '@supademo/rrdom';
import { SamplingStrategy } from '@supademo/rrweb-types';
import { SlimDOMOptions } from '@supademo/rrweb-snapshot';
import { StateMachine } from '@xstate/fsm';
import { textMutation } from '@supademo/rrweb-types';
import { throttleOptions } from '@supademo/rrweb-types';
import { UnpackFn } from '@supademo/rrweb-types';

export declare const addCustomEvent: <T>(tag: string, payload: T) => void;

declare type AppendedIframe = {
    mutationInQueue: addedNodeMutation;
    builtNode: HTMLIFrameElement | RRIFrameElement;
};

export declare function canvasMutation({ event, mutation, target, imageMap, canvasEventMap, errorHandler, }: {
    event: Parameters<Replayer['applyIncremental']>[0];
    mutation: canvasMutationData;
    target: HTMLCanvasElement;
    imageMap: Replayer['imageMap'];
    canvasEventMap: Replayer['canvasEventMap'];
    errorHandler: Replayer['warnCanvasMutationFailed'];
}): Promise<void>;

declare function closestElementOfNode(node: Node | null): HTMLElement | null;

declare function createPlayerService(context: PlayerContext, { getCastFn, applyEventsSynchronously, emitter }: PlayerAssets): StateMachine.Service<PlayerContext, PlayerEvent, PlayerState>;

declare function createSpeedService(context: SpeedContext): StateMachine.Service<SpeedContext, SpeedEvent, SpeedState>;

declare type ErrorHandler = (error: unknown) => void | boolean;

export { EventType }

export { eventWithTime }

export declare const freezePage: () => void;

declare function getBaseDimension(node: Node, rootIframe: Node): DocumentDimension;

declare function getNestedRule(rules: CSSRuleList, position: number[]): CSSGroupingRule;

declare function getPositionsAndIndex(nestedIndex: number[]): {
    positions: number[];
    index: number | undefined;
};

declare function getRootShadowHost(n: Node): Node;

declare function getShadowHost(n: Node): Element | null;

declare function getWindowHeight(): number;

declare function getWindowScroll(win: Window): {
    left: number;
    top: number;
};

declare function getWindowWidth(): number;

declare function hasShadowRoot<T extends Node | RRNode>(n: T): n is T & {
    shadowRoot: ShadowRoot;
};

declare function hookSetter<T>(target: T, key: string | number | symbol, d: PropertyDescriptor, isRevoked?: boolean, win?: Window & typeof globalThis): hookResetter;

export { IncrementalSource }

declare function inDom(n: Node): boolean;

declare function isAncestorRemoved(target: Node, mirror: Mirror): boolean;

declare function isBlocked(node: Node | null, blockClass: blockClass, blockSelector: string | null, checkAncestors: boolean): boolean;

declare function isIgnored(n: Node, mirror: Mirror, slimDOMOptions: SlimDOMOptions): boolean;

declare function isSerialized(n: Node, mirror: Mirror): boolean;

declare function isSerializedIframe<TNode extends Node | RRNode>(n: TNode, mirror: IMirror<TNode>): boolean;

declare function isSerializedStylesheet<TNode extends Node | RRNode>(n: TNode, mirror: IMirror<TNode>): boolean;

declare function iterateResolveTree(tree: ResolveTree, cb: (mutation: addedNodeMutation) => unknown): void;

declare function legacy_isTouchEvent(event: MouseEvent | TouchEvent | PointerEvent): event is TouchEvent;

export declare let mirror: DeprecatedMirror;

export { MouseInteractions }

declare let nowTimestamp: () => number;

declare function on(type: string, fn: EventListenerOrEventListenerObject, target?: Document | IWindow): listenerHandler;

declare function patch(source: {
    [key: string]: any;
}, name: string, replacement: (...args: unknown[]) => unknown): () => void;

declare type PlayerAssets = {
    emitter: Emitter;
    applyEventsSynchronously(events: Array<eventWithTime>): void;
    getCastFn(event: eventWithTime, isSync: boolean): () => void;
};

export declare type playerConfig = {
    speed: number;
    maxSpeed: number;
    root: Element;
    loadTimeout: number;
    skipInactive: boolean;
    inactivePeriodThreshold: number;
    showWarning: boolean;
    showDebug: boolean;
    blockClass: string;
    liveMode: boolean;
    insertStyleRules: string[];
    triggerFocus: boolean;
    UNSAFE_replayCanvas: boolean;
    pauseAnimation?: boolean;
    mouseTail: boolean | {
        duration?: number;
        lineCap?: string;
        lineWidth?: number;
        strokeStyle?: string;
    };
    unpackFn?: UnpackFn;
    useVirtualDom: boolean;
    logger: {
        log: (...args: Parameters<typeof console.log>) => void;
        warn: (...args: Parameters<typeof console.warn>) => void;
    };
    plugins?: ReplayPlugin[];
};

declare type PlayerContext = {
    events: eventWithTime[];
    timer: Timer;
    timeOffset: number;
    baselineTime: number;
    lastPlayedEvent: eventWithTime | null;
};

declare type PlayerEvent = {
    type: 'PLAY';
    payload: {
        timeOffset: number;
    };
} | {
    type: 'CAST_EVENT';
    payload: {
        event: eventWithTime;
    };
} | {
    type: 'PAUSE';
} | {
    type: 'TO_LIVE';
    payload: {
        baselineTime?: number;
    };
} | {
    type: 'ADD_EVENT';
    payload: {
        event: eventWithTime;
    };
} | {
    type: 'END';
};

export declare type PlayerMachineState = StateMachine.State<PlayerContext, PlayerEvent, PlayerState>;

declare type PlayerState = {
    value: 'playing';
    context: PlayerContext;
} | {
    value: 'paused';
    context: PlayerContext;
} | {
    value: 'live';
    context: PlayerContext;
};

declare function polyfill(win?: Window & typeof globalThis): void;

declare function queueToResolveTrees(queue: addedNodeMutation[]): ResolveTree[];

export declare function record<T = eventWithTime>(options?: recordOptions<T>): listenerHandler | undefined;

export declare namespace record {
    var addCustomEvent: <T>(tag: string, payload: T) => void;
    var freezePage: () => void;
    var takeFullSnapshot: (isCheckout?: boolean) => void;
    var mirror: Mirror;
}

export declare type recordOptions<T> = {
    emit?: (e: T, isCheckout?: boolean) => void;
    checkoutEveryNth?: number;
    checkoutEveryNms?: number;
    blockClass?: blockClass;
    blockSelector?: string;
    ignoreClass?: string;
    ignoreSelector?: string;
    maskTextClass?: maskTextClass;
    maskTextSelector?: string;
    maskAllInputs?: boolean;
    maskInputOptions?: MaskInputOptions;
    maskInputFn?: MaskInputFn;
    maskTextFn?: MaskTextFn;
    slimDOMOptions?: SlimDOMOptions | 'all' | true;
    ignoreCSSAttributes?: Set<string>;
    inlineStylesheet?: boolean;
    hooks?: hooksParam;
    packFn?: PackFn;
    sampling?: SamplingStrategy;
    dataURLOptions?: DataURLOptions;
    recordDOM?: boolean;
    recordCanvas?: boolean;
    recordCrossOriginIframes?: boolean;
    recordAfter?: 'DOMContentLoaded' | 'load';
    userTriggeredOnInput?: boolean;
    collectFonts?: boolean;
    inlineImages?: boolean;
    plugins?: RecordPlugin[];
    mousemoveWait?: number;
    keepIframeSrcFn?: KeepIframeSrcFn;
    errorHandler?: ErrorHandler;
};

export declare class Replayer {
    wrapper: HTMLDivElement;
    iframe: HTMLIFrameElement;
    service: ReturnType<typeof createPlayerService>;
    speedService: ReturnType<typeof createSpeedService>;
    get timer(): Timer;
    config: playerConfig;
    usingVirtualDom: boolean;
    virtualDom: RRDocument;
    private mouse;
    private mouseTail;
    private tailPositions;
    private emitter;
    private nextUserInteractionEvent;
    private legacy_missingNodeRetryMap;
    private cache;
    private imageMap;
    private canvasEventMap;
    private mirror;
    private styleMirror;
    private mediaManager;
    private firstFullSnapshot;
    private newDocumentQueue;
    private mousePos;
    private touchActive;
    private lastMouseDownEvent;
    private lastHoveredRootNode;
    private lastSelectionData;
    private constructedStyleMutations;
    private adoptedStyleSheets;
    constructor(events: Array<eventWithTime | string>, config?: Partial<playerConfig>);
    on(event: string, handler: Handler): this;
    off(event: string, handler: Handler): this;
    setConfig(config: Partial<playerConfig>): void;
    getMetaData(): playerMetaData;
    getCurrentTime(): number;
    getTimeOffset(): number;
    getMirror(): Mirror;
    play(timeOffset?: number): void;
    pause(timeOffset?: number): void;
    resume(timeOffset?: number): void;
    destroy(): void;
    startLive(baselineTime?: number): void;
    addEvent(rawEvent: eventWithTime | string): void;
    enableInteract(): void;
    disableInteract(): void;
    resetCache(): void;
    private setupDom;
    private handleResize;
    private applyEventsSynchronously;
    private getCastFn;
    private rebuildFullSnapshot;
    private insertStyleRules;
    private attachDocumentToIframe;
    private collectIframeAndAttachDocument;
    private waitForStylesheetLoad;
    private preloadAllImages;
    private preloadImages;
    private deserializeAndPreloadCanvasEvents;
    private applyIncremental;
    private applyMutation;
    private applyScroll;
    private applyInput;
    private applySelection;
    private applyStyleSheetMutation;
    private applyStyleSheetRule;
    private applyStyleDeclaration;
    private applyAdoptedStyleSheet;
    private legacy_resolveMissingNode;
    private moveAndHover;
    private drawMouseTail;
    private hoverElements;
    private isUserInteraction;
    private backToNormal;
    private warnNodeNotFound;
    private warnCanvasMutationFailed;
    private debugNodeNotFound;
    private warn;
    private debug;
}

export { ReplayerEvents }

export declare type ReplayPlugin = {
    handler?: (event: eventWithTime, isSync: boolean, context: {
        replayer: Replayer;
    }) => void;
    onBuild?: (node: Node | RRNode, context: {
        id: number;
        replayer: Replayer;
    }) => void;
    getMirror?: (mirrors: {
        nodeMirror: Mirror;
    }) => void;
};

declare type ResolveTree = {
    value: addedNodeMutation;
    children: ResolveTree[];
    parent: ResolveTree | null;
};

declare function shadowHostInDom(n: Node): boolean;

declare type SpeedContext = {
    normalSpeed: playerConfig['speed'];
    timer: Timer;
};

declare type SpeedEvent = {
    type: 'FAST_FORWARD';
    payload: {
        speed: playerConfig['speed'];
    };
} | {
    type: 'BACK_TO_NORMAL';
} | {
    type: 'SET_SPEED';
    payload: {
        speed: playerConfig['speed'];
    };
};

export declare type SpeedMachineState = StateMachine.State<SpeedContext, SpeedEvent, SpeedState>;

declare type SpeedState = {
    value: 'normal';
    context: SpeedContext;
} | {
    value: 'skipping';
    context: SpeedContext;
};

declare class StyleSheetMirror {
    private id;
    private styleIDMap;
    private idStyleMap;
    getId(stylesheet: CSSStyleSheet): number;
    has(stylesheet: CSSStyleSheet): boolean;
    add(stylesheet: CSSStyleSheet, id?: number): number;
    getStyle(id: number): CSSStyleSheet | null;
    reset(): void;
    generateId(): number;
}

export declare const takeFullSnapshot: (isCheckout?: boolean) => void;

declare function throttle<T>(func: (arg: T) => void, wait: number, options?: throttleOptions): (...args: T[]) => void;

declare class Timer {
    timeOffset: number;
    speed: number;
    private actions;
    private raf;
    private lastTimestamp;
    constructor(actions: actionWithDelay[] | undefined, config: {
        speed: number;
    });
    addAction(action: actionWithDelay): void;
    start(): void;
    private rafCheck;
    clear(): void;
    setSpeed(speed: number): void;
    isActive(): boolean;
    private findActionIndex;
}

declare function uniqueTextMutations(mutations: textMutation[]): textMutation[];

declare namespace utils {
    export {
        on,
        throttle,
        hookSetter,
        patch,
        getWindowScroll,
        getWindowHeight,
        getWindowWidth,
        closestElementOfNode,
        isBlocked,
        isSerialized,
        isIgnored,
        isAncestorRemoved,
        legacy_isTouchEvent,
        polyfill,
        queueToResolveTrees,
        iterateResolveTree,
        isSerializedIframe,
        isSerializedStylesheet,
        getBaseDimension,
        hasShadowRoot,
        getNestedRule,
        getPositionsAndIndex,
        uniqueTextMutations,
        getShadowHost,
        getRootShadowHost,
        shadowHostInDom,
        inDom,
        mirror as _mirror,
        nowTimestamp,
        AppendedIframe,
        StyleSheetMirror
    }
}
export { utils }

export { }


declare namespace record {
    var addCustomEvent: <T>(tag: string, payload: T) => void;
    var freezePage: () => void;
    var takeFullSnapshot: (isCheckout?: boolean) => void;
    var mirror: import("@supademo/rrweb-snapshot").Mirror;
}


declare global {
    interface Window {
        FontFace: typeof FontFace;
        Array: typeof Array;
    }
}
