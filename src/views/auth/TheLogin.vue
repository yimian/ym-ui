<template>
  <div class="panel-wrapper">
    <span class="logo">
      <img
        src="../../assets/logo.png"
        alt=""
      >
    </span>

    <div class="slogan-wrapper">
      <div class="slogan">
        <img
          src="../../assets/login-bg.svg"
          alt=""
        >
      </div>
    </div>

    <div class="panel-content">
      <base-langbar/>
      <div class="login-con">
        <el-form class="frame">
          <h1 v-if="!isMobile">
            {{ $t('common.loginN') }}
          </h1>
          <!-- <p>Don’t have an account? <el-button type="text">Create your account</el-button></p> -->
          <el-form-item>
            <el-input
              size="medium"
              clearable
              :placeholder="$t('common.username')"
              v-model="form.username"
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              size="medium"
              clearable
              :placeholder="$t('common.password')"
              v-model="form.password"
              type="password"
              @keyup.enter.native="login"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-button
                type="text"
                @click="redirectForgotPassword"
              >
                {{ $t('common.forgetPassword') }}
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                type="primary"
                size="medium"
                style="width:100%"
                :disabled="loginLoading"
                @click="login"
              >
                {{ $t('common.login') }}
                <i
                  v-if="loginLoading"
                  class="el-icon-loading"
                ></i>
              </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>

      <el-footer>
        {{ $t('common.copyrightMessage', { currentYear }) }}
      </el-footer>
    </div>
  </div>
</template>

<script>
import { isMobile, isEmptyObject } from '@/utils/util';
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';

export default {
  name: 'Login',
  components: {
    BaseLangbar,
  },
  data() {
    return {
      currentYear: (new Date()).getFullYear(),
      form: {
        username: 'general-demo',
        password: 'Ymdata123',
      },
      loginLoading: false,
      currentLang: this.$i18n.locale,
    };
  },
  computed: {
    isMobile() {
      return isMobile();
    },
  },
  created() {},
  methods: {
    login() {
      if (!this.form.password || !this.form.username) {
        return;
      }

      this.loginLoading = true;
      this.$auth.login(this.form).then(() => {
        try {
          this.$router.push({ name: 'Index' });
        } catch (err) {
          this.$router.push({ path: '/' });
        }
      }).catch((res) => {
        console.error('login failed', res);
        const { data } = res.data;
        const { reason } = res.data;

        if (!data || isEmptyObject(data)) {
          this.$message.error(this.$t(reason === 'not bind to current app'
            ? 'common.notBindApp' : 'common.invalid_password_username'));
          return;
        }

        const maxAttempts = data.login_max_attempts;
        const failedCount = data.login_failed_count;
        const enableLoginLock = data.enable_login_lock;
        const remainedCount = maxAttempts - failedCount;

        if (enableLoginLock && (reason !== 'invalid login or password'
          || (maxAttempts && maxAttempts <= failedCount))) {
          this.$message.error(this.$t('common.account_is_locked'));
        } else if (enableLoginLock && maxAttempts && failedCount !== null && failedCount <= maxAttempts) {
          if (this.$locale.current() === 'en' && remainedCount === 1) {
            this.$message.error('Invalid Username or Password. last login Remained.');
          } else {
            this.$message.error(this.$t('common.invalid_password_username_number', { number: remainedCount }));
          }
        } else {
          this.$message.error(this.$t('common.invalid_password_username'));
        }
      }).finally(() => {
        this.loginLoading = false;
      });
    },
    redirectForgotPassword() {
      window.open(`${process.env.VUE_APP_HAMLET_URL}/forgot_password?app_key=${process.env.VUE_APP_APP_KEY}&callback_url=${document.location.href}`);
    },
  },
};
</script>

<style lang="scss">
  @import "../../styles/_login.scss";
</style>
