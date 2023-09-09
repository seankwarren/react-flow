import type { ReactFlowProps } from '../../types';
type StoreUpdaterProps = Pick<ReactFlowProps, 'nodes' | 'edges' | 'defaultNodes' | 'defaultEdges' | 'onConnect' | 'onConnectStart' | 'onConnectEnd' | 'onClickConnectStart' | 'onClickConnectEnd' | 'nodesDraggable' | 'nodesConnectable' | 'nodesFocusable' | 'edgesFocusable' | 'edgesUpdatable' | 'minZoom' | 'maxZoom' | 'nodeExtent' | 'onNodesChange' | 'onEdgesChange' | 'elementsSelectable' | 'connectionMode' | 'snapToGrid' | 'snapGrid' | 'translateExtent' | 'connectOnClick' | 'defaultEdgeOptions' | 'fitView' | 'fitViewOptions' | 'onNodesDelete' | 'onEdgesDelete' | 'onNodeDragStart' | 'onNodeDrag' | 'onNodeDragStop' | 'onSelectionDragStart' | 'onSelectionDrag' | 'onSelectionDragStop' | 'noPanClassName' | 'nodeOrigin' | 'elevateNodesOnSelect' | 'autoPanOnConnect' | 'autoPanOnNodeDrag' | 'connectionRadius' | 'isValidConnection' | 'onError'> & {
    rfId: string;
};
declare const StoreUpdater: ({ nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, elementsSelectable, connectionMode, snapGrid, snapToGrid, translateExtent, connectOnClick, defaultEdgeOptions, fitView, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDrag, onNodeDragStart, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, }: StoreUpdaterProps) => null;
export default StoreUpdater;
//# sourceMappingURL=index.d.ts.map