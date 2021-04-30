import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping,
  ColumnChooser,
  ColumnFixing,
  Pager,
  FilterRow,
} from "devextreme-react/data-grid";
import { Scrolling } from "devextreme-react/tree-list";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default function DataGridDevExtreme(props) {
  return (
    <DataGrid
      dataSource={props.data}
      allowColumnReordering
      showBorders
      allowColumnResizing
      columnAutoWidth
      // columnHidingEnabled
    >
      <Scrolling showScrollbar scrollByThumb useNative />
      <FilterRow visible />
      <GroupPanel visible emptyPanelText="Group column here" />
      <Grouping autoExpandAll={false} />
      <Pager
        allowedPageSizes={[10, 30]}
        showInfo
        showNavigationButtons
        showPageSizeSelector
        visible
      />
      <Paging defaultPageSize={10} />
      <SearchPanel visible height={10} />
      <Export enabled />
      <ColumnChooser enabled />
      <ColumnFixing enabled />
    </DataGrid>
  );
}
