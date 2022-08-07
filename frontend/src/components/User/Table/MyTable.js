import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
// import httpService from "../../../../service/http.service";
import { useEffect } from 'react'
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AdminPanel from "../admin-panel";
// import "../../admin-panel/admin.css";
// import BasicModal from "./add-product";
import ProductsApi from '../../../api/Products'

const columns = [
  {
    field: 'image',
    headerName: 'تصویر',
    // eslint-disable-next-line jsx-a11y/alt-text
    renderCell: (params) => <img className="thumbnail" src={params.value} />,
  },
  { field: 'name', headerName: 'نام کالا', width: 230 },
  { field: 'category', headerName: 'دسته بندی', width: 230 },
  {
    field: 'delet',
    headerName: 'حذف و ویرایش',
    width: 130,
  },
]

export default function DataTable() {
  const [product, setProduct] = React.useState({})
  async function getData() {
    const res = await ProductsApi.gets({
      params: { categoryId: 1 },
    })
    setProduct(res.data)
  }
  useEffect(() => {
    getData()
  }, [])

  const rows = []
  if (product.length > 0) {
    // eslint-disable-next-line array-callback-return
    product.map((item) => {
      rows.push({
        id: item.id,
        image: item.image,
        name: item.name,
        // category: item.Category,
        // delet: "حذف و ویرایش",
      })
    })
  }

  return (
    <>
      {/* <AdminPanel />
         <BasicModal /> */}
      <h2>مدیریت کالاها</h2>
      <div className="grid-data">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  )
}
