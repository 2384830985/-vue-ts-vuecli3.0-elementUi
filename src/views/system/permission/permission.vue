<template>
    <div>
        <newTab></newTab>
        <div class="t-p-content-10">
            <div class="t-container">
                <!-- 发布按钮 -->
                <!--<router-link tag="div" to="/system/permissionAdd">-->
                    <div class="t-mini-buttom">
                        <el-button size="mini" type="primary" @click="centerDialogAdd">添加权限</el-button>
                        <el-button size="mini" type="primary" @click="centerDialogPlugin">新增测试插件</el-button>
                    </div>
                <!--</router-link>-->
                <!-- 搜索条件 -->
                <div class="t-search-content">
                    <el-form :model="formInline" label-position="right" class="demo-form-inline" size="mini" label-width="140px">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="状态:">
                                    <el-select v-model="formInline.isDel" class="w-80" placeholder="请选择权限状态">
                                        <el-option v-for="(item,index) in userIsDel" :key="index" :value="item.val" :label="item.title"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="">
                                    <el-button type="primary" @click="search">筛选</el-button>
                                    <Reset :searchReserved="searchReserved"></Reset>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <!-- 表格 -->
                <el-table
                    :data="tableData"
                    border
                    v-loading="loading"
                    max-height="700"
                    style="width: 100%; margin-top: 20px">
                     <el-table-column
                        prop="name"
                        align="center"
                        label="名称">
                    <template slot-scope="scope">
                        {{scope.row.name}}
                    </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="排序">
                        <template slot-scope="scope">
                            {{scope.row.sort}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="是否隐藏">
                        <template slot-scope="scope">
                            {{scope.row.isDel==0?'正常':'封停'}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            align="center"
                            label="是否是父级">
                        <template slot-scope="scope">
                            {{scope.row.parentId==0?'顶级':'-'}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作"
                    >
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
                        <el-button type="text" size="small" v-if="scope.row.isDel==0" @click="onTheShelf(scope.row,1)">删除</el-button>
                        <el-button type="text" size="small" v-if="scope.row.isDel==1" @click="onTheShelf(scope.row,0)">回归</el-button>
                    </template>
                </el-table-column>
                </el-table>
                <Pagination :Paginationtotal="Paginationtotal"></Pagination>
            </div>
            <el-dialog
                    title="用户操作"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    center>
                <el-form ref="form" :model="form" label-width="60px" size="mini">
                    <el-form-item label="菜单名称">
                        <el-input v-model="form.name" placeholder="菜单名称"></el-input>
                    </el-form-item>
                    <el-form-item label="父级菜单">
                        <el-select v-model="form.parentId" style="width: 100%" placeholder="父级菜单">
                            <el-option label="父级" :value="0"></el-option>
                            <el-option v-for="item in oneList" :label="item.name" :value="item.id" :key="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input v-model="form.sort" placeholder="排序"></el-input>
                    </el-form-item>
                    <el-form-item label="是否父级">
                        <el-radio-group v-model="form.type" placeholder="状态" class="m-b-8">
                            <el-radio :label="'1'">父级</el-radio>
                            <el-radio :label="'2'">子级</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="url">
                        <el-input v-model="form.url" placeholder="url"></el-input>
                    </el-form-item>
                    <el-form-item label="icon">
                        <el-input v-model="form.icon" placeholder="icon"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="addUserList">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script lang="ts">
import Content from "@/views/system/permission/permission.component";
export default Content
</script>


<style scoped lang="scss">

</style>