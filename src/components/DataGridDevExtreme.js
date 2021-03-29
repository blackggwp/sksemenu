import React from 'react'
import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping,
  ColumnChooser,
  ColumnFixing,
} from 'devextreme-react/data-grid';
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default function DataGridDevExtreme(props) {
  return (<DataGrid
    dataSource={props.data}
    allowColumnReordering={true}
    showBorders={true}
    allowColumnResizing={true}
    columnAutoWidth
    height={'40rem'}
  >
    <GroupPanel visible={true} />
    <Grouping autoExpandAll={false} />
    <SearchPanel visible={true} height={10} />
    <Paging defaultPageSize={20} />
    <Export enabled={true} />
    <ColumnChooser enabled={true} />
    <ColumnFixing enabled={true} />
  </DataGrid>
  )
}