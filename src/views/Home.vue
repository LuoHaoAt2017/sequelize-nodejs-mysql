<template>
  <div class="home-container">
    <vxe-table :data="tableData" :border="true">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="cname" title="课程"></vxe-table-column>
      <vxe-table-column title="操作">
        <template #default="{ row }">
          <vxe-button
            type="text"
            status="primary"
            content="查看"
            @click="handleClick('detail', row)"
          ></vxe-button>
          <vxe-button
            type="text"
            status="success"
            content="编辑"
            @click="handleClick('update', row)"
          ></vxe-button>
          <vxe-button
            type="text"
            status="danger"
            content="删除"
            @click="handleClick('delete', row)"
          ></vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
import { SearchCourse, CreateCourse } from "../services/index";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    SearchCourse({})
      .then((resp) => {
        if (resp.successful) {
          this.tableData = resp.returnData;
        } else {
          console.error("获取数据失败");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    handleClick(opt, row) {
      const code = row.cid;
      switch (opt) {
        case "detail":
          this.handleDetail(code);
          break;
        case "update":
          this.handleUpdate(code);
          break;
        case "delete":
          this.handleDelete(code);
          break;
      }
    },
    handleDetail(code) {},
    handleUpdate(code) {},
    handleDelete(code) {},
  },
};
</script>

<style lang="less">
</style>