import { SuperComponent, RelationsOptions } from '../common/src/index';
export default class StepItem extends SuperComponent {
    options: {
        multipleSlots: boolean;
    };
    relations: RelationsOptions;
    externalClasses: string[];
    properties: import("./type").TdStepItemProps;
    data: {
        classPrefix: string;
        prefix: string;
        index: number;
        isDot: boolean;
        curStatus: string;
        layout: string;
        isLastChild: boolean;
    };
    methods: {
        updateStatus(current: any, currentStatus: any, index: any, theme: any, layout: any, steps: any): void;
        onTap(): void;
    };
}
