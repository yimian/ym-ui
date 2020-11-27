<template>
  <div>
    <!-- Control Bar -->
    <div class="flex justify-between">
      <!-- Left – Filter and search -->
      <div class="flex mb-6 space-x-2">
        <!-- Search -->
        <el-input
          class="w-64"
          v-model="searchInput"
          size="small"
          :placeholder="$t('common.email') + '/' + $t('common.username')"
          prefix-icon="el-icon-search"
          clearable
        />
      </div>
      <!-- Right – CTAs -->
      <div>
        <ym-button
          type="primary"
          size="small"
          icon="user-follow"
        >
          {{ $t('common.addUser') }}
        </ym-button>
      </div>
    </div>
    <!-- Data Table -->
    <div class="overflow-hidden bg-white rounded-sm shadow">
      <el-table
        class="w-full"
        :data="userTableData"
      >
        <el-table-column
          prop="email"
          :label="$t('common.email')"
          sortable
          min-width="160"
        />
        <el-table-column
          prop="username"
          :label="$t('common.username')"
          sortable
          min-width="130"
        />
        <el-table-column
          prop="company"
          :label="$t('common.enterprise')"
          :filters="[
            {
              text: 'Louis Vuitton',
              value: 'Louis Vuitton',
            },
            {
              text: 'Ferrari',
              value: 'Ferrari',
            },
            {
              text: 'Gillette',
              value: 'Gillette',
            },
          ]"
          :filter-method="filterHandler"
          min-width="130"
        />
        <el-table-column
          prop="role"
          :label="$t('common.role')"
          :filters="[
            {
              text: 'Root',
              value: 'Root',
            },
            {
              text: 'Admin',
              value: 'Admin',
            },
          ]"
          :filter-method="filterHandler"
          width="128"
        />
        <el-table-column
          :label="$t('common.status')"
          width="128"
        >
          <template slot-scope="scope">
            <ym-status
              :status="scope.row.status.status"
              :label="scope.row.status.label"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="updateTime"
          :label="$t('common.updateTime')"
          sortable
          width="192"
        />
        <el-table-column
          :label="$t('route.actions')"
          align="center"
          fixed="right"
          width="96"
        >
          <template slot-scope="scope">
            <div class="space-x-4">
              <ym-button
                type="text"
                size="mini"
                icon="edit"
                icon-only
                @click="handleEdit(scope.$index, scope.row)"
              />
              <el-dropdown trigger="click">
                <ym-button
                  type="text"
                  size="mini"
                  icon="menu-more"
                  icon-only
                />
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item class="flex items-center">
                    <ym-svg
                      svg-name="password"
                      class="mr-2"
                    />
                    {{ $t('common.account') }}
                  </el-dropdown-item>
                  <el-dropdown-item class="flex items-center">
                    <ym-svg
                      svg-name="error"
                      class="mr-2"
                    />
                    {{ $t('common.disable') }}
                  </el-dropdown-item>
                  <el-dropdown-item divided />
                  <el-dropdown-item class="flex items-center">
                    <ym-svg
                      svg-name="trash-can"
                      class="mr-2"
                    />
                    {{ $t('common.delete') }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="p-4 text-right"
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { USERS } from '@/mock/UserMock';

export default {
  name: 'TheUsers',
  data() {
    return {
      defaultSelectedRole: 'all',
      searchInput: '',
      userTableData: USERS,
    };
  },
  computed: {},
  watch: {},
  methods: {
    filterHandler(value, row, column) {
      const { property } = column;
      return row[property] === value;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style>
</style>
