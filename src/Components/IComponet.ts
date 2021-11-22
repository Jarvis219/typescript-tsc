

export interface Icomponet {
    render: () => void;
    template: () => string;
    afterRender: () => void;
}
