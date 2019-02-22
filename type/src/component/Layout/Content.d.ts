import * as React from 'react';
export interface IContentProps {
    className?: string;
    style?: React.CSSProperties;
}
declare class Content extends React.Component<IContentProps> {
    static displayName: string;
    private classes;
    private parentValidate;
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Content;
