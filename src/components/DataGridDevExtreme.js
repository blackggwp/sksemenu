import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping,
  ColumnChooser,
  ColumnFixing,
  Pager,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default function DataGridDevExtreme(props) {
  return (
    <DataGrid
      dataSource={props.data}
      allowColumnReordering={true}
      showBorders={true}
      allowColumnResizing={true}
      columnAutoWidth
      columnHidingEnabled
    >
      <GroupPanel visible={true} emptyPanelText="Group column here" />
      <Grouping autoExpandAll={false} />
      <Pager
        allowedPageSizes={[10, 30]}
        showInfo={true}
        showNavigationButtons={true}
        showPageSizeSelector={true}
        visible={true}
      />
      <Paging defaultPageSize={10} />
      <SearchPanel visible={true} height={10} />
      <Export enabled={true} />
      <ColumnChooser enabled={true} />
      <ColumnFixing enabled={true} />
    </DataGrid>
  );
}
