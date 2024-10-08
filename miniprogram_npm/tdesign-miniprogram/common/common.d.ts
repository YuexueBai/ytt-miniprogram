export declare type Classes = Array<string>;
export interface Styles {
    [css: string]: string | number;
}
export declare type OptionData = {
    label?: string;
    value?: string | number;
} & {
    [key: string]: any;
};
export declare type TreeOptionData = {
    children?: Array<TreeOptionData>;
} & OptionData;
export declare type SizeEnum = 'small' | 'medium' | 'large';
export declare type HorizontalAlignEnum = 'left' | 'center' | 'right';
export declare type VerticalAlignEnum = 'top' | 'middle' | 'bottom';
export declare type ClassName = {
    [className: string]: any;
} | ClassName[] | string;
export declare type CSSSelector = string;
export interface KeysType {
    value?: string;
    label?: string;
}
export interface HTMLElementAttributes {
    [css: string]: string;
}
export interface InfinityScroll {
    bufferSize?: number;
    isFixedRowHeight?: boolean;
    rowHeight?: number;
    threshold?: number;
    type: 'lazy' | 'virtual';
}
export declare type TScroll = InfinityScroll;
