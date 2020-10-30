<template>
  <div>
    <!-- Control Bar -->
    <div class="flex justify-between">
      <!-- Left – Filter and search -->
      <div class="flex mb-6 space-x-2">
        <!-- Filter – Select the role type of users -->
        <el-select
          class="w-40"
          v-model="defaultSelectedRole"
          size="small"
          placeholder="Please..."
        >
          <el-option
            v-for="role in roles"
            :key="role.value"
            :label="role.label"
            :value='role.value'
          />
        </el-select>
        <!-- Search -->
        <el-input
          class="w-64"
          v-model="searchInput"
          size="small"
          placeholder="Please..."
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
          New User
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
          label="Email"></el-table-column>
        <el-table-column
          prop="username"
          label="Username"></el-table-column>
        <el-table-column
          prop="company"
          label="Company"></el-table-column>
        <el-table-column
          prop="role"
          label="Role"></el-table-column>
        <el-table-column
          label="Status">
          <template slot-scope="scope">
            <ym-status
              :status="scope.row.status.status"
              :label="scope.row.status.label"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="updateTime"
          label="Update Time"></el-table-column>
        <el-table-column
          label="Action"
          align="center"
        >
          <template slot-scope="scope">
            <div class="space-x-4">
              <ym-button
                type="text"
                size="mini"
                icon="edit"
                icon-only
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
                    <ym-svg svg-name="password" class="mr-2" />
                    {{ $t('common.account') }}
                  </el-dropdown-item>
                  <el-dropdown-item class="flex items-center">
                    <ym-svg svg-name="error" class="mr-2" />
                    {{ $t('common.disable') }}
                  </el-dropdown-item>
                  <el-dropdown-item divided />
                  <el-dropdown-item class="flex items-center">
                    <ym-svg svg-name="trash-can" class="mr-2" />
                    {{ $t('common.delete') }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { USERS } from '@/mock/UserMock';

export default {
  name: 'TheUsers',
  data() {
    return {
      defaultSelectedRole: 'admin',
      roles: [
        {
          value: 'admin',
          label: 'Admin',
        },
        {
          value: 'root',
          label: 'Root',
        },
      ],
      searchInput: '',
      userTableData: USERS,
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<style>
</style>
